#!/usr/bin/env python3
"""haome525.github.io — 本地预览服务器
用法: python preview_server.py [端口号]

自动处理:
  1. UTF-8 charset 正确设置（解决中文乱码）
  2. 去除 Jekyll Front Matter (--- ... ---)
  3. 模拟处理 Jekyll Include 标签
  4. 简化 Liquid 变量替换
"""

import os
import re
import sys
import http.server
import socketserver

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 4000
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# ============================================================
# Jekyll 模拟处理
# ============================================================

# Windows 换行符适配：统一转 \n 处理
NL = r'\r?\n'

def strip_frontmatter(text):
    """去除 Jekyll Front Matter (--- ... ---)"""
    # Windows 兼容: 处理 \r\n 和 \n
    result = re.sub(
        r'^---\s*[\r\n]+.*?[\r\n]+---\s*[\r\n]+',
        '',
        text,
        count=1,
        flags=re.DOTALL
    )
    return result


def parse_frontmatter(text):
    """提取 Jekyll Front Matter 为 dict"""
    m = re.match(r'^---\s*[\r\n]+(.*?)[\r\n]+---\s*[\r\n]+', text, flags=re.DOTALL)
    if not m:
        return {}, text
    fm_text = m.group(1)
    fm = {}
    for line in fm_text.splitlines():
        line = line.strip()
        if not line or line.startswith('#'):
            continue
        m2 = re.match(r'^([a-zA-Z_]+)\s*:\s*(.*)$', line)
        if m2:
            key = m2.group(1).strip()
            val = m2.group(2).strip().strip('"').strip("'")
            fm[key] = val
    return fm, text[m.end():]


def apply_layout(page_text):
    """模拟 Jekyll 的 layout: 机制，用布局包裹页面内容"""
    fm, body = parse_frontmatter(page_text)
    layout_name = fm.get('layout')
    if not layout_name:
        return body
    layout_path = os.path.join(BASE_DIR, '_layouts', layout_name + '.html')
    if not os.path.exists(layout_path):
        return body
    with open(layout_path, 'r', encoding='utf-8') as f:
        layout = f.read()
    # 去掉布局自身的 front matter
    layout = strip_frontmatter(layout)
    # 用页面正文替换布局中的 {{ content }}
    layout = layout.replace('{{ content }}', body)
    # 简单替换页面级变量
    for k, v in fm.items():
        layout = re.sub(r'\{\{\s*page\.' + re.escape(k) + r'\s*\}\}', v, layout)
    return layout


def load_include(name):
    """加载 _includes/ 目录中的文件"""
    # 尝试多个路径
    for dirpath in [BASE_DIR]:
        inc_path = os.path.join(dirpath, '_includes', name)
        if os.path.exists(inc_path):
            with open(inc_path, 'r', encoding='utf-8') as f:
                return f.read()
    return ''


def process_includes(text):
    """模拟处理 {% include file.html %} 标签"""
    def _replacer(m):
        name = m.group(1).strip()
        inc = load_include(name)
        if '{% include' in inc:
            inc = process_includes(inc)
        inc = strip_frontmatter(inc)
        return inc

    text = re.sub(
        r'\{%\s*include\s+([^\s%}]+(?:\.html)?)\s*[^%]*%\}[^\n]*\n?',
        _replacer,
        text
    )
    return text


def process_liquid(text):
    """简化处理 Liquid 模板标签"""
    # 替换 site.xxx 变量
    replacements = {
        r'\{\{\s*site\.title\s*\}\}': 'haome525',
        r'\{\{\s*site\.description\s*\}\}': 'AI 驱动 · 全栈开发 · 持续创造',
        r'\{\{\s*site\.SEOTitle\s*\}\}': 'haome525 | AI · 全栈 · 创造',
        r'\{\{\s*site\.baseurl\s*\}\}': '',
        r'\{\{\s*site\.url\s*\}\}': f'http://localhost:{PORT}',
        r'\{\{\s*site\.github_username\s*\}\}': 'haome525',
        r'\{\{\s*site\.zhihu_username\s*\}\}': 'haome525',
        r'\{\{\s*site\.email\s*\}\}': 'haome525@gmail.com',
        r'\{\{\s*site\.header-img\s*\}\}': 'blog/img/home-bg.jpg',
        r'\{\{\s*site\.keyword\s*\}\}': 'haome525, AI, 全栈开发, iOS, RaaS',
        r'\{\{\s*site\.sidebar-about-description\s*\}\}': 'Goals determine what you going to be!',
        r'\{\{\s*site\.sidebar-avatar\s*\}\}': '/blog/img/about-BY-gentle.jpg',
        r'\{\{\s*site\.chrome-tab-theme-color\s*\}\}': '#4F46E5',
        r'\{\{\s*site\.time\s*\|\s*date:\s*["\']%Y["\']\s*\}\}': '2026',
    }
    for pattern, value in replacements.items():
        text = re.sub(pattern, value, text)

    # 展开控制流标签：保留 if 分支内容，丢弃 else 分支，再去掉标签本身
    # （模拟 Jekyll 对已定义 page 变量的判断；使 {% if page.extra_css %}<link>{% endif %} 正确输出）
    text = re.sub(r'\{%\s*else\s*%\}[\s\S]*?\{%\s*endif\s*%\}', '', text)
    text = re.sub(r'\{%\s*(if|else|endif|for|endfor|unless|endunless|when)\s*[^%]*%\}', '', text)

    # 移除剩余的 Liquid 变量
    text = re.sub(r'\{\{[^}]*\}\}', '', text)
    # 移除剩余的标签
    text = re.sub(r'\{%[^%]*%\}', '', text)

    return text


def process_html(text):
    """对 HTML 内容应用所有 Jekyll 处理"""
    # 先应用 layout（用布局包裹正文），再去除正文 front matter
    text = apply_layout(text)
    text = process_includes(text)
    text = process_liquid(text)
    return text


# ============================================================
# HTTP Handler
# ============================================================

class PreviewHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=BASE_DIR, **kwargs)

    def guess_type(self, path):
        ext = os.path.splitext(path)[1].lower()
        mime_map = {
            '.html': 'text/html; charset=utf-8',
            '.css':  'text/css; charset=utf-8',
            '.js':   'application/javascript; charset=utf-8',
            '.md':   'text/markdown; charset=utf-8',
            '.yml':  'text/plain; charset=utf-8',
            '.yaml': 'text/plain; charset=utf-8',
            '.xml':  'application/xml; charset=utf-8',
        }
        return mime_map.get(ext) or super().guess_type(path)

    def end_headers(self):
        super().end_headers()

    def do_GET(self):
        # 解析请求路径
        parsed_path = self.translate_path(self.path)
        serve_path = parsed_path

        # 目录 → 找 index.html
        if os.path.isdir(serve_path):
            serve_path = os.path.join(serve_path, 'index.html')

        if os.path.isfile(serve_path) and serve_path.endswith('.html'):
            try:
                with open(serve_path, 'r', encoding='utf-8') as f:
                    raw = f.read()
                cooked = process_html(raw)

                body = cooked.encode('utf-8')
                self.send_response(200)
                self.send_header('Content-Type', 'text/html; charset=utf-8')
                self.send_header('Content-Length', str(len(body)))
                self.send_header('Cache-Control', 'no-cache')
                self.end_headers()
                self.wfile.write(body)
                return
            except Exception as e:
                self.send_error(500, f'Error processing {serve_path}: {e}')
                return

        # 非 HTML 文件走默认处理
        super().do_GET()


# ============================================================
# 主入口
# ============================================================

if __name__ == '__main__':
    os.chdir(BASE_DIR)
    print("")
    print("=" * 55)
    print("  haome525.github.io - Local Preview Server")
    print("  URL: http://localhost:{}/".format(PORT))
    print("=" * 55)
    print("  [OK] UTF-8 Encoding (Chinese text supported)")
    print("  [OK] Front Matter / Include / Liquid processed")
    print("  [OK] Press Ctrl+C to stop")
    print("=" * 55)
    print("")
    with socketserver.TCPServer(('', PORT), PreviewHandler) as httpd:
        httpd.serve_forever()

---
title: Web 安全防护实战指南
tags: [安全, Web, 漏洞, 防护]
date: 2026-07-01
updated: 2026-07-01
---

# Web 安全防护实战指南

## 1. XSS（跨站脚本攻击）

### 原理
攻击者在网页中注入恶意脚本。

### 防护
```html
<!-- 输出编码 -->
<div th:text="${userInput}">  <!-- Thymeleaf 自动编码 -->

<!-- CSP 策略 -->
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'">
```

## 2. CSRF（跨站请求伪造）

### 防护方案
```python
# 使用 CSRF Token
@app.route('/transfer', methods=['POST'])
def transfer():
    token = request.form.get('csrf_token')
    if token != session['csrf_token']:
        abort(403)
    # 执行转账
```

## 3. SQL 注入

### 防护
```python
# ❌ 拼接 SQL（危险）
cursor.execute(f"SELECT * FROM users WHERE email = '{email}'")

# ✅ 参数化查询（安全）
cursor.execute("SELECT * FROM users WHERE email = %s", (email,))
```

## 4. SSRF（服务端请求伪造）

### 防护
```python
import re

def safe_fetch(url):
    # 禁止内网地址
    if re.match(r'^(http://)?(127\.|10\.|172\.(1[6-9]|2|3[01])\.|192\.168\.)', url):
        raise ValueError("Blocked internal address")
    return requests.get(url, timeout=5)
```

## 5. 安全清单

- ✅ HTTPS 全网加密
- ✅ 密码 bcrypt/Argon2 哈希
- ✅ JWT 签名密钥定期轮换
- ✅ 文件上传限制类型和大小
- ✅ API 限流防止暴力攻击
- ✅ 日志审计记录关键操作

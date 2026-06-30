/* navigation.js — 导航页面交互逻辑 */
(function() {
  'use strict';

  const $ = s => document.querySelector(s);
  const $$ = s => document.querySelectorAll(s);

  /* ===== 防抖函数 ===== */
  function debounce(fn, ms = 300) {
    let timer;
    return function(...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), ms);
    };
  }

  /* ===== 存储模块 ===== */
  const Storage = {
    get(key, defaultValue = null) {
      try {
        const value = localStorage.getItem('nav-' + key);
        return value ? JSON.parse(value) : defaultValue;
      } catch (e) {
        return defaultValue;
      }
    },
    set(key, value) {
      try {
        localStorage.setItem('nav-' + key, JSON.stringify(value));
      } catch (e) {}
    }
  };

  /* ===== 主题模块 ===== */
  const Theme = {
    init() {
      let mode = Storage.get('theme');
      if (!mode) {
        mode = window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
      this.apply(mode);
    },
    apply(mode) {
      document.documentElement.setAttribute('data-mode', mode);
      Storage.set('theme', mode);
      const btn = $('#themeToggle');
      if (btn) btn.textContent = mode === 'dark' ? '☀️' : '🌙';
    },
    toggle() {
      const current = document.documentElement.getAttribute('data-mode') || 'light';
      this.apply(current === 'light' ? 'dark' : 'light');
    }
  };

  /* ===== 搜索模块 ===== */
  const Search = {
    init() {
      const input = $('#navSearchInput');
      if (!input) return;
      input.addEventListener('input', debounce(() => {
        const query = input.value.trim().toLowerCase();
        NavApp.filterAndRender(query, NavApp.currentCategory);
      }, 300));
    },
    query() {
      const input = $('#navSearchInput');
      return input ? input.value.trim().toLowerCase() : '';
    },
    highlight(text, query) {
      if (!query) return text;
      const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
      return text.replace(regex, '<mark>$1</mark>');
    }
  };

  /* ===== 主应用 ===== */
  const NavApp = {
    currentCategory: 'all',
    tools: NAV_DATA.tools,
    categories: NAV_DATA.categories,

    init() {
      Theme.init();
      this.renderTabs();
      this.renderGrid();
      Search.init();

      // 主题切换按钮
      const themeBtn = $('#themeToggle');
      if (themeBtn) {
        themeBtn.addEventListener('click', () => Theme.toggle());
      }
    },

    renderTabs() {
      const container = $('#navTabs');
      if (!container) return;
      
      container.innerHTML = this.categories.map(cat => 
        `<button class="nav-tab${cat.id === this.currentCategory ? ' active' : ''}" data-category="${cat.id}">${cat.icon} ${cat.name}</button>`
      ).join('');

      container.addEventListener('click', (e) => {
        const btn = e.target.closest('.nav-tab');
        if (!btn) return;
        $$('.nav-tab').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.currentCategory = btn.dataset.category;
        this.filterAndRender(Search.query(), this.currentCategory);
      });
    },

    filterAndRender(query, category) {
      let filtered = this.tools;

      // 分类筛选
      if (category && category !== 'all') {
        filtered = filtered.filter(t => t.category === category);
      }

      // 搜索筛选
      if (query) {
        filtered = filtered.filter(t => 
          t.name.toLowerCase().includes(query) ||
          t.desc.toLowerCase().includes(query) ||
          t.tags.some(tag => tag.toLowerCase().includes(query))
        );
      }

      this.renderGrid(filtered, query);
    },

    renderGrid(tools = this.tools, query = '') {
      const container = $('#navGrid');
      const stats = $('#navStats');
      if (!container) return;

      if (tools.length === 0) {
        container.innerHTML = `
          <div class="nav-empty">
            <div class="nav-empty-icon">🔍</div>
            <p>没有找到匹配的工具</p>
          </div>`;
        if (stats) stats.textContent = '';
        return;
      }

      container.innerHTML = tools.map(tool => `
        <a class="nav-card" href="${tool.url}" target="_blank" rel="noopener">
          <div class="nav-card-icon">
            ${tool.icon ? `<img src="${tool.icon}" onerror="this.parentElement.innerHTML='<span class=emoji>${this.getCategoryEmoji(tool.category)}</span>'" alt="${tool.name}">` : `<span class="emoji">${this.getCategoryEmoji(tool.category)}</span>`}
          </div>
          <div class="nav-card-name">${Search.highlight(tool.name, query)}</div>
          <div class="nav-card-desc">${Search.highlight(tool.desc, query)}</div>
          <div class="nav-card-tags">
            ${tool.tags.map(tag => `<span class="nav-tag">${tag}</span>`).join('')}
            ${tool.hot ? '<span class="nav-card-badge">热门</span>' : ''}
          </div>
        </a>
      `).join('');

      if (stats) {
        stats.textContent = `共 ${tools.length} 个工具`;
      }
    },

    getCategoryEmoji(categoryId) {
      const cat = this.categories.find(c => c.id === categoryId);
      return cat ? cat.icon : '📦';
    }
  };

  /* ===== 初始化 ===== */
  document.addEventListener('DOMContentLoaded', () => NavApp.init());
})();
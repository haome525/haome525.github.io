/* articles.js — 文章页面交互逻辑 */
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
        const value = localStorage.getItem('articles-' + key);
        return value ? JSON.parse(value) : defaultValue;
      } catch (e) {
        return defaultValue;
      }
    },
    set(key, value) {
      try {
        localStorage.setItem('articles-' + key, JSON.stringify(value));
      } catch (e) {}
    }
  };

  /* ===== 视图模块 ===== */
  const View = {
    current: 'grid',
    init() {
      this.current = Storage.get('view') || 'grid';
      this.apply(this.current);
    },
    set(view) {
      this.current = view;
      Storage.set('view', view);
      this.apply(view);
    },
    apply(view) {
      const grid = $('#articleGrid');
      const list = $('#articleList');
      if (!grid || !list) return;

      if (view === 'list') {
        grid.classList.add('hide');
        list.classList.add('show');
      } else {
        grid.classList.remove('hide');
        list.classList.remove('show');
      }

      // 更新按钮状态
      $$('.article-view-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.view === view);
      });
    },
    toggle() {
      this.set(this.current === 'grid' ? 'list' : 'grid');
    }
  };

  /* ===== 搜索模块 ===== */
  const Search = {
    init() {
      const input = $('#articleSearchInput');
      if (!input) return;
      input.addEventListener('input', debounce(() => {
        const query = input.value.trim().toLowerCase();
        ArticlesApp.filterAndRender(query, ArticlesApp.currentCategory);
      }, 300));
    },
    query() {
      const input = $('#articleSearchInput');
      return input ? input.value.trim().toLowerCase() : '';
    },
    highlight(text, query) {
      if (!query) return text;
      const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
      return text.replace(regex, '<mark>$1</mark>');
    }
  };

  /* ===== 主应用 ===== */
  const ArticlesApp = {
    currentCategory: 'all',
    articles: ARTICLES_DATA.articles,
    categories: ARTICLES_DATA.categories,

    init() {
      View.init();
      this.renderTabs();
      this.renderOverview();
      this.renderGrid();
      this.renderList();
      Search.init();

      // 视图切换按钮
      $$('.article-view-btn').forEach(btn => {
        btn.addEventListener('click', () => View.set(btn.dataset.view));
      });

      // 主题切换按钮
      const themeBtn = $('#themeToggle');
      if (themeBtn) {
        themeBtn.addEventListener('click', () => {
          const current = document.documentElement.getAttribute('data-mode') || 'light';
          const next = current === 'light' ? 'dark' : 'light';
          document.documentElement.setAttribute('data-mode', next);
          Storage.set('theme', next);
          themeBtn.textContent = next === 'dark' ? '☀️' : '🌙';
        });
      }
    },

    renderOverview() {
      const container = $('#articleOverview');
      if (!container) return;

      const total = this.articles.length;
      const catCount = this.categories.length - 1; // 排除"全部"
      
      // 计算本周文章数
      const now = new Date();
      const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      const thisWeek = this.articles.filter(a => new Date(a.date) >= weekAgo).length;

      // 计算本月文章数
      const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
      const thisMonth = this.articles.filter(a => new Date(a.date) >= monthStart).length;

      container.innerHTML = `
        <div class="article-stat">
          <div class="article-stat-num">${total}</div>
          <div class="article-stat-label">总文章</div>
          <div class="article-stat-sub">Total Articles</div>
        </div>
        <div class="article-stat">
          <div class="article-stat-num">${catCount}</div>
          <div class="article-stat-label">文章分类</div>
          <div class="article-stat-sub">Categories</div>
        </div>
        <div class="article-stat">
          <div class="article-stat-num">${thisWeek}</div>
          <div class="article-stat-label">本周更新</div>
          <div class="article-stat-sub">This Week</div>
        </div>
        <div class="article-stat">
          <div class="article-stat-num">${thisMonth}</div>
          <div class="article-stat-label">本月更新</div>
          <div class="article-stat-sub">This Month</div>
        </div>
      `;
    },

    renderTabs() {
      const container = $('#articleTabs');
      if (!container) return;
      
      container.innerHTML = this.categories.map(cat => 
        `<button class="article-filter${cat.id === this.currentCategory ? ' active' : ''}" data-category="${cat.id}">${cat.icon} ${cat.name}</button>`
      ).join('');

      container.addEventListener('click', (e) => {
        const btn = e.target.closest('.article-filter');
        if (!btn) return;
        $$('.article-filter').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.currentCategory = btn.dataset.category;
        this.filterAndRender(Search.query(), this.currentCategory);
      });
    },

    filterAndRender(query, category) {
      let filtered = this.articles;

      // 分类筛选
      if (category && category !== 'all') {
        filtered = filtered.filter(a => a.category === category);
      }

      // 搜索筛选
      if (query) {
        filtered = filtered.filter(a => 
          a.title.toLowerCase().includes(query) ||
          a.desc.toLowerCase().includes(query) ||
          a.tags.some(tag => tag.toLowerCase().includes(query))
        );
      }

      this.renderGrid(filtered, query);
      this.renderList(filtered, query);
    },

    renderGrid(articles = this.articles, query = '') {
      const container = $('#articleGrid');
      const stats = $('#articleStats');
      if (!container) return;

      if (articles.length === 0) {
        container.innerHTML = `
          <div class="article-empty">
            <div class="article-empty-icon">🔍</div>
            <p>没有找到匹配的文章</p>
          </div>`;
        if (stats) stats.textContent = '';
        return;
      }

      container.innerHTML = articles.map((article, index) => {
        const cat = this.categories.find(c => c.id === article.category);
        const catColor = cat ? cat.color : '#666';
        return `
          <a class="article-card" href="/articles/${article.slug}/" data-cat="${article.category}">
            <div class="article-card-num">${String(index + 1).padStart(2, '0')}</div>
            <span class="article-card-tag" style="background: ${catColor}15; color: ${catColor};">${cat ? cat.icon : ''} ${cat ? cat.name : ''}</span>
            <h3 class="article-card-title">${Search.highlight(article.title, query)}</h3>
            <p class="article-card-desc">${Search.highlight(article.desc, query)}</p>
            <div class="article-card-meta">
              <span>📅 ${article.date}</span>
              <span>⏱️ ${article.readTime}分钟</span>
            </div>
            <span class="article-card-more">阅读全文 <i class="fas fa-arrow-right"></i></span>
          </a>
        `;
      }).join('');

      if (stats) {
        stats.textContent = `共 ${articles.length} 篇文章`;
      }
    },

    renderList(articles = this.articles, query = '') {
      const container = $('#articleList');
      if (!container) return;

      if (articles.length === 0) {
        container.innerHTML = '';
        return;
      }

      container.innerHTML = articles.map((article, index) => {
        const cat = this.categories.find(c => c.id === article.category);
        const catColor = cat ? cat.color : '#666';
        return `
          <a class="article-list-item" href="/articles/${article.slug}/" data-cat="${article.category}">
            <span class="article-list-num">${String(index + 1).padStart(2, '0')}</span>
            <div class="article-list-main">
              <div class="article-list-title">${Search.highlight(article.title, query)}</div>
              <div class="article-list-desc">${Search.highlight(article.desc, query)}</div>
            </div>
            <div class="article-list-meta">
              <span class="article-list-tag" style="background: ${catColor}15; color: ${catColor};">${cat ? cat.name : ''}</span>
              <span>${article.date}</span>
              <span>${article.readTime}分钟</span>
            </div>
          </a>
        `;
      }).join('');
    },

    getCategoryColor(categoryId) {
      const cat = this.categories.find(c => c.id === categoryId);
      return cat ? cat.color : '#666';
    }
  };

  /* ===== 初始化 ===== */
  document.addEventListener('DOMContentLoaded', () => ArticlesApp.init());
})();
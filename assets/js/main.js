/* ============================================================
   haome525.github.io — Main JavaScript
   主题切换 · 导航交互 · 滚动动画
   ============================================================ */

(function () {
  'use strict';

  /* ---------- 主题系统（首屏防闪脚本已设置初始属性） ---------- */
  var THEME_KEY = 'hao-theme';
  var MODE_KEY = 'hao-mode';
  var root = document.documentElement;

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    try { localStorage.setItem(THEME_KEY, theme); } catch (e) {}
    updateActiveStates();
  }

  function applyMode(mode) {
    root.setAttribute('data-mode', mode);
    try { localStorage.setItem(MODE_KEY, mode); } catch (e) {}
    updateActiveStates();
  }

  function updateActiveStates() {
    var theme = root.getAttribute('data-theme');
    var mode = root.getAttribute('data-mode');
    document.querySelectorAll('[data-theme-option]').forEach(function (el) {
      el.classList.toggle('active', el.getAttribute('data-theme-option') === theme);
    });
    document.querySelectorAll('[data-mode-option]').forEach(function (el) {
      el.classList.toggle('active', el.getAttribute('data-mode-option') === mode);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {

    /* --- 主题切换面板 --- */
    var toggleBtn = document.querySelector('.theme-toggle-btn');
    var panel = document.querySelector('.theme-panel');

    if (toggleBtn && panel) {
      toggleBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        panel.classList.toggle('open');
      });

      document.addEventListener('click', function (e) {
        if (!panel.contains(e.target) && e.target !== toggleBtn) {
          panel.classList.remove('open');
        }
      });

      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') panel.classList.remove('open');
      });
    }

    document.querySelectorAll('[data-theme-option]').forEach(function (el) {
      el.addEventListener('click', function () {
        applyTheme(el.getAttribute('data-theme-option'));
      });
    });

    document.querySelectorAll('[data-mode-option]').forEach(function (el) {
      el.addEventListener('click', function () {
        applyMode(el.getAttribute('data-mode-option'));
      });
    });

    updateActiveStates();

    /* --- 导航栏滚动效果 --- */
    var nav = document.querySelector('.glass-nav');
    if (nav) {
      var onScroll = function () {
        if (window.scrollY > 50) {
          nav.classList.add('scrolled');
        } else {
          nav.classList.remove('scrolled');
        }
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }

    /* --- 移动端菜单 --- */
    var mobileToggle = document.querySelector('.nav-mobile-toggle');
    var navLinks = document.querySelector('.glass-nav .nav-links');
    if (mobileToggle && navLinks) {
      mobileToggle.addEventListener('click', function () {
        navLinks.classList.toggle('open');
      });
      navLinks.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          navLinks.classList.remove('open');
        });
      });
    }

    /* --- 滚动渐入 --- */
    var revealEls = document.querySelectorAll('.reveal');
    if (revealEls.length > 0 && 'IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
      revealEls.forEach(function (el) { io.observe(el); });
    } else {
      revealEls.forEach(function (el) { el.classList.add('visible'); });
    }

    /* --- 当前导航高亮 --- */
    var currentPath = window.location.pathname;
    document.querySelectorAll('.glass-nav .nav-links a').forEach(function (link) {
      var href = link.getAttribute('href');
      if (!href) return;
      if (href === '/' && (currentPath === '/' || currentPath === '/index.html')) {
        link.classList.add('active');
      } else if (href !== '/' && currentPath.indexOf(href) === 0) {
        link.classList.add('active');
      }
    });

    /* --- 锚点平滑滚动 --- */
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var target = document.querySelector(this.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    /* --- 导航页：分类筛选 + 搜索 --- */
    var filters = document.querySelectorAll('.nav-filter');
    var cards = document.querySelectorAll('.nav-card');
    var searchInput = document.querySelector('.nav-search input');

    var activeCategory = 'all';

    function filterCards() {
      var query = searchInput ? searchInput.value.trim().toLowerCase() : '';
      cards.forEach(function (card) {
        var cat = card.getAttribute('data-category') || '';
        var text = (card.textContent || '').toLowerCase();
        var matchCat = activeCategory === 'all' || cat === activeCategory;
        var matchQuery = !query || text.indexOf(query) > -1;
        card.classList.toggle('hidden', !(matchCat && matchQuery));
      });
    }

    filters.forEach(function (f) {
      f.addEventListener('click', function () {
        filters.forEach(function (x) { x.classList.remove('active'); });
        f.classList.add('active');
        activeCategory = f.getAttribute('data-filter') || 'all';
        filterCards();
      });
    });

    if (searchInput) {
      searchInput.addEventListener('input', filterCards);
    }
  });
})();

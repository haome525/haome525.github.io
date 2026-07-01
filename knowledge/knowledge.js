/* knowledge.js — 知识系统应用逻辑 */
(function () {
  'use strict';

  /* ===== State ===== */
  const state = {
    currentZone: null,
    currentCategory: null,
    currentSubcategory: null,
    currentEntry: null,
    searchQuery: '',
    selectedTags: [],
    viewMode: 'grid'
  };

  /* ===== DOM Cache ===== */
  const $ = function (id) { return document.getElementById(id); };
  const dom = {};

  function cacheDom() {
    dom.search = $('knowledgeSearch');
    dom.searchClear = $('searchClear');
    dom.stats = $('knowledgeStats');
    dom.zones = $('knowledgeZones');
    dom.tree = $('knowledgeTree');
    dom.breadcrumb = $('breadcrumb');
    dom.toolbar = $('knowledgeToolbar');
    dom.entryList = $('entryList');
    dom.entryDetail = $('entryDetail');
  }

  /* ===== Data Helpers ===== */
  function getCategories(zoneId) {
    return KNOWLEDGE_DATA.categories.filter(function (c) { return c.zone === zoneId; });
  }

  function getSubcategories(catId) {
    return KNOWLEDGE_DATA.subcategories.filter(function (s) { return s.category === catId; });
  }

  function getEntriesForSubcategory(subId) {
    return KNOWLEDGE_DATA.entries.filter(function (e) { return e.subcategory === subId; });
  }

  function getEntriesForCategory(catId) {
    return KNOWLEDGE_DATA.entries.filter(function (e) { return e.category === catId; });
  }

  function getEntriesForZone(zoneId) {
    return KNOWLEDGE_DATA.entries.filter(function (e) { return e.zone === zoneId; });
  }

  function getCategory(id) {
    return KNOWLEDGE_DATA.categories.find(function (c) { return c.id === id; });
  }

  function getSubcategory(id) {
    return KNOWLEDGE_DATA.subcategories.find(function (s) { return s.id === id; });
  }

  function getAllTags(entries) {
    var tagSet = {};
    entries.forEach(function (e) {
      e.tags.forEach(function (t) { tagSet[t] = (tagSet[t] || 0) + 1; });
    });
    return Object.keys(tagSet).sort().map(function (t) { return { name: t, count: tagSet[t] }; });
  }

  function filterEntries(entries) {
    var result = entries.slice();
    if (state.searchQuery) {
      var q = state.searchQuery.toLowerCase();
      result = result.filter(function (e) {
        return e.title.toLowerCase().includes(q) ||
               e.desc.toLowerCase().includes(q) ||
               e.tags.some(function (t) { return t.toLowerCase().includes(q); });
      });
    }
    if (state.selectedTags.length > 0) {
      result = result.filter(function (e) {
        return state.selectedTags.every(function (t) { return e.tags.includes(t); });
      });
    }
    return result;
  }

  /* ===== Render Functions ===== */

  function renderStats() {
    var entries = KNOWLEDGE_DATA.entries;
    var catCount = KNOWLEDGE_DATA.categories.length;
    var tagSet = {};
    entries.forEach(function (e) { e.tags.forEach(function (t) { tagSet[t] = true; }); });
    var tagCount = Object.keys(tagSet).length;
    var dates = entries.map(function (e) { return e.updated; }).sort().reverse();
    var latest = dates.length > 0 ? dates[0] : '—';

    dom.stats.innerHTML =
      '<div class="knowledge-stat-card"><span class="stat-icon">📂</span><span><span class="stat-value">' + catCount + '</span> <span class="stat-label">个分类</span></span></div>' +
      '<div class="knowledge-stat-card"><span class="stat-icon">📝</span><span><span class="stat-value">' + entries.length + '</span> <span class="stat-label">个条目</span></span></div>' +
      '<div class="knowledge-stat-card"><span class="stat-icon">🔖</span><span><span class="stat-value">' + tagCount + '</span> <span class="stat-label">个标签</span></span></div>' +
      '<div class="knowledge-stat-card"><span class="stat-icon">✨</span><span><span class="stat-value">' + latest + '</span> <span class="stat-label">最近更新</span></span></div>';
  }

  function renderZones() {
    var html = '';
    KNOWLEDGE_DATA.zones.forEach(function (z) {
      var active = z.id === state.currentZone ? ' active' : '';
      html += '<button class="knowledge-zone-tab' + active + '" data-zone="' + z.id + '">' + z.icon + ' ' + z.name + '</button>';
    });
    dom.zones.innerHTML = html;
  }

  function renderTree(zoneId) {
    var cats = getCategories(zoneId);
    var html = '';
    cats.forEach(function (cat) {
      var subs = getSubcategories(cat.id);
      var catActive = cat.id === state.currentCategory ? ' active' : '';
      var hasEntries = getEntriesForCategory(cat.id).length > 0;
      var entryCount = getEntriesForCategory(cat.id).length;

      html += '<div class="tree-node" data-type="category" data-id="' + cat.id + '">';
      html += '  <div class="tree-node-header' + catActive + '">';
      if (subs.length > 0) {
        html += '    <span class="tree-arrow" data-action="toggle">▶</span>';
      } else {
        html += '    <span class="tree-arrow" style="visibility:hidden">▶</span>';
      }
      html += '    <span class="tree-icon">' + (cat.icon || '📂') + '</span>';
      html += '    <span class="tree-name">' + cat.name + '</span>';
      if (entryCount > 0) html += '    <span class="tree-count">' + entryCount + '</span>';
      html += '  </div>';

      if (subs.length > 0) {
        html += '  <div class="tree-children" data-parent="' + cat.id + '">';
        subs.forEach(function (sub) {
          var subActive = sub.id === state.currentSubcategory ? ' active' : '';
          var subCount = getEntriesForSubcategory(sub.id).length;
          html += '    <div class="tree-node" data-type="subcategory" data-id="' + sub.id + '">';
          html += '      <div class="tree-node-header' + subActive + '">';
          html += '        <span class="tree-arrow" style="visibility:hidden">▶</span>';
          html += '        <span class="tree-icon">' + (sub.icon || '📄') + '</span>';
          html += '        <span class="tree-name">' + sub.name + '</span>';
          if (subCount > 0) html += '        <span class="tree-count">' + subCount + '</span>';
          html += '      </div>';
          html += '    </div>';
        });
        html += '  </div>';
      }
      html += '</div>';
    });
    dom.tree.innerHTML = html;

    // Auto-expand active category
    if (state.currentCategory) {
      var children = dom.tree.querySelector('[data-parent="' + state.currentCategory + '"]');
      if (children) {
        children.classList.add('open');
        var arrow = children.closest('.tree-node').querySelector('.tree-arrow');
        if (arrow) arrow.classList.add('expanded');
      }
    }
  }

  function renderBreadcrumb() {
    var parts = [];
    var zone = KNOWLEDGE_DATA.zones.find(function (z) { return z.id === state.currentZone; });
    if (zone) parts.push({ label: zone.name, action: 'zone' });

    if (state.currentCategory) {
      var cat = getCategory(state.currentCategory);
      if (cat) parts.push({ label: cat.name, action: 'category', id: cat.id });
    }

    if (state.currentSubcategory) {
      var sub = getSubcategory(state.currentSubcategory);
      if (sub) parts.push({ label: sub.name, action: 'subcategory', id: sub.id });
    }

    if (state.currentEntry) {
      var entry = KNOWLEDGE_DATA.entries.find(function (e) { return e.id === state.currentEntry; });
      if (entry) parts.push({ label: entry.title, action: null, id: entry.id });
    }

    var html = '';
    parts.forEach(function (p, i) {
      if (i > 0) html += '<span class="bc-sep">›</span>';
      if (p.action) {
        html += '<span data-action="' + p.action + '" data-id="' + (p.id || '') + '">' + p.label + '</span>';
      } else {
        html += '<span class="current">' + p.label + '</span>';
      }
    });
    dom.breadcrumb.innerHTML = html;
  }

  function renderToolbar(entries) {
    var title = '';
    if (state.currentSubcategory) {
      var sub = getSubcategory(state.currentSubcategory);
      if (sub) title = sub.name;
    } else if (state.currentCategory) {
      var cat = getCategory(state.currentCategory);
      if (cat) title = cat.name;
    } else if (state.currentZone) {
      var zone = KNOWLEDGE_DATA.zones.find(function (z) { return z.id === state.currentZone; });
      if (zone) title = zone.name + '（全部）';
    }

    var filtered = filterEntries(entries);
    var tags = getAllTags(entries);

    var tagHtml = '<div class="tag-filters">';
    tags.forEach(function (t) {
      var active = state.selectedTags.includes(t.name) ? ' active' : '';
      tagHtml += '<button class="tag-filter' + active + '" data-tag="' + t.name + '">' + t.name + ' (' + t.count + ')</button>';
    });
    tagHtml += '</div>';

    var viewHtml =
      '<div class="knowledge-view-toggle">' +
      '  <button class="view-btn' + (state.viewMode === 'grid' ? ' active' : '') + '" data-view="grid"><i class="fas fa-th-large"></i></button>' +
      '  <button class="view-btn' + (state.viewMode === 'list' ? ' active' : '') + '" data-view="list"><i class="fas fa-list"></i></button>' +
      '</div>';

    dom.toolbar.innerHTML =
      '<div class="knowledge-toolbar-title">' + title + ' <span style="font-size:12px;color:var(--text-muted);font-weight:400">共 ' + filtered.length + ' 个条目</span></div>' +
      tagHtml +
      viewHtml;
  }

  function renderEntryList(entries) {
    var filtered = filterEntries(entries);

    if (filtered.length === 0) {
      dom.entryList.innerHTML =
        '<div class="knowledge-empty"><div class="knowledge-empty-icon">🔍</div><p>未找到相关内容，试试其他关键词或标签</p></div>';
      return;
    }

    if (state.viewMode === 'grid') {
      var html = '<div class="entry-grid">';
      filtered.forEach(function (e) {
        var tagsHtml = e.tags.slice(0, 3).map(function (t) {
          return '<span class="entry-card-tag">' + t + '</span>';
        }).join('');
        html += '<div class="entry-card" data-entry="' + e.id + '">';
        html += '  <div class="entry-card-title">' + highlightText(e.title, state.searchQuery) + '</div>';
        html += '  <div class="entry-card-desc">' + highlightText(e.desc, state.searchQuery) + '</div>';
        html += '  <div class="entry-card-meta">' + tagsHtml + '<span class="entry-card-date">' + e.date + '</span></div>';
        html += '</div>';
      });
      html += '</div>';
      dom.entryList.innerHTML = html;
    } else {
      var html2 = '<div class="entry-list-view">';
      filtered.forEach(function (e) {
        var tagsHtml = e.tags.slice(0, 3).map(function (t) {
          return '<span class="entry-card-tag">' + t + '</span>';
        }).join('');
        var cat = getCategory(e.category);
        var catName = cat ? cat.name : '';
        html2 += '<div class="entry-list-item" data-entry="' + e.id + '">';
        html2 += '  <div class="list-content">';
        html2 += '    <div class="list-title">' + highlightText(e.title, state.searchQuery) + '</div>';
        html2 += '    <div class="list-desc">' + highlightText(e.desc, state.searchQuery) + '</div>';
        html2 += '    <div class="list-meta">' + tagsHtml + '</div>';
        html2 += '  </div>';
        html2 += '  <div class="list-right">';
        html2 += '    <div class="list-category">' + catName + '</div>';
        html2 += '    <div class="list-date">' + e.date + '</div>';
        html2 += '  </div>';
        html2 += '</div>';
      });
      html2 += '</div>';
      dom.entryList.innerHTML = html2;
    }
  }

  function renderEntryDetail(entryId) {
    var entry = KNOWLEDGE_DATA.entries.find(function (e) { return e.id === entryId; });
    if (!entry) return;

    dom.entryDetail.style.display = 'block';
    dom.entryList.style.display = 'none';

    var tagsHtml = entry.tags.map(function (t) {
      return '<span class="meta-tag">' + t + '</span>';
    }).join('');

    dom.entryDetail.innerHTML =
      '<div class="detail-header">' +
      '  <div class="detail-title">' + entry.title + '</div>' +
      '  <div class="detail-meta">' +
      '    <span>📅 ' + entry.updated + '</span>' +
      '    ' + tagsHtml +
      '  </div>' +
      '</div>' +
      '<div class="detail-body" id="detailBody"><div class="knowledge-loading">加载中...</div></div>' +
      '<div class="detail-back" id="detailBack">← 返回列表</div>';

    // Load markdown content
    fetch(entry.file)
      .then(function (r) {
        if (!r.ok) throw new Error('Failed to load ' + entry.file);
        return r.text();
      })
      .then(function (md) {
        var body = document.getElementById('detailBody');
        // Basic markdown rendering (without marked.js dependency)
        var html = renderMarkdown(md);
        body.innerHTML = html;
        // Insert TOC
        var toc = generateTOC(html);
        if (toc) {
          body.innerHTML = '<div class="detail-toc"><div class="detail-toc-title">📑 目录</div>' + toc + '</div>' + body.innerHTML;
        }
      })
      .catch(function (err) {
        var body = document.getElementById('detailBody');
        body.innerHTML = '<div class="knowledge-empty"><div class="knowledge-empty-icon">⚠️</div><p>内容加载失败：' + err.message + '</p></div>';
      });
  }

  /* ===== Simple Markdown Renderer ===== */
  function renderMarkdown(md) {
    var html = md
      // Strip frontmatter
      .replace(/^---[\s\S]*?---\n/, '')
      // Headers
      .replace(/^### (.+)$/gm, '<h3>$1</h3>')
      .replace(/^## (.+)$/gm, '<h2>$1</h2>')
      .replace(/^# (.+)$/gm, '<h1>$1</h1>')
      // Bold & Italic
      .replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>')
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      // Inline code
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      // Code blocks (```...```)
      .replace(/```(\w*)\n([\s\S]*?)```/g, function (_, lang, code) {
        return '<pre' + (lang ? ' data-lang="' + lang + '"' : '') + '><code>' + escapeHtml(code.trim()) + '</code></pre>';
      })
      // Images
      .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" loading="lazy">')
      // Links
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
      // Unordered list
      .replace(/^- (.+)$/gm, '<li>$1</li>')
      // Ordered list
      .replace(/^\d+\. (.+)$/gm, '<li>$1</li>')
      // Blockquote
      .replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>')
      // Horizontal rule
      .replace(/^---$/gm, '<hr>')
      // Paragraphs (double newline)
      .replace(/\n\n/g, '</p><p>')
      .replace(/\n/g, '<br>');

    // Wrap consecutive <li> in <ul>
    html = html.replace(/((?:<li>.*?<\/li><br>?)+)/g, function (m) {
      return '<ul>' + m.replace(/<br>/g, '') + '</ul>';
    });

    // Wrap blockquotes
    html = html.replace(/((?:<blockquote>.*?<\/blockquote><br>?)+)/g, function (m) {
      return m.replace(/<br>/g, '');
    });

    return '<p>' + html + '</p>';
  }

  function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function generateTOC(html) {
    var headings = html.match(/<h([23])>(.+?)<\/h[23]>/g);
    if (!headings || headings.length < 2) return '';
    var toc = '<ul>';
    headings.forEach(function (h) {
      var level = h.charAt(2);
      var text = h.replace(/<[^>]+>/g, '');
      var id = text.toLowerCase().replace(/[^a-z0-9\u4e00-\u9fa5]+/g, '-');
      toc += '<li class="toc-h' + level + '"><a href="#' + id + '">' + text + '</a></li>';
    });
    toc += '</ul>';
    return toc;
  }

  function highlightText(text, query) {
    if (!query) return text;
    var idx = text.toLowerCase().indexOf(query.toLowerCase());
    if (idx === -1) return text;
    return text.substring(0, idx) + '<mark>' + text.substring(idx, idx + query.length) + '</mark>' + text.substring(idx + query.length);
  }

  /* ===== Navigation / State Management ===== */

  function switchZone(zoneId) {
    state.currentZone = zoneId;
    state.currentCategory = null;
    state.currentSubcategory = null;
    state.currentEntry = null;
    state.selectedTags = [];
    dom.entryDetail.style.display = 'none';
    dom.entryList.style.display = 'block';

    // Default to first category
    var cats = getCategories(zoneId);
    if (cats.length > 0) state.currentCategory = cats[0].id;

    renderZones();
    renderTree(state.currentZone);
    renderContent();
  }

  function selectCategory(catId) {
    state.currentCategory = catId;
    state.currentSubcategory = null;
    state.currentEntry = null;
    dom.entryDetail.style.display = 'none';
    dom.entryList.style.display = 'block';
    renderTree(state.currentZone);
    renderContent();
  }

  function selectSubcategory(subId) {
    state.currentSubcategory = subId;
    state.currentEntry = null;
    dom.entryDetail.style.display = 'none';
    dom.entryList.style.display = 'block';
    renderTree(state.currentZone);
    renderContent();
  }

  function selectEntry(entryId) {
    state.currentEntry = entryId;
    renderBreadcrumb();
    renderEntryDetail(entryId);
  }

  function renderContent() {
    var entries;
    if (state.currentSubcategory) {
      entries = getEntriesForSubcategory(state.currentSubcategory);
    } else if (state.currentCategory) {
      entries = getEntriesForCategory(state.currentCategory);
    } else {
      entries = getEntriesForZone(state.currentZone);
    }

    renderBreadcrumb();
    renderToolbar(entries);
    renderEntryList(entries);
  }

  function goBack() {
    state.currentEntry = null;
    dom.entryDetail.style.display = 'none';
    dom.entryList.style.display = 'block';
    renderContent();
  }

  /* ===== Event Binding ===== */

  function bindEvents() {
    // Zone tabs
    dom.zones.addEventListener('click', function (e) {
      var btn = e.target.closest('.knowledge-zone-tab');
      if (btn) switchZone(btn.dataset.zone);
    });

    // Tree clicks (category/subcategory)
    dom.tree.addEventListener('click', function (e) {
      var header = e.target.closest('.tree-node-header');
      if (!header) return;
      var node = header.closest('.tree-node');
      if (!node) return;

      var arrow = header.querySelector('.tree-arrow');
      if (e.target.closest('.tree-arrow') && arrow && arrow.style.visibility !== 'hidden') {
        // Toggle expand/collapse
        var children = node.querySelector('.tree-children');
        if (children) {
          children.classList.toggle('open');
          arrow.classList.toggle('expanded');
        }
        return;
      }

      var type = node.dataset.type;
      var id = node.dataset.id;
      if (type === 'category') selectCategory(id);
      else if (type === 'subcategory') selectSubcategory(id);
    });

    // Breadcrumb
    dom.breadcrumb.addEventListener('click', function (e) {
      var el = e.target.closest('[data-action]');
      if (!el) return;
      var action = el.dataset.action;
      if (action === 'zone') switchZone(state.currentZone);
      else if (action === 'category') selectCategory(el.dataset.id);
      else if (action === 'subcategory') selectSubcategory(el.dataset.id);
    });

    // Entry card/list click
    dom.entryList.addEventListener('click', function (e) {
      var card = e.target.closest('[data-entry]');
      if (card) selectEntry(card.dataset.entry);
    });

    // Back button
    dom.entryDetail.addEventListener('click', function (e) {
      if (e.target.closest('#detailBack')) goBack();
    });

    // Search
    var searchTimer;
    dom.search.addEventListener('input', function () {
      clearTimeout(searchTimer);
      searchTimer = setTimeout(function () {
        state.searchQuery = dom.search.value.trim();
        renderContent();
      }, 150);
    });

    dom.searchClear.addEventListener('click', function () {
      dom.search.value = '';
      state.searchQuery = '';
      renderContent();
      dom.search.focus();
    });

    // Tag filters
    dom.toolbar.addEventListener('click', function (e) {
      var btn = e.target.closest('.tag-filter');
      if (btn) {
        var tag = btn.dataset.tag;
        var idx = state.selectedTags.indexOf(tag);
        if (idx > -1) {
          state.selectedTags.splice(idx, 1);
        } else {
          state.selectedTags.push(tag);
        }
        renderContent();
      }
    });

    // View toggle
    dom.toolbar.addEventListener('click', function (e) {
      var btn = e.target.closest('.view-btn');
      if (btn) {
        state.viewMode = btn.dataset.view;
        renderContent();
      }
    });
  }

  /* ===== Init ===== */

  function init() {
    cacheDom();
    // Default to first zone
    if (KNOWLEDGE_DATA.zones.length > 0) {
      state.currentZone = KNOWLEDGE_DATA.zones[0].id;
      var cats = getCategories(state.currentZone);
      if (cats.length > 0) state.currentCategory = cats[0].id;
    }

    renderStats();
    renderZones();
    renderTree(state.currentZone);
    renderContent();
    bindEvents();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

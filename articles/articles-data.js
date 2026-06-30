/* articles-data.js — 文章数据配置 */
const ARTICLES_DATA = {
  categories: [
    { id: 'all', name: '全部', icon: '📦', color: '#666' },
    { id: 'ai', name: '人工智能', icon: '🤖', color: '#6366f1' },
    { id: 'architecture', name: '技术架构', icon: '🏗️', color: '#0ea5e9' },
    { id: 'foresight', name: '技术前瞻', icon: '🔮', color: '#8b5cf6' },
    { id: 'exploration', name: '探索思考', icon: '💡', color: '#f59e0b' },
    { id: 'solution', name: '解决方案', icon: '🛠️', color: '#10b981' },
    { id: 'finance', name: '金融投资', icon: '💰', color: '#ef4444' },
    { id: 'history', name: '历史观察', icon: '📜', color: '#78716c' },
    { id: 'misc', name: '其他杂谈', icon: '📝', color: '#6b7280' }
  ],
  articles: [
    // ===== 人工智能 =====
    {
      id: 'article-ai-001',
      title: '大模型时代的技术架构演进',
      slug: 'llm-architecture-evolution',
      desc: '探讨大语言模型如何重塑软件架构，从传统微服务到AI-native架构的转变，分析RAG、Agent等新兴架构模式的设计要点与实践经验。',
      category: 'ai',
      tags: ['AI', '大模型', '架构'],
      author: 'haome525',
      date: '2026-06-30',
      readTime: 8,
      featured: true
    },
    {
      id: 'article-ai-002',
      title: 'RAG技术实践：构建企业级知识问答系统',
      slug: 'rag-knowledge-qa-system',
      desc: '分享基于RAG技术构建私有化知识问答系统的实践经验，涵盖知识库构建、向量检索优化、问答质量提升等关键环节。',
      category: 'ai',
      tags: ['RAG', '知识库', '实践'],
      author: 'haome525',
      date: '2026-06-28',
      readTime: 10,
      featured: false
    },

    // ===== 技术架构 =====
    {
      id: 'article-arch-001',
      title: '微服务架构设计原则与最佳实践',
      slug: 'microservice-design-principles',
      desc: '总结微服务架构设计的核心原则和实战经验，包括服务拆分策略、通信设计、数据管理、容错降级等关键话题。',
      category: 'architecture',
      tags: ['微服务', '设计', '原则'],
      author: 'haome525',
      date: '2026-06-27',
      readTime: 12,
      featured: false
    },
    {
      id: 'article-arch-002',
      title: '云原生应用的可观测性建设',
      slug: 'cloud-native-observability',
      desc: '分享构建云原生应用可观测性体系的方法论，涵盖日志、指标、链路追踪三大支柱的技术选型与实践。',
      category: 'architecture',
      tags: ['云原生', '可观测性', '监控'],
      author: 'haome525',
      date: '2026-06-25',
      readTime: 9,
      featured: false
    },

    // ===== 技术前瞻 =====
    {
      id: 'article-foresight-001',
      title: '2026年AI技术趋势展望',
      slug: 'ai-trends-2026',
      desc: '分析2026年AI技术发展的主要趋势和机遇，包括多模态AI、AI Agent、边缘智能等方向的深度洞察。',
      category: 'foresight',
      tags: ['AI', '趋势', '展望'],
      author: 'haome525',
      date: '2026-06-29',
      readTime: 7,
      featured: true
    },
    {
      id: 'article-foresight-002',
      title: '边缘计算与AIoT的融合前景',
      slug: 'edge-computing-aiot',
      desc: '探讨边缘计算与AIoT技术融合的未来发展，分析技术挑战与商业机遇。',
      category: 'foresight',
      tags: ['边缘计算', 'AIoT', '未来'],
      author: 'haome525',
      date: '2026-06-26',
      readTime: 8,
      featured: false
    },

    // ===== 探索思考 =====
    {
      id: 'article-exploration-001',
      title: '软件工程师的认知升级之路',
      slug: 'engineer-cognitive-upgrade',
      desc: '分享软件工程师从技术到架构的认知升级方法，探讨如何突破职业发展的瓶颈。',
      category: 'exploration',
      tags: ['认知', '成长', '思维'],
      author: 'haome525',
      date: '2026-06-24',
      readTime: 6,
      featured: false
    },
    {
      id: 'article-exploration-002',
      title: 'AI时代的开发者定位与思考',
      slug: 'developer-positioning-ai-era',
      desc: '探讨AI时代开发者如何重新定位自己的价值，从代码编写者到AI协作者的转变。',
      category: 'exploration',
      tags: ['AI', '定位', '思考'],
      author: 'haome525',
      date: '2026-06-23',
      readTime: 7,
      featured: false
    },

    // ===== 解决方案 =====
    {
      id: 'article-solution-001',
      title: '高并发系统的缓存设计方案',
      slug: 'high-concurrency-cache-design',
      desc: '分享高并发场景下的缓存设计和优化方案，包括缓存策略、一致性处理、热点问题解决等。',
      category: 'solution',
      tags: ['缓存', '高并发', '方案'],
      author: 'haome525',
      date: '2026-06-22',
      readTime: 11,
      featured: false
    },
    {
      id: 'article-solution-002',
      title: '分布式事务的一致性解决方案',
      slug: 'distributed-transaction-consistency',
      desc: '总结分布式事务的常见解决方案和实践经验，包括2PC、TCC、Saga等模式的对比与选型。',
      category: 'solution',
      tags: ['分布式', '事务', '一致性'],
      author: 'haome525',
      date: '2026-06-21',
      readTime: 10,
      featured: false
    },

    // ===== 金融投资 =====
    {
      id: 'article-finance-001',
      title: '量化投资策略入门指南',
      slug: 'quantitative-investment-intro',
      desc: '介绍量化投资的基本概念和入门策略，帮助技术人员了解量化投资的世界。',
      category: 'finance',
      tags: ['量化', '投资', '入门'],
      author: 'haome525',
      date: '2026-06-20',
      readTime: 9,
      featured: false
    },
    {
      id: 'article-finance-002',
      title: '加密货币投资的风险与机遇',
      slug: 'crypto-investment-risk-opportunity',
      desc: '分析加密货币投资的风险管理和机遇把握，探讨区块链技术的未来发展。',
      category: 'finance',
      tags: ['加密货币', '风险', '机遇'],
      author: 'haome525',
      date: '2026-06-19',
      readTime: 8,
      featured: false
    },

    // ===== 历史观察 =====
    {
      id: 'article-history-001',
      title: '互联网技术发展简史',
      slug: 'internet-history',
      desc: '回顾互联网技术发展的关键节点和里程碑，从ARPANET到Web3的演进历程。',
      category: 'history',
      tags: ['互联网', '历史', '发展'],
      author: 'haome525',
      date: '2026-06-18',
      readTime: 10,
      featured: false
    },
    {
      id: 'article-history-002',
      title: '中国软件产业发展30年',
      slug: 'china-software-30-years',
      desc: '观察中国软件产业30年的发展历程和经验，从模仿到创新的转变。',
      category: 'history',
      tags: ['中国软件', '发展', '观察'],
      author: 'haome525',
      date: '2026-06-17',
      readTime: 12,
      featured: false
    },

    // ===== 其他杂谈 =====
    {
      id: 'article-misc-001',
      title: '程序员的效率工具清单',
      slug: 'developer-productivity-tools',
      desc: '分享提升开发效率的工具和方法，从IDE插件到工作流优化的全方位指南。',
      category: 'misc',
      tags: ['工具', '效率', '分享'],
      author: 'haome525',
      date: '2026-06-16',
      readTime: 6,
      featured: false
    },
    {
      id: 'article-misc-002',
      title: '技术写作的方法与实践',
      slug: 'technical-writing-practice',
      desc: '分享技术写作的经验和最佳实践，帮助技术人员提升写作能力。',
      category: 'misc',
      tags: ['写作', '方法', '实践'],
      author: 'haome525',
      date: '2026-06-15',
      readTime: 7,
      featured: false
    }
  ]
};
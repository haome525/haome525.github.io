/* knowledge-data.js — 知识库元数据索引 */
const KNOWLEDGE_DATA = {
  zones: [
    { id: 'tech', name: '技术', icon: '💻', desc: '编程、AI、架构、运维等技术知识' },
    { id: 'life', name: '生活', icon: '🌱', desc: '阅读、旅行、摄影、生活技巧' },
    { id: 'work', name: '工作', icon: '💼', desc: '项目管理、领导力、职场技能' }
  ],

  categories: [
    { id: 'ai',                  name: 'AI',           zone: 'tech', icon: '🤖' },
    { id: 'programming',         name: '编程语言',      zone: 'tech', icon: '💻' },
    { id: 'architecture',        name: '架构设计',      zone: 'tech', icon: '🏗️' },
    { id: 'software-engineering',name: '软件工程',      zone: 'tech', icon: '🛠️' },
    { id: 'devops',              name: '运维/DevOps',  zone: 'tech', icon: '🚀' },
    { id: 'database',            name: '数据库',        zone: 'tech', icon: '🗄️' },
    { id: 'security',            name: '安全',          zone: 'tech', icon: '🔒' },
    { id: 'reading',             name: '阅读',          zone: 'life', icon: '📚' },
    { id: 'travel',              name: '旅行',          zone: 'life', icon: '✈️' },
    { id: 'photography',         name: '摄影',          zone: 'life', icon: '📷' },
    { id: 'fitness',             name: '健身',          zone: 'life', icon: '💪' },
    { id: 'cooking',             name: '烹饪',          zone: 'life', icon: '🍳' },
    { id: 'pm',                  name: '项目管理',      zone: 'work', icon: '📋' },
    { id: 'career',              name: '职场技能',      zone: 'work', icon: '📈' },
    { id: 'leadership',          name: '领导力',        zone: 'work', icon: '👥' },
    { id: 'finance',             name: '理财投资',      zone: 'work', icon: '💰' }
  ],

  subcategories: [
    // AI
    { id: 'ml',          name: '机器学习',     category: 'ai',           icon: '🧠' },
    { id: 'llm',         name: '大语言模型',   category: 'ai',           icon: '🤖' },
    { id: 'cv',          name: '计算机视觉',   category: 'ai',           icon: '👁️' },
    { id: 'nlp',         name: '自然语言处理', category: 'ai',           icon: '📝' },
    { id: 'ai-tools',    name: 'AI 工具',      category: 'ai',           icon: '🔧' },
    // 编程语言
    { id: 'python',      name: 'Python',       category: 'programming',  icon: '🐍' },
    { id: 'javascript',  name: 'JavaScript',   category: 'programming',  icon: '📜' },
    { id: 'go',          name: 'Go',           category: 'programming',  icon: '🔵' },
    { id: 'rust',        name: 'Rust',         category: 'programming',  icon: '🦀' },
    { id: 'java',        name: 'Java',         category: 'programming',  icon: '☕' },
    // 架构设计
    { id: 'backend',     name: '后端架构',     category: 'architecture', icon: '⚙️' },
    { id: 'frontend',    name: '前端架构',     category: 'architecture', icon: '🎨' },
    { id: 'microservices', name: '微服务',     category: 'architecture', icon: '🔗' },
    { id: 'ddd',         name: '领域驱动设计', category: 'architecture', icon: '🏛️' },
    { id: 'system-design', name: '系统设计',   category: 'architecture', icon: '🏗️' },
    // 软件工程
    { id: 'design-patterns', name: '设计模式', category: 'software-engineering', icon: '📐' },
    { id: 'testing',     name: '测试',         category: 'software-engineering', icon: '🧪' },
    { id: 'git',         name: 'Git 版本控制', category: 'software-engineering', icon: '🔀' },
    // 运维/DevOps
    { id: 'docker',      name: 'Docker',       category: 'devops',       icon: '🐳' },
    { id: 'k8s',         name: 'Kubernetes',   category: 'devops',       icon: '☸️' },
    { id: 'cicd',        name: 'CI/CD',        category: 'devops',       icon: '🔄' },
    // 数据库
    { id: 'mysql',       name: 'MySQL',        category: 'database',     icon: '🐬' },
    { id: 'redis',       name: 'Redis',        category: 'database',     icon: '🔴' },
    { id: 'sql-design',  name: 'SQL 设计优化', category: 'database',     icon: '📊' },
    // 安全
    { id: 'web-security',name: 'Web 安全',     category: 'security',     icon: '🛡️' },
    // 阅读
    { id: 'book-reviews',  name: '书评',        category: 'reading',    icon: '📖' },
    { id: 'reading-notes', name: '读书笔记',    category: 'reading',    icon: '📝' },
    // 旅行
    { id: 'trip-plans',    name: '行程规划',    category: 'travel',     icon: '🗺️' },
    { id: 'destinations',  name: '目的地',      category: 'travel',     icon: '📍' },
    // 摄影
    { id: 'composition',   name: '构图技巧',    category: 'photography',icon: '🎯' },
    // 健身
    { id: 'workouts',      name: '训练计划',    category: 'fitness',    icon: '🏋️' },
    // 烹饪
    { id: 'recipes',       name: '菜谱',        category: 'cooking',    icon: '📋' },
    // 项目管理
    { id: 'agile',         name: '敏捷方法',    category: 'pm',         icon: '🔄' },
    { id: 'project-tools', name: '项目工具',    category: 'pm',         icon: '🔧' },
    // 职场技能
    { id: 'interview',     name: '面试准备',    category: 'career',     icon: '🎯' },
    { id: 'resume',        name: '简历优化',    category: 'career',     icon: '📄' },
    { id: 'communication', name: '沟通技巧',    category: 'career',     icon: '💬' },
    // 领导力
    { id: 'team-management', name: '团队管理',  category: 'leadership', icon: '👥' },
    { id: 'mentoring',       name: '导师与成长',category: 'leadership', icon: '🌱' },
    // 理财投资
    { id: 'investing',     name: '投资入门',    category: 'finance',    icon: '📈' }
  ],

  entries: [
    // ===== 技术 > AI > 机器学习 =====
    {
      id: 'linear-regression',
      title: '线性回归算法详解',
      slug: 'linear-regression',
      desc: '从零推导线性回归的数学原理与Python实现，涵盖最小二乘法、梯度下降等核心概念。',
      zone: 'tech', category: 'ai', subcategory: 'ml',
      tags: ['机器学习', '算法', '数学', 'Python'],
      date: '2026-07-01', updated: '2026-07-01',
      file: '/knowledge/posts/tech/ai/ml/linear-regression.md'
    },
    {
      id: 'decision-tree',
      title: '决策树算法原理与实践',
      slug: 'decision-tree',
      desc: '深入浅出讲解决策树的构建原理、剪枝策略以及随机森林集成方法。',
      zone: 'tech', category: 'ai', subcategory: 'ml',
      tags: ['机器学习', '决策树', '算法'],
      date: '2026-07-01', updated: '2026-07-01',
      file: '/knowledge/posts/tech/ai/ml/decision-tree.md'
    },
    // ===== 技术 > AI > 大语言模型 =====
    {
      id: 'prompt-engineering',
      title: 'Prompt Engineering 入门指南',
      slug: 'prompt-engineering',
      desc: '学习如何编写高效的 Prompt，掌握 Few-shot、Chain-of-Thought 等高级技巧。',
      zone: 'tech', category: 'ai', subcategory: 'llm',
      tags: ['LLM', 'Prompt', 'AI'],
      date: '2026-07-01', updated: '2026-07-01',
      file: '/knowledge/posts/tech/ai/llm/prompt-engineering.md'
    },
    // ===== 技术 > AI > 计算机视觉 =====
    {
      id: 'cnn-basics',
      title: '卷积神经网络（CNN）入门',
      slug: 'cnn-basics',
      desc: '理解卷积、池化、全连接层的原理，用 PyTorch 实现一个图像分类器。',
      zone: 'tech', category: 'ai', subcategory: 'cv',
      tags: ['计算机视觉', 'CNN', '深度学习', 'PyTorch'],
      date: '2026-07-01', updated: '2026-07-01',
      file: '/knowledge/posts/tech/ai/cv/cnn-basics.md'
    },
    // ===== 技术 > AI > 自然语言处理 =====
    {
      id: 'transformer-intro',
      title: 'Transformer 模型原理解读',
      slug: 'transformer-intro',
      desc: '深入浅出解读 Transformer 架构的核心组件：自注意力机制、位置编码、多头注意力。',
      zone: 'tech', category: 'ai', subcategory: 'nlp',
      tags: ['NLP', 'Transformer', '深度学习'],
      date: '2026-07-01', updated: '2026-07-01',
      file: '/knowledge/posts/tech/ai/nlp/transformer-intro.md'
    },
    // ===== 技术 > AI > AI 工具 =====
    {
      id: 'copilot-guide',
      title: 'GitHub Copilot 高效使用指南',
      slug: 'copilot-guide',
      desc: '从安装配置到高级用法，掌握 AI 编程助手的提效技巧。',
      zone: 'tech', category: 'ai', subcategory: 'ai-tools',
      tags: ['AI', '工具', '效率', 'Copilot'],
      date: '2026-07-01', updated: '2026-07-01',
      file: '/knowledge/posts/tech/ai/ai-tools/copilot-guide.md'
    },
    // ===== 技术 > 编程语言 > Python =====
    {
      id: 'async-python',
      title: 'Python 异步编程实战',
      slug: 'async-python',
      desc: '深入理解 asyncio、协程与事件循环，掌握 Python 异步编程的最佳实践。',
      zone: 'tech', category: 'programming', subcategory: 'python',
      tags: ['Python', '异步', '编程'],
      date: '2026-07-01', updated: '2026-07-01',
      file: '/knowledge/posts/tech/programming/python/async-programming.md'
    },
    // ===== 技术 > 编程语言 > Go =====
    {
      id: 'go-concurrency',
      title: 'Go 并发编程核心概念',
      slug: 'go-concurrency',
      desc: '掌握 goroutine、channel、select、sync 包等 Go 并发原语。',
      zone: 'tech', category: 'programming', subcategory: 'go',
      tags: ['Go', '并发', '编程'],
      date: '2026-07-01', updated: '2026-07-01',
      file: '/knowledge/posts/tech/programming/go/go-concurrency.md'
    },
    // ===== 技术 > 编程语言 > Rust =====
    {
      id: 'rust-ownership',
      title: 'Rust 所有权系统精讲',
      slug: 'rust-ownership',
      desc: '理解 Rust 的核心设计：所有权、借用、生命周期，以及它们如何保证内存安全。',
      zone: 'tech', category: 'programming', subcategory: 'rust',
      tags: ['Rust', '所有权', '内存安全'],
      date: '2026-07-01', updated: '2026-07-01',
      file: '/knowledge/posts/tech/programming/rust/rust-ownership.md'
    },
    // ===== 技术 > 架构设计 > 微服务 =====
    {
      id: 'microservices-patterns',
      title: '微服务架构核心模式',
      slug: 'microservices-patterns',
      desc: '服务发现、API 网关、配置中心、熔断降级、分布式追踪等微服务关键模式。',
      zone: 'tech', category: 'architecture', subcategory: 'microservices',
      tags: ['微服务', '架构', '分布式'],
      date: '2026-07-01', updated: '2026-07-01',
      file: '/knowledge/posts/tech/architecture/microservices/microservices-patterns.md'
    },
    // ===== 技术 > 架构设计 > 领域驱动设计 =====
    {
      id: 'ddd-strategic',
      title: 'DDD 战略设计：限界上下文与上下文映射',
      slug: 'ddd-strategic',
      desc: '掌握 DDD 战略设计核心概念：通用语言、限界上下文、上下文映射模式。',
      zone: 'tech', category: 'architecture', subcategory: 'ddd',
      tags: ['DDD', '架构', '设计'],
      date: '2026-07-01', updated: '2026-07-01',
      file: '/knowledge/posts/tech/architecture/ddd/ddd-strategic.md'
    },
    // ===== 技术 > 架构设计 > 系统设计 =====
    {
      id: 'system-design-interview',
      title: '系统设计面试经典题目解析',
      slug: 'system-design-interview',
      desc: '从短链接服务到聊天系统，掌握系统设计的通用方法论和经典案例。',
      zone: 'tech', category: 'architecture', subcategory: 'system-design',
      tags: ['系统设计', '面试', '架构'],
      date: '2026-07-01', updated: '2026-07-01',
      file: '/knowledge/posts/tech/architecture/system-design/system-design-interview.md'
    },
    // ===== 技术 > 软件工程 > 设计模式 =====
    {
      id: 'design-patterns-go',
      title: 'Go 语言常见设计模式',
      slug: 'design-patterns-go',
      desc: '用 Go 语言实现单例、工厂、策略、观察者等经典设计模式。',
      zone: 'tech', category: 'software-engineering', subcategory: 'design-patterns',
      tags: ['设计模式', 'Go', '软件工程'],
      date: '2026-07-01', updated: '2026-07-01',
      file: '/knowledge/posts/tech/software-engineering/design-patterns/design-patterns-go.md'
    },
    // ===== 技术 > 软件工程 > 测试 =====
    {
      id: 'testing-pyramid',
      title: '测试金字塔与实战策略',
      slug: 'testing-pyramid',
      desc: '理解单元测试、集成测试、端到端测试的分层策略与最佳实践。',
      zone: 'tech', category: 'software-engineering', subcategory: 'testing',
      tags: ['测试', '质量', '最佳实践'],
      date: '2026-07-01', updated: '2026-07-01',
      file: '/knowledge/posts/tech/software-engineering/testing/testing-pyramid.md'
    },
    // ===== 技术 > 软件工程 > Git =====
    {
      id: 'git-workflow',
      title: 'Git 工作流最佳实践',
      slug: 'git-workflow',
      desc: 'Git Flow、GitHub Flow、Trunk-Based 等主流 Git 工作流的对比与选型。',
      zone: 'tech', category: 'software-engineering', subcategory: 'git',
      tags: ['Git', '版本控制', '工作流'],
      date: '2026-07-01', updated: '2026-07-01',
      file: '/knowledge/posts/tech/software-engineering/git/git-workflow.md'
    },
    // ===== 技术 > 运维 > Docker =====
    {
      id: 'docker-compose',
      title: 'Docker Compose 实战：多容器应用编排',
      slug: 'docker-compose',
      desc: '使用 Docker Compose 编排 Web 应用 + 数据库 + 缓存的完整示例。',
      zone: 'tech', category: 'devops', subcategory: 'docker',
      tags: ['Docker', 'DevOps', '容器'],
      date: '2026-07-01', updated: '2026-07-01',
      file: '/knowledge/posts/tech/devops/docker/docker-compose.md'
    },
    // ===== 技术 > 运维 > Kubernetes =====
    {
      id: 'k8s-basics',
      title: 'Kubernetes 核心概念入门',
      slug: 'k8s-basics',
      desc: 'Pod、Service、Deployment、ConfigMap — 理解 K8s 的核心抽象与工作负载。',
      zone: 'tech', category: 'devops', subcategory: 'k8s',
      tags: ['K8s', 'Kubernetes', 'DevOps'],
      date: '2026-07-01', updated: '2026-07-01',
      file: '/knowledge/posts/tech/devops/k8s/k8s-basics.md'
    },
    // ===== 技术 > 运维 > CI/CD =====
    {
      id: 'github-actions',
      title: 'GitHub Actions CI/CD 实战',
      slug: 'github-actions',
      desc: '从零搭建 GitHub Actions 自动化构建、测试、部署流水线。',
      zone: 'tech', category: 'devops', subcategory: 'cicd',
      tags: ['CI/CD', 'GitHub Actions', '自动化'],
      date: '2026-07-01', updated: '2026-07-01',
      file: '/knowledge/posts/tech/devops/cicd/github-actions.md'
    },
    // ===== 技术 > 数据库 > MySQL =====
    {
      id: 'mysql-index',
      title: 'MySQL 索引原理与优化',
      slug: 'mysql-index',
      desc: '深入理解 B+ 树索引结构、聚簇索引与二级索引，以及索引优化实战。',
      zone: 'tech', category: 'database', subcategory: 'mysql',
      tags: ['MySQL', '数据库', '索引', '优化'],
      date: '2026-07-01', updated: '2026-07-01',
      file: '/knowledge/posts/tech/database/mysql/mysql-index.md'
    },
    // ===== 技术 > 数据库 > Redis =====
    {
      id: 'redis-patterns',
      title: 'Redis 核心应用场景与最佳实践',
      slug: 'redis-patterns',
      desc: '缓存、分布式锁、计数器、消息队列 — Redis 的典型应用场景与坑点。',
      zone: 'tech', category: 'database', subcategory: 'redis',
      tags: ['Redis', '缓存', '分布式'],
      date: '2026-07-01', updated: '2026-07-01',
      file: '/knowledge/posts/tech/database/redis/redis-patterns.md'
    },
    // ===== 技术 > 数据库 > SQL 设计优化 =====
    {
      id: 'sql-optimization',
      title: 'SQL 查询优化实战技巧',
      slug: 'sql-optimization',
      desc: '通过执行计划分析、索引优化、SQL 改写等手段提升查询性能。',
      zone: 'tech', category: 'database', subcategory: 'sql-design',
      tags: ['SQL', '优化', '数据库'],
      date: '2026-07-01', updated: '2026-07-01',
      file: '/knowledge/posts/tech/database/sql-design/sql-optimization.md'
    },
    // ===== 技术 > 安全 > Web 安全 =====
    {
      id: 'web-security-guide',
      title: 'Web 安全防护实战指南',
      slug: 'web-security-guide',
      desc: 'XSS、CSRF、SQL 注入、SSRF — 常见 Web 漏洞原理与防护方案。',
      zone: 'tech', category: 'security', subcategory: 'web-security',
      tags: ['安全', 'Web', '漏洞', '防护'],
      date: '2026-07-01', updated: '2026-07-01',
      file: '/knowledge/posts/tech/security/web-security/web-security-guide.md'
    },
    // ===== 生活 > 阅读 > 书评 =====
    {
      id: 'thinking-fast-slow',
      title: '《思考，快与慢》读书笔记',
      slug: 'thinking-fast-slow',
      desc: '丹尼尔·卡尼曼的经典著作，探讨人类思维的两种系统及其对决策的影响。',
      zone: 'life', category: 'reading', subcategory: 'book-reviews',
      tags: ['心理学', '决策', '思维'],
      date: '2026-07-01', updated: '2026-07-01',
      file: '/knowledge/posts/life/reading/thinking-fast-slow.md'
    },
    // ===== 生活 > 摄影 =====
    {
      id: 'composition-rules',
      title: '摄影构图十大黄金法则',
      slug: 'composition-rules',
      desc: '三分法、引导线、框架构图、对称 — 掌握摄影构图的核心技巧。',
      zone: 'life', category: 'photography', subcategory: 'composition',
      tags: ['摄影', '构图', '技巧'],
      date: '2026-07-01', updated: '2026-07-01',
      file: '/knowledge/posts/life/photography/composition/composition-rules.md'
    },
    // ===== 生活 > 健身 =====
    {
      id: 'beginner-workout',
      title: '新手健身入门计划',
      slug: 'beginner-workout',
      desc: '从零开始的健身入门指南，涵盖训练频率、动作选择和渐进负荷原则。',
      zone: 'life', category: 'fitness', subcategory: 'workouts',
      tags: ['健身', '入门', '训练计划'],
      date: '2026-07-01', updated: '2026-07-01',
      file: '/knowledge/posts/life/fitness/workouts/beginner-workout.md'
    },
    // ===== 工作 > 项目管理 > 敏捷方法 =====
    {
      id: 'agile-scrum',
      title: 'Scrum 敏捷开发实践',
      slug: 'agile-scrum',
      desc: '介绍 Scrum 框架的核心角色、事件和工件，以及团队落地敏捷的实践经验。',
      zone: 'work', category: 'pm', subcategory: 'agile',
      tags: ['敏捷', 'Scrum', '项目管理'],
      date: '2026-07-01', updated: '2026-07-01',
      file: '/knowledge/posts/work/project-mgmt/agile-scrum.md'
    },
    // ===== 工作 > 职场技能 > 面试准备 =====
    {
      id: 'interview-prep',
      title: '大厂技术面试准备指南',
      slug: 'interview-prep',
      desc: '系统化准备技术面试：算法、系统设计、行为面试的全方位攻略。',
      zone: 'work', category: 'career', subcategory: 'interview',
      tags: ['面试', '求职', '算法', '系统设计'],
      date: '2026-07-01', updated: '2026-07-01',
      file: '/knowledge/posts/work/career/interview/interview-prep.md'
    },
    // ===== 工作 > 职场技能 > 简历优化 =====
    {
      id: 'resume-tips',
      title: '技术简历撰写最佳实践',
      slug: 'resume-tips',
      desc: 'STAR 法则、量化成果、技术栈呈现 — 让你的简历脱颖而出。',
      zone: 'work', category: 'career', subcategory: 'resume',
      tags: ['简历', '求职', '职业发展'],
      date: '2026-07-01', updated: '2026-07-01',
      file: '/knowledge/posts/work/career/resume/resume-tips.md'
    },
    // ===== 工作 > 领导力 > 团队管理 =====
    {
      id: 'eng-manager-guide',
      title: '技术管理者转型指南',
      slug: 'eng-manager-guide',
      desc: '从工程师到管理者的角色转变、1对1沟通、团队建设等核心能力。',
      zone: 'work', category: 'leadership', subcategory: 'team-management',
      tags: ['管理', '领导力', '团队', '职业发展'],
      date: '2026-07-01', updated: '2026-07-01',
      file: '/knowledge/posts/work/leadership/team-management/eng-manager-guide.md'
    },
    // ===== 工作 > 理财投资 > 投资入门 =====
    {
      id: 'investment-basics',
      title: '程序员理财投资入门',
      slug: 'investment-basics',
      desc: '资产配置、指数基金定投、风险管理 — 技术人员专属理财指南。',
      zone: 'work', category: 'finance', subcategory: 'investing',
      tags: ['理财', '投资', '基金', '财务自由'],
      date: '2026-07-01', updated: '2026-07-01',
      file: '/knowledge/posts/work/finance/investing/investment-basics.md'
    }
  ]
};

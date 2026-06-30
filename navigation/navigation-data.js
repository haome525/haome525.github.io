/* navigation-data.js — 导航数据配置 */
const NAV_DATA = {
  categories: [
    { id: 'all', name: '全部', icon: '📦' },
    { id: 'ai', name: 'AI工具', icon: '🤖' },
    { id: 'architecture', name: '软件架构', icon: '🏗️' },
    { id: 'frontend', name: '前端技术', icon: '🎨' },
    { id: 'backend', name: '后端技术', icon: '⚙️' },
    { id: 'domestic', name: '国产化软件', icon: '🇨🇳' },
    { id: 'cloudnative', name: '云原生', icon: '☁️' },
    { id: 'devtools', name: '开发工具', icon: '🔧' },
    { id: 'learning', name: '学习资源', icon: '📚' }
  ],
  tools: [
    // ===== AI工具 =====
    {
      id: 'chatgpt', name: 'ChatGPT', desc: 'OpenAI推出的AI对话助手，支持多轮对话和复杂任务',
      url: 'https://chat.openai.com', icon: 'https://chat.openai.com/favicon.ico',
      category: 'ai', tags: ['对话', '写作', '编程'], hot: true
    },
    {
      id: 'claude', name: 'Claude', desc: 'Anthropic推出的AI助手，擅长分析、写作和编程',
      url: 'https://claude.ai', icon: 'https://claude.ai/favicon.ico',
      category: 'ai', tags: ['对话', '分析', '编程'], hot: true
    },
    {
      id: 'deepseek', name: 'DeepSeek', desc: '深度求索推出的开源大模型，性能卓越',
      url: 'https://www.deepseek.com', icon: 'https://www.deepseek.com/favicon.ico',
      category: 'ai', tags: ['开源', '大模型', '对话'], hot: true
    },
    {
      id: 'doubao', name: '豆包', desc: '字节跳动推出的全能AI助手，办公创作全能',
      url: 'https://www.doubao.com', icon: 'https://www.doubao.com/favicon.ico',
      category: 'ai', tags: ['对话', '办公', '创作']
    },
    {
      id: 'kimi', name: 'Kimi', desc: '月之暗面推出的AI助手，擅长长文本处理',
      url: 'https://kimi.moonshot.cn', icon: 'https://kimi.moonshot.cn/favicon.ico',
      category: 'ai', tags: ['对话', '长文本', '搜索']
    },
    {
      id: 'copilot', name: 'GitHub Copilot', desc: 'GitHub推出的AI编程助手，智能代码补全',
      url: 'https://github.com/features/copilot', icon: 'https://github.com/favicon.ico',
      category: 'ai', tags: ['编程', '代码补全', 'AI'], hot: true
    },
    {
      id: 'cursor', name: 'Cursor', desc: 'AI原生代码编辑器，支持智能问答和代码生成',
      url: 'https://cursor.sh', icon: 'https://cursor.sh/favicon.ico',
      category: 'ai', tags: ['编程', '编辑器', 'AI']
    },
    {
      id: 'midjourney', name: 'Midjourney', desc: '顶级AI图像生成工具，创作高质量图片',
      url: 'https://www.midjourney.com', icon: 'https://www.midjourney.com/favicon.ico',
      category: 'ai', tags: ['图像', '绘画', 'AI'], hot: true
    },
    {
      id: 'stable-diffusion', name: 'Stable Diffusion', desc: '开源AI图像生成模型，本地部署',
      url: 'https://stability.ai', icon: 'https://stability.ai/favicon.ico',
      category: 'ai', tags: ['开源', '图像', '本地']
    },
    {
      id: 'runway', name: 'Runway', desc: '专业AI视频生成工具，支持文生视频',
      url: 'https://runwayml.com', icon: 'https://runwayml.com/favicon.ico',
      category: 'ai', tags: ['视频', '生成', 'AI']
    },
    {
      id: 'perplexity', name: 'Perplexity', desc: 'AI搜索引擎，提供精准答案和来源引用',
      url: 'https://www.perplexity.ai', icon: 'https://www.perplexity.ai/favicon.ico',
      category: 'ai', tags: ['搜索', 'AI', '问答']
    },
    {
      id: 'metaso', name: '秘塔AI搜索', desc: '无广告AI搜索，直达结果',
      url: 'https://metaso.cn', icon: 'https://metaso.cn/favicon.ico',
      category: 'ai', tags: ['搜索', '无广告', 'AI']
    },
    {
      id: 'huggingface', name: 'HuggingFace', desc: 'AI模型托管平台，海量开源模型',
      url: 'https://huggingface.co', icon: 'https://huggingface.co/favicon.ico',
      category: 'ai', tags: ['模型', '开源', '社区']
    },
    {
      id: 'modelscope', name: 'ModelScope', desc: '阿里达摩院推出的模型社区',
      url: 'https://modelscope.cn', icon: 'https://modelscope.cn/favicon.ico',
      category: 'ai', tags: ['模型', '国产', '社区']
    },
    {
      id: 'aippt', name: 'AiPPT', desc: 'AI快速生成高质量PPT',
      url: 'https://www.aippt.cn', icon: 'https://www.aippt.cn/favicon.ico',
      category: 'ai', tags: ['PPT', '办公', 'AI']
    },

    // ===== 软件架构 =====
    {
      id: 'spring-cloud', name: 'Spring Cloud', desc: '微服务架构全家桶，Java生态首选',
      url: 'https://spring.io/projects/spring-cloud', icon: 'https://spring.io/favicon.ico',
      category: 'architecture', tags: ['微服务', 'Java', '框架']
    },
    {
      id: 'dubbo', name: 'Apache Dubbo', desc: '阿里开源的高性能RPC框架',
      url: 'https://dubbo.apache.org', icon: 'https://dubbo.apache.org/favicon.ico',
      category: 'architecture', tags: ['RPC', '微服务', 'Java']
    },
    {
      id: 'kong', name: 'Kong', desc: '云原生API网关，支持插件扩展',
      url: 'https://konghq.com', icon: 'https://konghq.com/favicon.ico',
      category: 'architecture', tags: ['API网关', '云原生']
    },
    {
      id: 'apisix', name: 'Apache APISIX', desc: '高性能API网关，国产开源',
      url: 'https://apisix.apache.org', icon: 'https://apisix.apache.org/favicon.ico',
      category: 'architecture', tags: ['API网关', '国产', '开源']
    },
    {
      id: 'kafka', name: 'Apache Kafka', desc: '分布式事件流平台，高吞吐消息队列',
      url: 'https://kafka.apache.org', icon: 'https://kafka.apache.org/favicon.ico',
      category: 'architecture', tags: ['消息队列', '流处理', '分布式']
    },
    {
      id: 'rocketmq', name: 'Apache RocketMQ', desc: '阿里开源分布式消息中间件',
      url: 'https://rocketmq.apache.org', icon: 'https://rocketmq.apache.org/favicon.ico',
      category: 'architecture', tags: ['消息队列', '国产', '分布式']
    },
    {
      id: 'sentinel', name: 'Sentinel', desc: '阿里开源的流量控制组件',
      url: 'https://sentinelguard.io', icon: 'https://sentinelguard.io/favicon.ico',
      category: 'architecture', tags: ['熔断', '限流', '微服务']
    },
    {
      id: 'minio', name: 'MinIO', desc: '高性能对象存储，S3兼容',
      url: 'https://min.io', icon: 'https://min.io/favicon.ico',
      category: 'architecture', tags: ['存储', '对象存储', 'S3']
    },
    {
      id: 'nacos', name: 'Nacos', desc: '阿里开源的服务发现和配置管理',
      url: 'https://nacos.io', icon: 'https://nacos.io/favicon.ico',
      category: 'architecture', tags: ['服务发现', '配置中心', '国产']
    },

    // ===== 前端技术 =====
    {
      id: 'react', name: 'React', desc: 'Meta推出的前端UI库',
      url: 'https://react.dev', icon: 'https://react.dev/favicon.ico',
      category: 'frontend', tags: ['UI库', '组件', 'JSX']
    },
    {
      id: 'vue', name: 'Vue.js', desc: '渐进式JavaScript框架',
      url: 'https://vuejs.org', icon: 'https://vuejs.org/favicon.ico',
      category: 'frontend', tags: ['框架', '响应式', '易学']
    },
    {
      id: 'nextjs', name: 'Next.js', desc: 'React全栈框架，支持SSR/SSG',
      url: 'https://nextjs.org', icon: 'https://nextjs.org/favicon.ico',
      category: 'frontend', tags: ['全栈', 'SSR', 'React']
    },
    {
      id: 'nuxt', name: 'Nuxt.js', desc: 'Vue全栈框架，支持SSR/SSG',
      url: 'https://nuxt.com', icon: 'https://nuxt.com/favicon.ico',
      category: 'frontend', tags: ['全栈', 'SSR', 'Vue']
    },
    {
      id: 'tailwind', name: 'Tailwind CSS', desc: '实用优先的CSS框架',
      url: 'https://tailwindcss.com', icon: 'https://tailwindcss.com/favicon.ico',
      category: 'frontend', tags: ['CSS', '框架', '工具类']
    },
    {
      id: 'ant-design', name: 'Ant Design', desc: '阿里企业级UI组件库',
      url: 'https://ant.design', icon: 'https://ant.design/favicon.ico',
      category: 'frontend', tags: ['组件库', '企业级', 'React']
    },
    {
      id: 'element-plus', name: 'Element Plus', desc: '基于Vue3的组件库',
      url: 'https://element-plus.org', icon: 'https://element-plus.org/favicon.ico',
      category: 'frontend', tags: ['组件库', 'Vue3', '中文']
    },
    {
      id: 'vite', name: 'Vite', desc: '下一代前端构建工具',
      url: 'https://vitejs.dev', icon: 'https://vitejs.dev/favicon.ico',
      category: 'frontend', tags: ['构建工具', '快速', 'ESM']
    },
    {
      id: 'typescript', name: 'TypeScript', desc: 'JavaScript超集，静态类型检查',
      url: 'https://www.typescriptlang.org', icon: 'https://www.typescriptlang.org/favicon.ico',
      category: 'frontend', tags: ['类型', 'JavaScript', '微软']
    },

    // ===== 后端技术 =====
    {
      id: 'spring-boot', name: 'Spring Boot', desc: 'Java应用快速开发框架',
      url: 'https://spring.io/projects/spring-boot', icon: 'https://spring.io/favicon.ico',
      category: 'backend', tags: ['Java', '框架', '快速开发']
    },
    {
      id: 'fastapi', name: 'FastAPI', desc: 'Python高性能Web框架',
      url: 'https://fastapi.tiangolo.com', icon: 'https://fastapi.tiangolo.com/favicon.ico',
      category: 'backend', tags: ['Python', '异步', '高性能']
    },
    {
      id: 'gin', name: 'Gin', desc: 'Go语言高性能Web框架',
      url: 'https://gin-gonic.com', icon: 'https://gin-gonic.com/favicon.ico',
      category: 'backend', tags: ['Go', '高性能', '轻量']
    },
    {
      id: 'express', name: 'Express', desc: 'Node.js Web应用框架',
      url: 'https://expressjs.com', icon: 'https://expressjs.com/favicon.ico',
      category: 'backend', tags: ['Node.js', 'Web', '中间件']
    },
    {
      id: 'redis', name: 'Redis', desc: '内存数据库，高速缓存',
      url: 'https://redis.io', icon: 'https://redis.io/favicon.ico',
      category: 'backend', tags: ['缓存', '数据库', '内存']
    },
    {
      id: 'postgresql', name: 'PostgreSQL', desc: '强大的开源关系型数据库',
      url: 'https://www.postgresql.org', icon: 'https://www.postgresql.org/favicon.ico',
      category: 'backend', tags: ['数据库', '关系型', '开源']
    },
    {
      id: 'elasticsearch', name: 'Elasticsearch', desc: '分布式搜索引擎',
      url: 'https://www.elastic.co/elasticsearch', icon: 'https://www.elastic.co/favicon.ico',
      category: 'backend', tags: ['搜索', '分析', '日志']
    },
    {
      id: 'nginx', name: 'Nginx', desc: '高性能Web服务器和反向代理',
      url: 'https://nginx.org', icon: 'https://nginx.org/favicon.ico',
      category: 'backend', tags: ['Web服务器', '反向代理', '负载均衡']
    },

    // ===== 国产化软件 =====
    {
      id: 'kylin-os', name: '麒麟OS', desc: '国产操作系统，政务市场领先',
      url: 'https://www.kylinos.cn', icon: 'https://www.kylinos.cn/favicon.ico',
      category: 'domestic', tags: ['操作系统', '国产', '政务']
    },
    {
      id: 'uos', name: '统信UOS', desc: '统一操作系统，生态丰富',
      url: 'https://www.uniontech.com', icon: 'https://www.uniontech.com/favicon.ico',
      category: 'domestic', tags: ['操作系统', '国产', '桌面']
    },
    {
      id: 'dameng', name: '达梦数据库', desc: '国产数据库领导者',
      url: 'https://www.dameng.com', icon: 'https://www.dameng.com/favicon.ico',
      category: 'domestic', tags: ['数据库', '国产', '企业级']
    },
    {
      id: 'oceanbase', name: 'OceanBase', desc: '蚂蚁集团分布式数据库',
      url: 'https://www.oceanbase.com', icon: 'https://www.oceanbase.com/favicon.ico',
      category: 'domestic', tags: ['分布式', '数据库', '国产']
    },
    {
      id: 'tidb', name: 'TiDB', desc: 'PingCAP分布式数据库',
      url: 'https://www.pingcap.com', icon: 'https://www.pingcap.com/favicon.ico',
      category: 'domestic', tags: ['分布式', 'MySQL兼容', '国产']
    },
    {
      id: 'openlookeng', name: 'openLooKeng', desc: '华为开源数据虚拟化引擎',
      url: 'https://openlookeng.io', icon: 'https://openlookeng.io/favicon.ico',
      category: 'domestic', tags: ['数据虚拟化', '国产', '开源']
    },
    {
      id: 'wps', name: 'WPS Office', desc: '国产办公软件套件',
      url: 'https://www.wps.cn', icon: 'https://www.wps.cn/favicon.ico',
      category: 'domestic', tags: ['办公', '文档', '国产']
    },
    {
      id: 'mastergo', name: 'MasterGo', desc: '国产在线设计工具',
      url: 'https://mastergo.com', icon: 'https://mastergo.com/favicon.ico',
      category: 'domestic', tags: ['设计', '协作', '国产']
    },
    {
      id: 'wenxin', name: '文心一言', desc: '百度推出的AI大语言模型',
      url: 'https://yiyan.baidu.com', icon: 'https://yiyan.baidu.com/favicon.ico',
      category: 'domestic', tags: ['大模型', 'AI', '国产']
    },
    {
      id: 'tongyi', name: '通义千问', desc: '阿里推出的AI大语言模型',
      url: 'https://tongyi.aliyun.com', icon: 'https://tongyi.aliyun.com/favicon.ico',
      category: 'domestic', tags: ['大模型', 'AI', '国产']
    },
    {
      id: 'zhipu', name: '智谱清言', desc: '智谱AI推出的AI助手',
      url: 'https://chatglm.cn', icon: 'https://chatglm.cn/favicon.ico',
      category: 'domestic', tags: ['大模型', 'AI', '国产']
    },

    // ===== 云原生 =====
    {
      id: 'docker', name: 'Docker', desc: '容器化平台，应用打包部署',
      url: 'https://www.docker.com', icon: 'https://www.docker.com/favicon.ico',
      category: 'cloudnative', tags: ['容器', '部署', 'DevOps']
    },
    {
      id: 'kubernetes', name: 'Kubernetes', desc: '容器编排平台，自动化部署扩展',
      url: 'https://kubernetes.io', icon: 'https://kubernetes.io/favicon.ico',
      category: 'cloudnative', tags: ['编排', '容器', '云原生']
    },
    {
      id: 'github-actions', name: 'GitHub Actions', desc: 'GitHub CI/CD自动化',
      url: 'https://github.com/features/actions', icon: 'https://github.com/favicon.ico',
      category: 'cloudnative', tags: ['CI/CD', '自动化', 'GitHub']
    },
    {
      id: 'gitlab-ci', name: 'GitLab CI', desc: 'GitLab内置CI/CD工具',
      url: 'https://docs.gitlab.com/ee/ci/', icon: 'https://gitlab.com/favicon.ico',
      category: 'cloudnative', tags: ['CI/CD', 'DevOps', 'GitLab']
    },
    {
      id: 'aws', name: 'AWS', desc: '亚马逊云服务平台',
      url: 'https://aws.amazon.com', icon: 'https://aws.amazon.com/favicon.ico',
      category: 'cloudnative', tags: ['云服务', '基础设施', '全球']
    },
    {
      id: 'alibaba-cloud', name: '阿里云', desc: '阿里云服务平台',
      url: 'https://www.aliyun.com', icon: 'https://www.aliyun.com/favicon.ico',
      category: 'cloudnative', tags: ['云服务', '国产', '基础设施']
    },
    {
      id: 'terraform', name: 'Terraform', desc: '基础设施即代码工具',
      url: 'https://www.terraform.io', icon: 'https://www.terraform.io/favicon.ico',
      category: 'cloudnative', tags: ['IaC', '基础设施', 'HashiCorp']
    },

    // ===== 开发工具 =====
    {
      id: 'vscode', name: 'VS Code', desc: '微软开源代码编辑器',
      url: 'https://code.visualstudio.com', icon: 'https://code.visualstudio.com/favicon.ico',
      category: 'devtools', tags: ['编辑器', '开源', '微软']
    },
    {
      id: 'github', name: 'GitHub', desc: '全球最大代码托管平台',
      url: 'https://github.com', icon: 'https://github.com/favicon.ico',
      category: 'devtools', tags: ['代码托管', '协作', '开源']
    },
    {
      id: 'postman', name: 'Postman', desc: 'API开发测试工具',
      url: 'https://www.postman.com', icon: 'https://www.postman.com/favicon.ico',
      category: 'devtools', tags: ['API', '测试', '调试']
    },
    {
      id: 'docker-desktop', name: 'Docker Desktop', desc: 'Docker桌面客户端',
      url: 'https://www.docker.com/products/docker-desktop', icon: 'https://www.docker.com/favicon.ico',
      category: 'devtools', tags: ['容器', '桌面', '开发']
    },
    {
      id: 'figma', name: 'Figma', desc: '在线协作设计工具',
      url: 'https://www.figma.com', icon: 'https://www.figma.com/favicon.ico',
      category: 'devtools', tags: ['设计', '协作', 'UI']
    },
    {
      id: 'notion', name: 'Notion', desc: '全能知识管理工具',
      url: 'https://www.notion.so', icon: 'https://www.notion.so/favicon.ico',
      category: 'devtools', tags: ['笔记', '知识库', '协作']
    },

    // ===== 学习资源 =====
    {
      id: 'mdn', name: 'MDN Web Docs', desc: 'Mozilla开发者文档',
      url: 'https://developer.mozilla.org', icon: 'https://developer.mozilla.org/favicon.ico',
      category: 'learning', tags: ['文档', 'Web', 'Mozilla']
    },
    {
      id: 'stackoverflow', name: 'Stack Overflow', desc: '技术问答社区',
      url: 'https://stackoverflow.com', icon: 'https://stackoverflow.com/favicon.ico',
      category: 'learning', tags: ['问答', '社区', '编程']
    },
    {
      id: 'juejin', name: '掘金', desc: '中文技术社区',
      url: 'https://juejin.cn', icon: 'https://juejin.cn/favicon.ico',
      category: 'learning', tags: ['社区', '中文', '技术']
    },
    {
      id: 'zhihu', name: '知乎', desc: '中文问答社区',
      url: 'https://www.zhihu.com', icon: 'https://www.zhihu.com/favicon.ico',
      category: 'learning', tags: ['问答', '社区', '中文']
    },
    {
      id: 'coursera', name: 'Coursera', desc: '在线课程平台',
      url: 'https://www.coursera.org', icon: 'https://www.coursera.org/favicon.ico',
      category: 'learning', tags: ['课程', 'MOOC', '在线']
    },
    {
      id: 'leetcode', name: 'LeetCode', desc: '算法刷题平台',
      url: 'https://leetcode.cn', icon: 'https://leetcode.cn/favicon.ico',
      category: 'learning', tags: ['算法', '刷题', '面试']
    },

    // ===== 更多AI工具 =====
    {
      id: 'tongyi-wanxiang', name: '通义万相', desc: '阿里推出的AI图像创作平台',
      url: 'https://tongyi.aliyun.com/wanxiang', icon: 'https://tongyi.aliyun.com/favicon.ico',
      category: 'ai', tags: ['图像', '创作', '阿里']
    },
    {
      id: 'keling', name: '可灵AI', desc: '快手推出的AI视频生成工具',
      url: 'https://klingai.kuaishou.com', icon: 'https://klingai.kuaishou.com/favicon.ico',
      category: 'ai', tags: ['视频', '生成', '快手']
    },
    {
      id: 'jimeng', name: '即梦', desc: '抖音推出的AI图像创作工具',
      url: 'https://jimeng.jianying.com', icon: 'https://jimeng.jianying.com/favicon.ico',
      category: 'ai', tags: ['图像', '创作', '抖音']
    },
    {
      id: 'codeium', name: 'Codeium', desc: '免费AI代码补全工具',
      url: 'https://codeium.com', icon: 'https://codeium.com/favicon.ico',
      category: 'ai', tags: ['编程', '免费', '代码补全']
    },
    {
      id: 'tabnine', name: 'Tabnine', desc: 'AI代码助手，支持多语言',
      url: 'https://www.tabnine.com', icon: 'https://www.tabnine.com/favicon.ico',
      category: 'ai', tags: ['编程', '代码补全', '多语言']
    },
    {
      id: 'moonshot', name: '月之暗面', desc: 'Kimi背后的AI公司',
      url: 'https://www.moonshot.cn', icon: 'https://www.moonshot.cn/favicon.ico',
      category: 'ai', tags: ['大模型', 'AI', '国产']
    },
    {
      id: 'minimax', name: 'MiniMax', desc: '稀宇科技推出的AI平台',
      url: 'https://www.minimaxi.com', icon: 'https://www.minimaxi.com/favicon.ico',
      category: 'ai', tags: ['大模型', 'AI', '国产']
    },
    {
      id: 'baichuan', name: '百川智能', desc: '王小川创立的AI公司',
      url: 'https://www.baichuan-ai.com', icon: 'https://www.baichuan-ai.com/favicon.ico',
      category: 'ai', tags: ['大模型', 'AI', '国产']
    },

    // ===== 更多软件架构 =====
    {
      id: 'istio', name: 'Istio', desc: '服务网格，流量管理',
      url: 'https://istio.io', icon: 'https://istio.io/favicon.ico',
      category: 'architecture', tags: ['服务网格', '流量管理', '云原生']
    },
    {
      id: 'consul', name: 'HashiCorp Consul', desc: '服务发现和配置',
      url: 'https://www.consul.io', icon: 'https://www.consul.io/favicon.ico',
      category: 'architecture', tags: ['服务发现', '配置', 'HashiCorp']
    },
    {
      id: 'etcd', name: 'etcd', desc: '分布式键值存储',
      url: 'https://etcd.io', icon: 'https://etcd.io/favicon.ico',
      category: 'architecture', tags: ['分布式', '键值存储', 'Kubernetes']
    },
    {
      id: 'zookeeper', name: 'Apache ZooKeeper', desc: '分布式协调服务',
      url: 'https://zookeeper.apache.org', icon: 'https://zookeeper.apache.org/favicon.ico',
      category: 'architecture', tags: ['分布式', '协调', 'Apache']
    },

    // ===== 更多前端技术 =====
    {
      id: 'angular', name: 'Angular', desc: 'Google推出的前端框架',
      url: 'https://angular.dev', icon: 'https://angular.dev/favicon.ico',
      category: 'frontend', tags: ['框架', 'Google', 'TypeScript']
    },
    {
      id: 'svelte', name: 'Svelte', desc: '编译时前端框架',
      url: 'https://svelte.dev', icon: 'https://svelte.dev/favicon.ico',
      category: 'frontend', tags: ['框架', '编译时', '轻量']
    },
    {
      id: 'solidjs', name: 'SolidJS', desc: '高性能响应式UI框架',
      url: 'https://www.solidjs.com', icon: 'https://www.solidjs.com/favicon.ico',
      category: 'frontend', tags: ['框架', '响应式', '高性能']
    },
    {
      id: 'alova', name: 'Alova', desc: '请求策略库，替代Axios',
      url: 'https://alova.js.org', icon: 'https://alova.js.org/favicon.ico',
      category: 'frontend', tags: ['请求', 'HTTP', '国产']
    },

    // ===== 更多后端技术 =====
    {
      id: 'django', name: 'Django', desc: 'Python全栈Web框架',
      url: 'https://www.djangoproject.com', icon: 'https://www.djangoproject.com/favicon.ico',
      category: 'backend', tags: ['Python', '全栈', 'ORM']
    },
    {
      id: 'flask', name: 'Flask', desc: 'Python轻量Web框架',
      url: 'https://flask.palletsprojects.com', icon: 'https://flask.palletsprojects.com/favicon.ico',
      category: 'backend', tags: ['Python', '轻量', '微框架']
    },
    {
      id: 'fiber', name: 'Fiber', desc: 'Go语言Web框架',
      url: 'https://gofiber.io', icon: 'https://gofiber.io/favicon.ico',
      category: 'backend', tags: ['Go', '高性能', 'Express风格']
    },
    {
      id: 'mysql', name: 'MySQL', desc: '最流行的开源数据库',
      url: 'https://www.mysql.com', icon: 'https://www.mysql.com/favicon.ico',
      category: 'backend', tags: ['数据库', '关系型', '流行']
    },
    {
      id: 'mongodb', name: 'MongoDB', desc: 'NoSQL文档数据库',
      url: 'https://www.mongodb.com', icon: 'https://www.mongodb.com/favicon.ico',
      category: 'backend', tags: ['NoSQL', '文档', '灵活']
    },

    // ===== 更多国产化软件 =====
    {
      id: 'openharmony', name: 'OpenHarmony', desc: '华为开源操作系统',
      url: 'https://www.openharmony.cn', icon: 'https://www.openharmony.cn/favicon.ico',
      category: 'domestic', tags: ['操作系统', '华为', '开源']
    },
    {
      id: 'anolis', name: 'Anolis OS', desc: '阿里开源操作系统',
      url: 'https://www.anolisos.org', icon: 'https://www.anolisos.org/favicon.ico',
      category: 'domestic', tags: ['操作系统', '阿里', '开源']
    },
    {
      id: 'kingbase', name: '人大金仓', desc: '国产数据库厂商',
      url: 'https://www.kingbase.com.cn', icon: 'https://www.kingbase.com.cn/favicon.ico',
      category: 'domestic', tags: ['数据库', '国产', '企业级']
    },
    {
      id: 'gbase', name: 'GBase', desc: '南大通用数据库',
      url: 'https://www.gbase.cn', icon: 'https://www.gbase.cn/favicon.ico',
      category: 'domestic', tags: ['数据库', '国产', '分析型']
    },
    {
      id: 'tongweb', name: '东方通', desc: '国产中间件厂商',
      url: 'https://www.tongweb.com.cn', icon: 'https://www.tongweb.com.cn/favicon.ico',
      category: 'domestic', tags: ['中间件', '国产', '应用服务器']
    },
    {
      id: 'pixso', name: 'Pixso', desc: '国产在线设计工具',
      url: 'https://pixso.cn', icon: 'https://pixso.cn/favicon.ico',
      category: 'domestic', tags: ['设计', '协作', '国产']
    },
    {
      id: 'modao', name: '墨刀', desc: '国产原型设计工具',
      url: 'https://modao.cc', icon: 'https://modao.cc/favicon.ico',
      category: 'domestic', tags: ['原型', '设计', '国产']
    },
    {
      id: 'yealink', name: '亿联', desc: '国产视频会议设备',
      url: 'https://www.yealink.com.cn', icon: 'https://www.yealink.com.cn/favicon.ico',
      category: 'domestic', tags: ['视频会议', '硬件', '国产']
    },

    // ===== 更多云原生 =====
    {
      id: 'podman', name: 'Podman', desc: '无守护进程的容器引擎',
      url: 'https://podman.io', icon: 'https://podman.io/favicon.ico',
      category: 'cloudnative', tags: ['容器', '无守护进程', 'Red Hat']
    },
    {
      id: 'harbor', name: 'Harbor', desc: '容器镜像仓库',
      url: 'https://goharbor.io', icon: 'https://goharbor.io/favicon.ico',
      category: 'cloudnative', tags: ['镜像', '仓库', 'CNCF']
    },
    {
      id: 'prometheus', name: 'Prometheus', desc: '监控和告警系统',
      url: 'https://prometheus.io', icon: 'https://prometheus.io/favicon.ico',
      category: 'cloudnative', tags: ['监控', '告警', 'CNCF']
    },
    {
      id: 'grafana', name: 'Grafana', desc: '可视化监控面板',
      url: 'https://grafana.com', icon: 'https://grafana.com/favicon.ico',
      category: 'cloudnative', tags: ['可视化', '监控', '仪表盘']
    },
    {
      id: 'argocd', name: 'ArgoCD', desc: 'GitOps持续部署工具',
      url: 'https://argo-cd.readthedocs.io', icon: 'https://argo-cd.readthedocs.io/favicon.ico',
      category: 'cloudnative', tags: ['GitOps', 'CD', 'Kubernetes']
    },
    {
      id: 'tekton', name: 'Tekton', desc: '云原生CI/CD框架',
      url: 'https://tekton.dev', icon: 'https://tekton.dev/favicon.ico',
      category: 'cloudnative', tags: ['CI/CD', 'Kubernetes', 'CNCF']
    },

    // ===== 更多开发工具 =====
    {
      id: 'jetbrains', name: 'JetBrains', desc: '专业IDE厂商（IDEA/WebStorm等）',
      url: 'https://www.jetbrains.com', icon: 'https://www.jetbrains.com/favicon.ico',
      category: 'devtools', tags: ['IDE', 'Java', '专业']
    },
    {
      id: 'vim', name: 'Vim/Neovim', desc: '终端文本编辑器',
      url: 'https://www.vim.org', icon: 'https://www.vim.org/favicon.ico',
      category: 'devtools', tags: ['编辑器', '终端', '高效']
    },
    {
      id: 'insomnia', name: 'Insomnia', desc: 'API设计和测试工具',
      url: 'https://insomnia.rest', icon: 'https://insomnia.rest/favicon.ico',
      category: 'devtools', tags: ['API', '测试', '设计']
    },
    {
      id: 'dbeaver', name: 'DBeaver', desc: '通用数据库管理工具',
      url: 'https://dbeaver.io', icon: 'https://dbeaver.io/favicon.ico',
      category: 'devtools', tags: ['数据库', '管理', '开源']
    },
    {
      id: 'warp', name: 'Warp', desc: '现代终端工具',
      url: 'https://www.warp.dev', icon: 'https://www.warp.dev/favicon.ico',
      category: 'devtools', tags: ['终端', '现代', 'AI']
    },
    {
      id: 'raycast', name: 'Raycast', desc: 'Mac效率启动器',
      url: 'https://www.raycast.com', icon: 'https://www.raycast.com/favicon.ico',
      category: 'devtools', tags: ['启动器', 'Mac', '效率']
    },

    // ===== 更多学习资源 =====
    {
      id: 'github-learn', name: 'GitHub Skills', desc: 'GitHub官方学习平台',
      url: 'https://skills.github.com', icon: 'https://github.com/favicon.ico',
      category: 'learning', tags: ['学习', 'GitHub', '互动']
    },
    {
      id: 'freecodecamp', name: 'freeCodeCamp', desc: '免费编程学习平台',
      url: 'https://www.freecodecamp.org', icon: 'https://www.freecodecamp.org/favicon.ico',
      category: 'learning', tags: ['免费', '编程', '实战']
    },
    {
      id: 'codecademy', name: 'Codecademy', desc: '交互式编程学习',
      url: 'https://www.codecademy.com', icon: 'https://www.codecademy.com/favicon.ico',
      category: 'learning', tags: ['交互', '编程', '课程']
    },
    {
      id: 'geekbang', name: '极客时间', desc: '中文技术课程平台',
      url: 'https://time.geekbang.org', icon: 'https://time.geekbang.org/favicon.ico',
      category: 'learning', tags: ['课程', '中文', '技术']
    },
    {
      id: 'imooc', name: '慕课网', desc: '中文IT技能学习平台',
      url: 'https://www.imooc.com', icon: 'https://www.imooc.com/favicon.ico',
      category: 'learning', tags: ['课程', '中文', 'IT']
    },
    {
      id: 'runoob', name: '菜鸟教程', desc: '编程技术入门教程',
      url: 'https://www.runoob.com', icon: 'https://www.runoob.com/favicon.ico',
      category: 'learning', tags: ['教程', '入门', '中文']
    }
  ]
};
# 项目列表 (Projects List)

> 过往项目总目录。每个子项目独立文件夹管理（`<slug>/README.md` + `<slug>/index.html`）。
> 本文件为索引，便于检索与维护。详细内容见各子文件夹。

## 项目清单（18 项）

### 航天 · 卫星通信与测运控

| 序号 | 项目 | 标签 | 目录 |
|------|------|------|------|
| 01 | 某旗舰手机卫星通信项目（Mate60） | 航天 · 卫星通信 | [mate60-satellite](mate60-satellite/) |
| 02 | 某卫星测运控项目 | 航天 · 测运控系统 | [satellite-ttnc](satellite-ttnc/) |
| 03 | 星网健康管理系统 | 航天 · 卫星健康管理 | [starnet-health](starnet-health/) |
| 04 | 某地面站健康管理系统 | 航天 · 地面站 | [ground-station-health](ground-station-health/) |
| 05 | 遥控作业及轨道项目 | 航天 · 遥控作业 | [telecontrol-orbit](telecontrol-orbit/) |
| 06 | XW卫星资源管理项目 | 航天 · 资源调度 | [xw-resource-mgmt](xw-resource-mgmt/) |

### AI · 智能应用与知识

| 序号 | 项目 | 标签 | 目录 |
|------|------|------|------|
| 07 | 反无人机监控系统 | 安防 · CV | [anti-drone](anti-drone/) |
| 08 | 某基地智能知识库系统 | 知识库 · RAG | [base-knowledge-base](base-knowledge-base/) |
| 09 | 某院所知识图谱系统 | 图谱 · NLP | [institute-knowledge-graph](institute-knowledge-graph/) |
| 10 | BHF 智能运维系统 | AIOps · 智能运维 | [bhf-aiops](bhf-aiops/) |
| 11 | 某 Jun 所智能问答 | QA · 内网部署 | [jun-qa-system](jun-qa-system/) |
| 12 | 某文档自动生成平台 | AIGC · LLM Agent | [doc-autogen](doc-autogen/) |
| 13 | 某智能体生成器系统 | Agent · MCP | [agent-generator](agent-generator/) |

### 企业 · 信息化

| 序号 | 项目 | 标签 | 目录 |
|------|------|------|------|
| 14 | 某云视频会议系统（小鱼易连） | 云视频 · 协作 | [cloud-video-conf](cloud-video-conf/) |
| 15 | 某私有云存储系统（AnyShare） | 云存储 · 企业内容管理 | [private-cloud-storage](private-cloud-storage/) |
| 16 | 上海电信网络资源管理平台 | 电信 · 资源管理 | [shanghai-telecom-resource](shanghai-telecom-resource/) |
| 17 | 中国移动MDM终端管理平台 | 企业移动管理 | [cmcc-mdm](cmcc-mdm/) |
| 18 | 更多其他项目 | 综合 · 信息化 | [more-projects](more-projects/) |

## 目录结构约定

```
projects/
├── index.html            # 项目总览页（卡片/列表切换）
├── projects_list.md      # 本索引文件
├── projects.css          # 项目页专用样式（extra_css 加载）
└── <slug>/               # 每个子项目独立文件夹
    ├── README.md         # 子项目说明（Markdown 源）
    └── index.html        # 子项目详情页（modern-page 布局，复用全局主题）
```

## 状态

- 框架与占位已完成（2026-06-25）；18 个子项目 `index.html` 均已预留详情页骨架。
- 后续逐个深入完善各子项目内容（README 详写、详情页补充架构图/截图/数据）。

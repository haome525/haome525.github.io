---
title: Git 工作流最佳实践
tags: [Git, 版本控制, 工作流]
date: 2026-07-01
updated: 2026-07-01
---

# Git 工作流最佳实践

## 1. 三种主流工作流

### Git Flow

```
master ──── release ──── develop ──── feature
                └── hotfix
```

适合有固定发布周期的项目，但较复杂。

### GitHub Flow

```
main ──── feature → PR → merge
```

简洁，适合持续部署的项目。

### Trunk-Based

```
main ←── 小批量提交
```

最简，适合 CI/CD 成熟团队。

## 2. Commit 规范

使用 Conventional Commits：

```
feat: 添加用户注册功能
fix: 修复登录页面的 CSRF 漏洞
docs: 更新 API 文档
refactor: 重构数据库查询层
test: 添加购物车模块单元测试
```

## 3. 分支命名

```
feature/user-login
bugfix/fix-npe-on-null-input
hotfix/security-patch-20260701
release/v2.3.0
```

## 4. 合并策略

- **Merge Commit**：保留完整历史
- **Squash Merge**：压缩为单个 commit，保持主线整洁
- **Rebase**：线性历史，避免分叉

## 5. 交互式 Rebase

```bash
# 修改最近 3 个 commit
git rebase -i HEAD~3

# 选项：pick / squash / reword / edit / drop
```

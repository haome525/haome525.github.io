---
title: GitHub Actions CI/CD 实战
tags: [CI/CD, GitHub Actions, 自动化]
date: 2026-07-01
updated: 2026-07-01
---

# GitHub Actions CI/CD 实战

## 1. 基础结构

```yaml
name: CI Pipeline
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run tests
        run: make test
```

## 2. 完整的 Go 项目流水线

```yaml
name: Go CI/CD

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-go@v5
        with:
          go-version: '1.22'
      - run: go mod download
      - run: go test -race -coverprofile=coverage.out ./...
      - run: go vet ./...

  docker:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Build and push Docker image
        run: |
          docker build -t myapp:${{ github.sha }} .
          docker tag myapp:${{ github.sha }} myapp:latest
```

## 3. 部署到服务器

```yaml
deploy:
  needs: docker
  runs-on: ubuntu-latest
  steps:
    - name: Deploy via SSH
      uses: appleboy/ssh-action@v1.0.3
      with:
        host: ${{ secrets.DEPLOY_HOST }}
        username: ${{ secrets.DEPLOY_USER }}
        key: ${{ secrets.DEPLOY_KEY }}
        script: |
          cd /app
          docker compose pull
          docker compose up -d --force-recreate
```

## 4. 最佳实践

- **缓存依赖**：使用 `actions/cache` 加速流水线
- **矩阵构建**：并行测试多个 Go/Python 版本
- **安全**：敏感信息使用 Secrets 存储
- **通知**：失败时通过 Slack/Email 通知团队

---
title: Docker Compose 实战：多容器应用编排
tags: [Docker, DevOps, 容器]
date: 2026-07-01
updated: 2026-07-01
---

# Docker Compose 实战

Docker Compose 用于定义和运行多容器 Docker 应用。

## 1. 基础示例

```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "8080:8080"
    depends_on:
      - db
      - redis
  db:
    image: postgres:15
    environment:
      POSTGRES_DB: myapp
      POSTGRES_USER: user
      POSTGRES_PASSWORD: secret
    volumes:
      - pgdata:/var/lib/postgresql/data
  redis:
    image: redis:7-alpine
volumes:
  pgdata:
```

## 2. 常用命令

```bash
# 启动所有服务
docker compose up -d

# 查看日志
docker compose logs -f

# 重新构建并启动
docker compose up -d --build

# 停止并清理
docker compose down -v
```

## 3. 多环境配置

```yaml
# docker-compose.override.yml（开发环境）
services:
  web:
    volumes:
      - .:/app
    environment:
      DEBUG: "true"

# 生产环境
docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d
```

## 4. 健康检查

```yaml
services:
  web:
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8080/health"]
      interval: 30s
      timeout: 10s
      retries: 3
```

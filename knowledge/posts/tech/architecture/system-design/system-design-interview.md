---
title: 系统设计面试经典题目解析
tags: [系统设计, 面试, 架构]
date: 2026-07-01
updated: 2026-07-01
---

# 系统设计面试经典题目解析

## 系统设计四步法

1. **明确需求**：功能需求 + 非功能需求
2. **估算规模**：QPS、存储量、带宽
3. **高层设计**：模块划分、数据流
4. **深入设计**：关键组件细节

## 案例：短链接服务

### 需求
- 长 URL 转短链接
- 访问短链接时重定向
- 支持过期时间和统计

### 估算

假设日均 1 亿次生成，QPS ≈ 1150
读/写比例 ≈ 100:1（读远大于写）

### 架构

```
客户端 → Web 服务器 → 短链接生成服务 → 数据库
                   → 缓存（Redis）
                   → 计数器服务
```

### 关键设计

生成短链接：使用 Base62 编码唯一 ID，或使用哈希 + 碰撞检测：

```python
def generate_short_url(long_url):
    hash = hashlib.md5(long_url.encode()).hexdigest()[:6]
    # 碰撞检测
    while exists_in_db(hash):
        hash = hashlib.md5(long_url.encode() + str(time.time()).encode()).hexdigest()[:6]
    return hash
```

## 案例：聊天系统

- 用户在线状态管理
- 消息实时推送（WebSocket）
- 消息持久化与历史查询
- 群聊与离线消息
- 消息有序性保证

---
title: MySQL 索引原理与优化
tags: [MySQL, 数据库, 索引, 优化]
date: 2026-07-01
updated: 2026-07-01
---

# MySQL 索引原理与优化

## 1. B+ 树索引结构

MySQL InnoDB 使用 B+ 树作为索引结构：

- 非叶子节点存储键值指针，不存数据
- 叶子节点存储数据记录或主键值（聚簇索引）
- 叶子节点通过双向链表连接，支持范围查询

## 2. 聚簇索引与二级索引

### 聚簇索引
- 表的主键即为聚簇索引
- 叶子节点直接存储整行数据
- 一个表只能有一个聚簇索引

### 二级索引
- 叶子节点存储主键值
- 通过二级索引查询需要回表
- 覆盖索引可以避免回表

## 3. 索引优化策略

### 最左前缀原则

联合索引 `(a, b, c)` 生效的场景：

```sql
WHERE a = 1           -- ✅
WHERE a = 1 AND b = 2 -- ✅
WHERE a = 1 AND c = 3 -- ✅（a 走索引，c 不能）
WHERE b = 2           -- ❌ 不走索引
```

### 常用优化手段

```sql
-- 查看查询是否走索引
EXPLAIN SELECT * FROM users WHERE email = 'test@example.com';

-- 覆盖索引避免回表
CREATE INDEX idx_name_age ON users(name, age);
SELECT name, age FROM users WHERE name = 'Alice'; -- 只走索引，不回表
```

## 4. 索引设计原则

- 区分度高的列优先
- 频繁查询的列建索引
- 避免在索引列上使用函数或计算
- 小表不需要索引（全表扫描更快）
- 索引不是越多越好（影响写入性能）

---
title: SQL 查询优化实战技巧
tags: [SQL, 优化, 数据库]
date: 2026-07-01
updated: 2026-07-01
---

# SQL 查询优化实战技巧

## 1. 执行计划分析

```sql
EXPLAIN SELECT * FROM orders WHERE user_id = 123;
```

关注列：
- **type**：ALL（全表扫描）→ index → range → ref → eq_ref → const（最佳）
- **rows**：预估扫描行数
- **Extra**：Using filesort（需优化）、Using index（覆盖索引）

## 2. 常见优化手段

### 避免 SELECT *

```sql
-- 差
SELECT * FROM users WHERE email = 'test@test.com';

-- 好：只取需要的列，可能使用覆盖索引
SELECT id, name, email FROM users WHERE email = 'test@test.com';
```

### 分页优化

```sql
-- 传统分页（深度分页问题）
SELECT * FROM orders ORDER BY id LIMIT 100000, 20;

-- 优化：游标分页
SELECT * FROM orders WHERE id > 100000 ORDER BY id LIMIT 20;
```

### JOIN 优化

```sql
-- 确保 JOIN 列有索引
CREATE INDEX idx_orders_user_id ON orders(user_id);

-- 小表驱动大表
SELECT * FROM small_table s JOIN large_table l ON s.id = l.s_id;
```

## 3. 慢查询定位

```sql
-- 开启慢查询日志
SET GLOBAL slow_query_log = 'ON';
SET GLOBAL long_query_time = 1;  -- 超过 1 秒记录

-- 查看慢查询
SHOW VARIABLES LIKE 'slow_query_log_file';
```

## 4. 最佳实践清单

- ✅ 使用参数化查询防止 SQL 注入
- ✅ 为 JOIN 和 WHERE 列建立索引
- ✅ 避免在索引列上使用函数
- ✅ 用 UNION ALL 代替 UNION（不需要去重时）
- ✅ 用 EXISTS 代替 IN（子查询返回大量数据时）

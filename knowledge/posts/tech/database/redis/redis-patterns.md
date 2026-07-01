---
title: Redis 核心应用场景与最佳实践
tags: [Redis, 缓存, 分布式]
date: 2026-07-01
updated: 2026-07-01
---

# Redis 核心应用场景与最佳实践

## 1. 缓存

最常见的场景，减少数据库负载：

```python
def get_user(user_id):
    # 先查缓存
    user = redis.get(f"user:{user_id}")
    if user:
        return json.loads(user)
    # 缓存未命中，查数据库
    user = db.query("SELECT * FROM users WHERE id = ?", user_id)
    # 写入缓存，设置过期时间
    redis.setex(f"user:{user_id}", 3600, json.dumps(user))
    return user
```

## 2. 分布式锁

```python
import redis
import uuid

def acquire_lock(lock_name, acquire_timeout=10):
    lock_key = f"lock:{lock_name}"
    lock_value = str(uuid.uuid4())
    end = time.time() + acquire_timeout
    while time.time() < end:
        if redis.setnx(lock_key, lock_value):
            redis.expire(lock_key, 30)  # 自动释放
            return lock_value
        time.sleep(0.001)
    return None

def release_lock(lock_name, lock_value):
    # Lua 脚本保证原子性
    script = """
    if redis.call("get", KEYS[1]) == ARGV[1] then
        return redis.call("del", KEYS[1])
    else
        return 0
    end
    """
    redis.eval(script, 1, f"lock:{lock_name}", lock_value)
```

## 3. 计数器

```python
# 文章阅读量
redis.incr(f"article:count:{article_id}")

# 日活跃用户
redis.pfadd(f"dau:2026-07-01", user_id)
redis.pfcount(f"dau:2026-07-01")  # HyperLogLog 估算
```

## 4. 消息队列

```python
# 生产者
redis.lpush("task:queue", json.dumps(task))

# 消费者
while True:
    task = redis.brpop("task:queue", timeout=5)
    if task:
        process_task(json.loads(task[1]))
```

## 5. 注意事项

- **缓存穿透**：查询不存在的数据 → 布隆过滤器
- **缓存雪崩**：大量缓存同时过期 → 随机过期时间
- **缓存击穿**：热点 key 过期 → 互斥锁更新

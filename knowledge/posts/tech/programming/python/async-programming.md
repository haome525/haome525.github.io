---
title: Python 异步编程实战
tags: [Python, 异步, 编程]
date: 2026-07-01
updated: 2026-07-01
---

# Python 异步编程实战

asyncio 是 Python 标准库中的异步 I/O 框架，用于编写并发代码。

## 1. 核心概念

### 1.1 协程（Coroutine）

使用 `async def` 定义的函数返回一个协程对象：

```python
import asyncio

async def fetch_data(url):
    # 模拟网络请求
    await asyncio.sleep(1)
    return f"Data from {url}"
```

### 1.2 事件循环（Event Loop）

事件循环是 asyncio 的核心，负责调度和执行协程：

```python
async def main():
    result = await fetch_data("https://example.com")
    print(result)

asyncio.run(main())
```

## 2. 并发执行

使用 `asyncio.gather` 并发执行多个协程：

```python
async def main():
    urls = ["https://api1.com", "https://api2.com", "https://api3.com"]
    tasks = [fetch_data(url) for url in urls]
    results = await asyncio.gather(*tasks)
    print(results)  # 所有结果同时返回
```

## 3. 实践要点

- **避免阻塞**：在协程中不要使用 `time.sleep()`，应使用 `asyncio.sleep()`
- **超时控制**：使用 `asyncio.wait_for()` 设置超时
- **信号量**：使用 `asyncio.Semaphore` 控制并发数，防止资源耗尽

```python
async def bounded_fetch(sem, url):
    async with sem:
        return await fetch_data(url)

async def main():
    sem = asyncio.Semaphore(10)  # 最多 10 个并发
    tasks = [bounded_fetch(sem, url) for url in urls]
    results = await asyncio.gather(*tasks)
```

## 4. 适用场景

- 网络请求（HTTP API 调用）
- 数据库查询
- 文件 I/O
- WebSocket 通信

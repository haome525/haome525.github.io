---
title: Go 并发编程核心概念
tags: [Go, 并发, 编程]
date: 2026-07-01
updated: 2026-07-01
---

# Go 并发编程核心概念

Go 语言以其简洁而强大的并发模型著称。

## 1. Goroutine

比线程更轻量的并发执行单元：

```go
go func() {
    fmt.Println("Hello from goroutine")
}()
```

创建 goroutine 的开销仅约 4KB 栈空间，可轻松启动数十万个。

## 2. Channel

Goroutine 之间的通信管道：

```go
ch := make(chan int, 10) // 带缓冲的 channel

// 发送
ch <- 42

// 接收
val := <-ch
```

## 3. Select

多路复用，等待多个 channel 操作：

```go
select {
case msg := <-ch1:
    fmt.Println("received:", msg)
case ch2 <- 42:
    fmt.Println("sent 42")
case <-time.After(1 * time.Second):
    fmt.Println("timeout")
default:
    fmt.Println("no channel ready")
}
```

## 4. Sync 包

### 4.1 WaitGroup

等待一组 goroutine 完成：

```go
var wg sync.WaitGroup
for i := 0; i < 10; i++ {
    wg.Add(1)
    go func(id int) {
        defer wg.Done()
        fmt.Println("worker", id)
    }(i)
}
wg.Wait()
```

### 4.2 Mutex

保护共享资源：

```go
var mu sync.Mutex
var counter int

mu.Lock()
counter++
mu.Unlock()
```

## 5. 最佳实践

- **不要通过共享内存来通信，而应通过通信来共享内存**
- **关闭 channel 由发送方负责**
- **使用 `context` 包管理取消和超时**
- **使用 `sync.Pool` 减少内存分配**

---
title: Go 语言常见设计模式
tags: [设计模式, Go, 软件工程]
date: 2026-07-01
updated: 2026-07-01
---

# Go 语言常见设计模式

Go 语言没有传统的继承，但通过接口和组合实现了所有设计模式。

## 1. 单例模式

```go
var (
    instance *Config
    once     sync.Once
)

func GetConfig() *Config {
    once.Do(func() {
        instance = &Config{/* 初始化 */}
    })
    return instance
}
```

## 2. 工厂模式

```go
type Parser interface {
    Parse(data []byte) (Result, error)
}

func NewParser(format string) (Parser, error) {
    switch format {
    case "json":
        return &JSONParser{}, nil
    case "yaml":
        return &YAMLParser{}, nil
    default:
        return nil, fmt.Errorf("unsupported format: %s", format)
    }
}
```

## 3. 策略模式

```go
type Strategy interface {
    Execute(data []byte) ([]byte, error)
}

type Compressor struct {
    strategy Strategy
}

func (c *Compressor) Compress(data []byte) ([]byte, error) {
    return c.strategy.Execute(data)
}
```

## 4. 选项模式（Functional Options）

```go
type Server struct {
    host string
    port int
    timeout time.Duration
}

type Option func(*Server)

func WithHost(host string) Option {
    return func(s *Server) { s.host = host }
}

func WithTimeout(t time.Duration) Option {
    return func(s *Server) { s.timeout = t }
}

func NewServer(opts ...Option) *Server {
    s := &Server{host: "localhost", port: 8080, timeout: 30 * time.Second}
    for _, opt := range opts {
        opt(s)
    }
    return s
}
```

---
title: 测试金字塔与实战策略
tags: [测试, 质量, 最佳实践]
date: 2026-07-01
updated: 2026-07-01
---

# 测试金字塔与实战策略

## 1. 测试金字塔

```
    /\            E2E 测试（少量）
   /  \           集成测试（适中）
  /    \          单元测试（大量）
 /______\
```

- **单元测试**：测试单个函数/方法，快速、可靠
- **集成测试**：测试模块间交互，如 API 接口
- **E2E 测试**：测试完整用户流程，慢但覆盖真实场景

## 2. 单元测试最佳实践

```go
func TestAdd(t *testing.T) {
    tests := []struct {
        name string
        a, b int
        want int
    }{
        {"positive", 2, 3, 5},
        {"negative", -1, 1, 0},
        {"zero", 0, 0, 0},
    }
    for _, tt := range tests {
        t.Run(tt.name, func(t *testing.T) {
            if got := Add(tt.a, tt.b); got != tt.want {
                t.Errorf("Add(%d, %d) = %d, want %d", tt.a, tt.b, got, tt.want)
            }
        })
    }
}
```

## 3. Mock 与 Stub

使用 mock 对象隔离外部依赖：

```python
from unittest.mock import Mock

def test_get_user():
    mock_db = Mock()
    mock_db.query.return_value = {"id": 1, "name": "Alice"}
    service = UserService(mock_db)
    user = service.get_user(1)
    assert user.name == "Alice"
    mock_db.query.assert_called_once_with("SELECT * FROM users WHERE id=?", (1,))
```

## 4. 测试覆盖率

- 追求核心逻辑 80%+ 覆盖率
- 不要盲目追求 100%，关注关键路径
- 使用覆盖率报告识别未测试的代码

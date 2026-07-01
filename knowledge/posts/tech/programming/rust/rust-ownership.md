---
title: Rust 所有权系统精讲
tags: [Rust, 所有权, 内存安全]
date: 2026-07-01
updated: 2026-07-01
---

# Rust 所有权系统精讲

所有权是 Rust 最独特的设计，它在编译期保证内存安全，无需垃圾回收。

## 1. 三条规则

1. **每个值有且只有一个所有者**
2. **当所有者离开作用域，值被释放**
3. **值可以被借用（引用），但不能同时存在可变和不可变借用**

## 2. 所有权转移

```rust
let s1 = String::from("hello");
let s2 = s1; // s1 的所有权转移到 s2
// println!("{}", s1); // 编译错误！s1 已失效
```

## 3. 借用与引用

```rust
fn calculate_length(s: &String) -> usize {
    s.len()
} // 借用结束，s 返回给调用方

let s1 = String::from("hello");
let len = calculate_length(&s1);
println!("{} {}", s1, len); // s1 仍然可用
```

## 4. 生命周期

生命周期注解告诉编译器引用之间的关联：

```rust
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() { x } else { y }
}
```

## 5. 为什么所有权重要

- **零成本抽象**：所有检查在编译期完成，无运行时开销
- **内存安全**：杜绝空指针、悬垂指针、数据竞争
- **无畏并发**：Send 和 Sync trait 保证线程安全

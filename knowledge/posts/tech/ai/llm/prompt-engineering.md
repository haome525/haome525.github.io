---
title: Prompt Engineering 入门指南
tags: [LLM, Prompt, AI]
date: 2026-07-01
updated: 2026-07-01
---

# Prompt Engineering 入门指南

Prompt Engineering（提示工程）是与大语言模型有效沟通的关键技能。

## 1. 什么是 Prompt Engineering

Prompt Engineering 是设计和优化输入提示（Prompt）的技术，以引导 LLM 生成预期输出。

## 2. 核心技巧

### 2.1 Few-shot Prompting

在 Prompt 中提供几个示例，让模型学习模式：

```
将以下英文翻译为中文：
English: "Hello, world!" → 中文: "你好，世界！"
English: "Machine learning" → 中文: "机器学习"
English: "Artificial intelligence" → 中文:
```

### 2.2 Chain-of-Thought (CoT)

引导模型展示推理过程，而不是直接给出答案：

```
问题：一个苹果 3 元，小明买了 5 个苹果和 2 个橘子，
橘子每个 4 元，他一共花了多少钱？

推理过程：
1. 苹果总价 = 3 × 5 = 15 元
2. 橘子总价 = 4 × 2 = 8 元
3. 总花费 = 15 + 8 = 23 元
答案：23 元
```

### 2.3 Role Prompting

给模型分配特定角色：

```
你是一位资深的 Python 开发工程师，请审查以下代码...
```

## 3. 实践原则

- **具体明确**：模糊的 Prompt 得到模糊的回答
- **分步骤**：复杂任务拆分为多个步骤
- **格式控制**：指定输出格式（JSON、表格、列表等）
- **迭代优化**：根据输出持续调整 Prompt

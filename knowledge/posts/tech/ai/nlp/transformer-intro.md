---
title: Transformer 模型原理解读
tags: [NLP, Transformer, 深度学习]
date: 2026-07-01
updated: 2026-07-01
---

# Transformer 模型原理解读

Transformer 是当前 NLP 和 AI 领域最具影响力的架构，BERT、GPT 等模型均基于此。

## 1. 整体架构

Transformer 由 Encoder 和 Decoder 组成，每个模块包含多头注意力和前馈网络。

## 2. 核心机制

### 2.1 自注意力（Self-Attention）

计算每个词与其他词的关联程度：

```
Attention(Q, K, V) = softmax(QK^T / √d) × V
```

- Q（Query）：当前词的查询向量
- K（Key）：所有词的键向量
- V（Value）：所有词的值向量

### 2.2 多头注意力

将输入映射到多个子空间，并行计算注意力：

```python
class MultiHeadAttention(nn.Module):
    def __init__(self, d_model, n_heads):
        super().__init__()
        self.n_heads = n_heads
        self.d_k = d_model // n_heads
        self.w_q = nn.Linear(d_model, d_model)
        self.w_k = nn.Linear(d_model, d_model)
        self.w_v = nn.Linear(d_model, d_model)
```

### 2.3 位置编码

由于没有循环结构，使用正弦/余弦函数编码位置信息：

```
PE(pos, 2i) = sin(pos / 10000^(2i/d))
PE(pos, 2i+1) = cos(pos / 10000^(2i/d))
```

## 3. 关键优势

- **并行计算**：相比 RNN 可同时处理所有词
- **长距离依赖**：任意两个位置的交互距离为 1
- **可扩展性**：增加层数可提升模型能力

## 4. 衍生模型

- **BERT**：Encoder-only，双向理解
- **GPT**：Decoder-only，单向生成
- **T5**：Encoder-Decoder，文本到文本框架

---
title: 决策树算法原理与实践
tags: [机器学习, 决策树, 算法]
date: 2026-07-01
updated: 2026-07-01
---

# 决策树算法原理与实践

决策树是一种基于树结构的监督学习算法，可用于分类和回归任务。

## 1. 算法原理

决策树通过递归地选择最优特征进行数据集划分，每个内部节点代表一个特征上的判断，叶子节点代表类别或预测值。

### 1.1 特征选择指标

**信息增益（ID3 算法）**

信息增益 = 父节点熵 - 子节点加权熵

```python
import numpy as np

def entropy(y):
    classes, counts = np.unique(y, return_counts=True)
    probs = counts / len(y)
    return -np.sum(probs * np.log2(probs + 1e-10))
```

**基尼系数（CART 算法）**

基尼系数衡量数据集的不纯度，值越小越纯净：

Gini = 1 - Σ(pᵢ)²

```python
def gini(y):
    classes, counts = np.unique(y, return_counts=True)
    probs = counts / len(y)
    return 1 - np.sum(probs ** 2)
```

## 2. 剪枝策略

决策树容易过拟合，需要剪枝：

- **预剪枝**：在构建过程中提前停止（限制深度、最小样本数等）
- **后剪枝**：先构建完整树，再自底向上替换或删除节点

## 3. 集成方法

单棵决策树方差较大，集成方法可以显著提升性能：

- **随机森林**：Bagging + 随机特征选择
- **梯度提升树（GBDT）**：Boosting 方式串行构建

## 4. 优缺点

### 优点
- 可解释性强，规则直观
- 不需要特征标准化
- 可处理非线性关系

### 缺点
- 容易过拟合
- 对数据微小变化敏感
- 贪心搜索不一定全局最优

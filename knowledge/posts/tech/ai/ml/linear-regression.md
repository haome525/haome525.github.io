---
title: 线性回归算法详解
tags: [机器学习, 算法, 数学, Python]
date: 2026-07-01
updated: 2026-07-01
---

# 线性回归算法详解

线性回归是统计学和机器学习中最基础也是最重要的算法之一。它用于建模一个或多个自变量与因变量之间的线性关系。

## 1. 什么是线性回归

线性回归假设目标变量 y 与特征变量 X 之间存在线性关系：

**y = β₀ + β₁x₁ + β₂x₂ + ... + βₙxₙ + ε**

其中：
- y 是目标变量（预测值）
- x₁, x₂, ..., xₙ 是特征变量
- β₀ 是截距
- β₁, β₂, ..., βₙ 是回归系数
- ε 是误差项

## 2. 最小二乘法

最常用的参数估计方法是最小二乘法（Ordinary Least Squares, OLS），其目标是最小化残差平方和：

**min Σ(yᵢ - ŷᵢ)²**

其中 ŷᵢ 是第 i 个样本的预测值。

### 2.1 矩阵解法

对于多元线性回归，可以使用矩阵形式求解：

**β = (XᵀX)⁻¹Xᵀy**

```python
import numpy as np

def linear_regression_ols(X, y):
    # 添加截距项
    X = np.column_stack([np.ones(X.shape[0]), X])
    # 计算回归系数
    beta = np.linalg.inv(X.T @ X) @ X.T @ y
    return beta
```

### 2.2 梯度下降法

当特征维度很高时，矩阵求逆的计算成本过高，可以使用梯度下降法迭代求解：

```python
def gradient_descent(X, y, lr=0.01, epochs=1000):
    m, n = X.shape
    X = np.column_stack([np.ones(m), X])
    beta = np.zeros(n + 1)
    
    for _ in range(epochs):
        predictions = X @ beta
        errors = predictions - y
        gradient = (2/m) * X.T @ errors
        beta -= lr * gradient
    
    return beta
```

## 3. 模型评估指标

- **MSE（均方误差）**：Σ(yᵢ - ŷᵢ)² / n
- **R²（决定系数）**：衡量模型拟合优度，取值范围 [0, 1]

```python
def evaluate(y_true, y_pred):
    mse = np.mean((y_true - y_pred) ** 2)
    ss_res = np.sum((y_true - y_pred) ** 2)
    ss_tot = np.sum((y_true - np.mean(y_true)) ** 2)
    r2 = 1 - (ss_res / ss_tot)
    return mse, r2
```

## 4. 实践要点

1. **特征标准化**：当特征尺度差异大时，梯度下降收敛慢，需要标准化
2. **多重共线性**：特征高度相关时，OLS 估计不稳定，可考虑正则化
3. **异常值处理**：线性回归对异常值敏感，应先进行数据清洗
4. **正则化**：Lasso（L1）和 Ridge（L2）可防止过拟合

## 5. 总结

线性回归是理解更复杂模型的基础。掌握它的数学原理和实现细节，有助于深入理解机器学习的核心思想。

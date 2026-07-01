---
title: 卷积神经网络（CNN）入门
tags: [计算机视觉, CNN, 深度学习, PyTorch]
date: 2026-07-01
updated: 2026-07-01
---

# 卷积神经网络（CNN）入门

CNN 是计算机视觉领域最核心的深度学习架构。

## 1. 核心组件

### 1.1 卷积层

使用卷积核在输入上滑动提取特征：

```python
import torch.nn as nn

conv = nn.Conv2d(in_channels=3, out_channels=16, kernel_size=3, stride=1, padding=1)
```

### 1.2 池化层

降采样以减少参数量和防止过拟合：

```python
pool = nn.MaxPool2d(kernel_size=2, stride=2)
```

### 1.3 全连接层

将提取的特征映射到类别：

```python
fc = nn.Linear(256, 10)  # 10 个类别
```

## 2. 经典架构

- **LeNet-5**：CNN 开山之作，手写数字识别
- **AlexNet**：引入 ReLU 和 Dropout，ImageNet 竞赛突破
- **VGG**：小卷积核堆叠，简洁而有效
- **ResNet**：残差连接解决深层网络退化问题

## 3. 实践：图像分类

```python
class SimpleCNN(nn.Module):
    def __init__(self):
        super().__init__()
        self.conv1 = nn.Conv2d(3, 16, 3, padding=1)
        self.conv2 = nn.Conv2d(16, 32, 3, padding=1)
        self.fc1 = nn.Linear(32 * 8 * 8, 128)
        self.fc2 = nn.Linear(128, 10)

    def forward(self, x):
        x = F.relu(self.conv1(x))
        x = F.max_pool2d(x, 2)
        x = F.relu(self.conv2(x))
        x = F.max_pool2d(x, 2)
        x = x.view(x.size(0), -1)
        x = F.relu(self.fc1(x))
        return self.fc2(x)
```

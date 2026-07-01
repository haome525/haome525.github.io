---
title: Kubernetes 核心概念入门
tags: [K8s, Kubernetes, DevOps]
date: 2026-07-01
updated: 2026-07-01
---

# Kubernetes 核心概念入门

## 1. 核心资源对象

### Pod
最小的部署单元，包含一个或多个容器：

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx
spec:
  containers:
  - name: nginx
    image: nginx:latest
    ports:
    - containerPort: 80
```

### Deployment
声明式管理 Pod 的副本数和滚动更新：

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: web
spec:
  replicas: 3
  selector:
    matchLabels:
      app: web
  template:
    spec:
      containers:
      - name: web
        image: myapp:latest
```

### Service
提供稳定的网络访问入口：

```yaml
apiVersion: v1
kind: Service
metadata:
  name: web-svc
spec:
  selector:
    app: web
  ports:
  - port: 80
    targetPort: 8080
  type: ClusterIP
```

### ConfigMap
将配置与容器镜像解耦：

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  config.yaml: |
    server:
      port: 8080
    database:
      host: postgres
```

## 2. kubectl 常用命令

```bash
kubectl get pods -n mynamespace
kubectl logs -f deployment/web
kubectl describe pod web-xxxxx
kubectl port-forward svc/web-svc 8080:80
kubectl exec -it pod-name -- /bin/sh
```

## 3. 核心概念总结

| 概念 | 作用 |
|------|------|
| Pod | 最小部署单元 |
| Deployment | 声明式 Pod 管理 |
| Service | 网络访问抽象 |
| ConfigMap | 配置管理 |
| Secret | 敏感信息管理 |
| Namespace | 资源隔离 |
| Ingress | 外部流量入口 |
| PersistentVolume | 持久化存储 |

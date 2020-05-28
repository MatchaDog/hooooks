# hooks

## 项目启动开发环境

```shell
npm start
```
or
```shell
npm run dev
```

## 创建一个组件

### 类组件
```shell
npm run new [componentName]
```

### 函数组件
```shell
npm run new [componentName] -- -f
```

## 项目构建

```shell
npm run build
```

### 构建时不经过任何校验
```shell
npm run build -- -n
```

## 项目发布

```shell
npm run release
```

### 发布时忽略版本自动迭代
```shell
npm run release -- -i
```

### 发布时版本手动迭代
```shell
npm run release -- -m 0.3.25
```

### 发布时不经过任何校验
```shell
npm run release -- -n
```

**更多配置项请在 [hupu.config.js](http://gitlab.hupu.com/foundation-frontend/hupu-cli/blob/master/HUPU.md) 中编辑**

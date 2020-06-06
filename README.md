
## hooooks

React Hooks Library

### 安装

```bash
yarn add hooooks
# or
npm install hooooks
```

### 使用

```javascript
import { useDidMount } from "hooooks";
```

### 文档

##### useDidMount

useDidMount 会在组件挂载后（插入 DOM 树中）立即调用。依赖于 DOM 节点的初始化应该放在这里。

```javascript
useDidMount(() => {
    console.log("did mount");
});
```


##### useDidUpdate

useDidUpdate 会在依赖的参数更新后立即调用。首次渲染不会执行此方法。

```javascript
componentDidUpdate(() => {
    console.log(`state changes:${state}`);
}, [state]);
```

##### useWillUnmount

useWillUnmount 会在组件卸载的时候执行。用以执行清除操作

```javascript
useWillUnmount(() => {
    clearTimeout(timer);
});
```

##### useClickOutside

useClickOutside 返回一个 Ref，你需要把 Ref 绑定在你需要的 Dom 元素上，当你点击了 Ref 之外的元素时，会执行 useClickOutside 的回调

```javascript
const divRef = useClickOutside(()=>{
    console.log("click outside");
})

<div ref={divRef}></div>
```

##### useIntersection

useIntersection 返回一个曝光状态和指定Ref，你需要把 Ref 绑定在你需要的 Dom 元素上，指定的Dom暴露出来时，曝光状态为true否则为false

```javascript
const [obState, divRef] = useIntersection()

<div ref={divRef}></div>
{ obState && <div>此时被曝光</div> }
```

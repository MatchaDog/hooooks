<!--
 * @Date: 2020-07-14 20:37:36
 * @LastEditors: Hans
 * @description: 
 * @LastEditTime: 2020-07-14 20:59:35
 * @FilePath: /hooooks/README.md
--> 
## hooooks

hooooks 是基于业务和 react hooks 整合成的 hooks 库

> Hook 是 React 16.8 的新增特性，使用前确保已阅读[点这](https://zh-hans.reactjs.org/docs/hooks-intro.html)相关文档

### 安装

```bash
yarn add hooooks
// or
npm install hooooks
```

### 使用

```javascript
import { useDidMount } from "hooooks";

const Demo = () => {
    useDidMount(()=>{
        console.log("component did mount!")
    })
    return <div></div>;
};
```

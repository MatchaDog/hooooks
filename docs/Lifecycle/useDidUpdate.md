### useDidUpdate

useDidUpdate 在依赖项更新后会被立即调用。首次渲染不会执行此方法

#### 演示

```tsx
import React, { useState } from "react";
import { useDidUpdate } from "hooooks";
import { Button, message } from "antd";

const Demo = () => {
    const [count, setCount] = useState(0);
    useDidUpdate(() => {
        message.info(count);
    }, [count]);
    return (
        <div>
            <Button
                onClick={() => {
                    setCount((count) => count + 1);
                }}>
                click
            </Button>
            <div>{count}</div>
        </div>
    );
};

export default Demo;
```

#### API

```js
useDidUpdate((fn: () => void), deps?: any[] | undefined);
```

#### 参数

| 参数 | 说明                           | 类型               | 默认值 |
| ---- | ------------------------------ | ------------------ | ------ |
| fn   | 在依赖项更新后会立即调用的函数 | ()=>void           | -      |
| deps | 依赖项                         | any[] \| undefined | -      |

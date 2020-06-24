### useDidMount

useDidMount 会在组件挂载后（插入 DOM 树中）立即调用

#### 演示

```tsx
import React, { useState } from "react";
import { useDidMount } from "hooooks";
import { Button, message } from "antd";

const Demo = () => {
    const [visible, setVisible] = useState(false);
    const MountDemo = () => {
        useDidMount(() => {
            message.success("component did mount!");
        });
        return <div>mount</div>;
    };
    return (
        <div>
            <Button
                onClick={() => {
                    setVisible(true);
                }}>
                click
            </Button>
            {visible && <MountDemo />}
        </div>
    );
};

export default Demo;
```

#### API

```js
useDidMount((fn: () => void));
```

#### 参数

| 参数 | 说明                              | 类型     | 默认值 |
| ---- | --------------------------------- | -------- | ------ |
| fn   | 在组件挂载后调用的函数 | ()=>void | -      |

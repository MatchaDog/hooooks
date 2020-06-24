### useWillUnmount

在组件卸载及销毁之前直接调用。可以在此方法中执行必要的清理操作

#### 演示

```tsx
import React, { useRef, useState } from "react";
import { useWillUnmount, useDidMount } from "hooooks";
import { Button, message } from "antd";

const Demo = () => {
    const [visible, setVisible] = useState(true);
    const CountDown = () => {
        const [time, setTime] = useState("");
        const timerRef = useRef<number>(0);
        useDidMount(() => {
            timerRef.current = window.setInterval(() => {
                setTime(String(new Date()));
            }, 1000);
        });

        useWillUnmount(() => {
            message.success("clear interval");
            window.clearInterval(timerRef.current);
        });

        return <div>{time}</div>;
    };
    return (
        <div>
            <Button
                onClick={() => {
                    setVisible(false);
                }}>
                click
            </Button>
            {visible ? <CountDown></CountDown> : <div>Unmount!</div>}
        </div>
    );
};

export default Demo;
```

#### API

```js
useWillUnmount((fn: () => void));
```

#### 参数

| 参数 | 说明                               | 类型     | 默认值 |
| ---- | ---------------------------------- | -------- | ------ |
| fn   | 在组件卸载及销毁之前直接调用的函数 | ()=>void | -      |

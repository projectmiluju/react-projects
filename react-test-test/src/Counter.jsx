// Counter.jsx
import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>현재 카운트: {count}</h1>
            <button onClick={() => setCount(count + 1)}>증가</button>
            <button onClick={() => setCount(count - 1)}>감소</button>
        </div>
    );
}

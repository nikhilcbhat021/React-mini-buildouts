import { useState, useEffect } from "react";

const CounterApp = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("couterapp mounted");
    }, [])

    return <div>
        <h1>Counter</h1>
        <p>Count: {count}</p>
        <div>
            <button onClick={() => setCount(c => c+1)}>Increment</button>
            <button onClick={() => setCount(c => c-1)}>Decrement</button>
        </div>
    </div>;
};

export default CounterApp;
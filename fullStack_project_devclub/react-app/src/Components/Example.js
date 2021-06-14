import React, { useState, useEffect } from 'react';

const Example = () => {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0); // 0 (the arg) is the initial state

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me - Example
            </button>
        </div>
    );
}

export default Example;
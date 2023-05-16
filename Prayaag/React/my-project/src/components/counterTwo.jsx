import React, { useState } from 'react';

export default function Counter() {

    const [ count, setCount ] = useState(0);

    const handleInc = () => {
        setCount(count + 1);
        return;
    }

    const getDisplay = () => {
        return (count == 0 ? <p>Counter is at Zero</p> : <p> Value : {count}</p>);
    }

    return (
        <div>
            <button onClick={handleInc}>Increment</button>
            <p>{getDisplay()}</p>
        </div>
    );

}
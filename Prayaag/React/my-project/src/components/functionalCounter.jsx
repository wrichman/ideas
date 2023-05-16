import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'

export default function Counter() {

    const [ counter, setCounter] = useState(0);

    const handleClick = (sign) => {
        if (sign === '+') {
            setCounter(counter + 1);
        } else if (sign === '-') {
            setCounter(counter - 1);
        } else {
            return;
        }
    }

    return (
        <>
            <button className = "btn m-2 btn-primary" onClick = { () => {handleClick('+')} }>+</button>
            <span className = "badge m-1 bg-secondary">{counter}</span>
            <button className = "btn m-2 btn-danger" onClick = { () => {handleClick('-')} }>-</button>
        </>

    );

}
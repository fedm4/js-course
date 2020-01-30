import React, { useState } from 'react';
import './TextCounter.scss'

const TextCounter = () => {
    const [counter, setCounter] = useState(140);
    const max = 140;
    const handleChange = event => {
        const chars = event.target.value.length
        setCounter(max - chars);
    };

    return (
        <div>
            <textarea onChange={handleChange}></textarea>
            <span id="counter">Cantidad de Caracteres: {counter}</span>
        </div>
    )
};

export default TextCounter;
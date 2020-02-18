import React, { useState, useContext } from 'react';
import './TextCounter.scss'
import ThemeContext from '../../ThemeContext';


const TextCounter = () => {
    const [counter, setCounter] = useState(140);
    const {theme, changeTheme} = useContext(ThemeContext);
    const max = 140;
    const handleChange = event => {
        const chars = event.target.value.length
        setCounter(max - chars);
    };

    return (
        <div className={theme}>
            <button onClick={changeTheme}>Change Color</button>
            <textarea onChange={handleChange}></textarea>
            <span id="counter">Cantidad de Caracteres: {counter}</span>
        </div>
    )
};

export default TextCounter;
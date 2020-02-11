import React from 'react';

import './Input.scss';

const handleOnSubmit = event => {
    event.preventDefault();
    console.log("ESTOY EVITANDO QUE SUBMITEE");
};
//e=>{
//    const el = document.querySelector("#text");
//    el.innerHTML = e.target.value;
//}
const Input = ({titleSetter}) => {
    return (
        <form onSubmit={handleOnSubmit} action="http://google.com">
        <input 
            onChange={e => titleSetter(e.target.value)}
            className="mi-input"
            type="text"
            placeholder="soy un input" />
            <button type="submit">submit</button>
            <span id="text"></span>
        </form>
    );
};

export default Input;
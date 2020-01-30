import React from 'react';
import './Button.scss';

const handleClick = event => {
    alert(event.target);
};

const Button = props => {
    const handleClickWithProps = event => {
        alert(props.mensaje);
    };

    return (
        <button onClick={handleClickWithProps}
            className="click-me-button">
            Click Me!
        </button>
    );
};

export default Button;
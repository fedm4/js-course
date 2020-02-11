import React, {useState} from 'react';

const useMultiply = (value = 2) =>{
    let multiplier = 2;
    const multiply = () => multiplier * value;
    const incrementMultiplier = () => multiplier = multiplier * multiplier;

    return [multiplier, multiply, incrementMultiplier];
};


export default useMultiply;
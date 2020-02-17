import React from 'react';
import {useParams} from 'react-router-dom';

const Nuevo = () => {
    const {id} = useParams();

    return (
        <h1>Mi parametro es: {id}</h1>
    );
};

export default Nuevo;
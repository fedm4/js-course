import React from 'react';
import './AlertBanner.scss';

const mensajes = {
    success: "Todo salio piola",
    error: "No che, no ando",
    warning: "Anduvo pero hasta ahi"
};

const AlertBanner = props => {
    
    return (
        <div className={`${props.tipoMensaje} alert-banner`}>
            {mensajes[props.tipoMensaje]}
        </div>
    )
}

export default AlertBanner

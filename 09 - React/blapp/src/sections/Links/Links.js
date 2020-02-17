import React from 'react';
import {Link} from 'react-router-dom';

import './Links.scss';

const Links = () => {
    return (
        <nav className="nav">
            <Link to="/">Text counter</Link>
            <Link to="/badge">Badge</Link>
            <Link to="/alert">Alert</Link>
            <Link to="/nuevo/1">Nuevo 1</Link>
            <Link to="/nuevo/HolaSoyJuancaDeNuevo">Nuevo 2</Link>
            <Link to="/nuevo/3">Nuevo 3</Link>
            <Link to="/nuevo/4">Nuevo 4</Link>
        </nav>
    );
}

export default Links;


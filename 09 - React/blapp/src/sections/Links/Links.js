import React from 'react';
import {Link} from 'react-router-dom';

import './Links.scss';

const Links = () => {
    return (
        <nav className="nav">
            <Link to="/">Text counter</Link>
            <Link to="/badge">Badge</Link>
            <Link to="/alert">Alert</Link>
        </nav>
    );
}

export default Links;


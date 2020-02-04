import React from 'react';

import './Badge.scss';

const Badge = (props) => {
    return (
        <div className='badge'>
            <span className="badge-ribbon">
                {props.children}
            </span>
        </div>
    );
};

export default Badge;
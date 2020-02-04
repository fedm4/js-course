import React from 'react';
import './Badge.scss';

export default class BadgeClass extends React.Component {
    render() {
        return (
            <div className='badge'>
                <span className="badge-ribbon">
                    {this.props.children}
                </span>
            </div>
        );
    }
}
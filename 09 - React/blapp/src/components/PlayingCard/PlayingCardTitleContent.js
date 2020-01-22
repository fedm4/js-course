import React from 'react';
import Spades from './Icons/ace-of-spades.svg';

import './PlayingCardTitleContent.css';

const PlayingCardTitleContent = props => {
    return (
        <div className="playing-card-title-content">
            <span className="playing-card-title-content-value">{props.cardNumber}</span>
            <h1 className="playing-card-title-content-title">{props.cardTitle}</h1>
            <div className="playing-card-title-content-image-container">
                <img className="playing-card-title-content-image" src={props.cardType} />
            </div>
        </div>
    );
};

export default PlayingCardTitleContent;

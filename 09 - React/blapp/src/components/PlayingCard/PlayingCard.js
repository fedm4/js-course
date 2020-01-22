import React from 'react';
import PlayingCardTitleContent from './PlayingCardTitleContent';
import Crown from './Icons/crown.svg';

import Spades from './Icons/ace-of-spades.svg';
import Hearts from './Icons/heart.svg';
import Diamond from './Icons/diamond.svg';
import Clover from './Icons/clover.svg';

import './PlayingCard.css';

const PlayingCard = props => {
    return (
        <section className="playing-card">
            <header className="playing-card-header">
                <PlayingCardTitleContent cardTitle={props.cardTitle} 
                                        cardNumber={props.cardNumber}
                                        cardType={props.cardType}></PlayingCardTitleContent>
            </header>
            <article className="playing-card-content">
                <img src={Crown} alt="Queen"></img>
            </article>
            <footer className="playing-card-footer">
                <PlayingCardTitleContent cardTitle={props.cardTitle} 
                                        cardNumber={props.cardNumber}
                                        cardType={props.cardType}></PlayingCardTitleContent>
            </footer>
        </section>
);
};

export default PlayingCard;
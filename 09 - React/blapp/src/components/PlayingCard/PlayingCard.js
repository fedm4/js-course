import React from 'react';
import PlayingCardTitleContent from './PlayingCardTitleContent';
import Crown from './Icons/crown.svg';

import Spade from './Icons/ace-of-spades.svg';
import Heart from './Icons/heart.svg';
import Diamond from './Icons/diamond.svg';
import Clover from './Icons/clover.svg';

import './PlayingCard.css';
const getCardImage = (cardType) =>{
    switch(cardType) {
        case 'Clover':
            return Clover;
        case 'Heart':
            return Heart;
        case 'Diamond':
            return Diamond;
        case 'Spade':
            return Spade;
        default:
            return null;
    }
};
const getCardColor = cardType => {
    if(cardType == "Clover" || cardType == "Spade") {
        return 'black';
    } else {
        return 'red';
    }
};
const PlayingCard = props => {
    const GetPlayingCardTitleContent = () => {
        return (
        <PlayingCardTitleContent 
            cardColor={getCardColor(props.cardType)}
            cardTitle={props.cardTitle} 
            cardNumber={props.cardNumber}
            cardType={getCardImage(props.cardType)}></PlayingCardTitleContent>);
    };

    return (
        <section className="playing-card">
            <header className="playing-card-header">
                <GetPlayingCardTitleContent></GetPlayingCardTitleContent>
            </header>
            <article className="playing-card-content">
                <img src={Crown} alt="Queen"></img>
            </article>
            <footer className="playing-card-footer">
                <GetPlayingCardTitleContent></GetPlayingCardTitleContent>
            </footer>
        </section>
);
};

export default PlayingCard;
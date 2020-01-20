import React from 'react';
import PlayingCardTitleContent from './PlayingCardTitleContent';
import Crown from './Icons/crown.svg';

import './PlayingCard.css';

const PlayingCard = () => {
    return (
        <section className="playing-card">
            <header className="playing-card-header">
                <PlayingCardTitleContent></PlayingCardTitleContent>
            </header>
            <article className="playing-card-content">
                <img src={Crown} alt="Queen"></img>
            </article>
            <footer className="playing-card-footer">
                <PlayingCardTitleContent></PlayingCardTitleContent>
            </footer>
        </section>
    );
};

export default PlayingCard;
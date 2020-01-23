import React from 'react';
import './App.css';
import PlayingCard from './components/PlayingCard/PlayingCard';

import Spades from './components/PlayingCard/Icons/ace-of-spades.svg';
import Hearts from './components/PlayingCard/Icons/heart.svg';
import Diamond from './components/PlayingCard/Icons/diamond.svg';
import Clover from './components/PlayingCard/Icons/clover.svg';

const cards = [
  {
    cardTitle: "Ace of Clover",
    cardNumber: "A",
    cardType: Clover
  },
  {
    cardTitle: "2 of Hearts",
    cardNumber: "2",
    cardType: Hearts
  },
  {
    cardTitle: "4 of Diamonds",
    cardNumber: "4",
    cardType: Diamond
  },
  {
    cardTitle: "Jack of Spades",
    cardNumber: "J",
    cardType: Spades

  }
];

const App = () => {

  return (
    <div style={{display: 'flex', justifyContent:'space-between', flexWrap: "wrap"}}>
      
      {cards.map(card => {
        return (<PlayingCard key={card.cardTitle}
                   cardTitle={card.cardTitle}
                   cardNumber={card.cardNumber}
                   cardType={card.cardType}></PlayingCard>);
      })}
    
    </div>
    );
}

export default App;

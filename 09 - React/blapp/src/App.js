import React from 'react';
import './App.css';
import PlayingCard from './components/PlayingCard/PlayingCard';

import Spades from './components/PlayingCard/Icons/ace-of-spades.svg';
import Hearts from './components/PlayingCard/Icons/heart.svg';
import Diamond from './components/PlayingCard/Icons/diamond.svg';
import Clover from './components/PlayingCard/Icons/clover.svg';

const App = () => {
  return (
    <div>
      <PlayingCard cardTitle="Ace of Clover"
                   cardNumber="A"
                   cardType={Clover}></PlayingCard>
      <PlayingCard cardTitle="2 of Hearts"
                  cardNumber="2"
                  cardType={Hearts}></PlayingCard>
      <PlayingCard cardTitle="4 of Diamonds"
                  cardNumber="4"
                  cardType={Diamond}></PlayingCard>
      <PlayingCard cardTitle="Jack of Spades"
                  cardNumber="J"
                  cardType={Spades}></PlayingCard>
    </div>
    );
}

export default App;

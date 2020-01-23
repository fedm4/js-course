import React from 'react';
import './App.css';
import PlayingCard from './components/PlayingCard/PlayingCard';

const cards = [
  {
    cardTitle: "Ace of Clover",
    cardNumber: "A",
    cardType: 'Clover'
  },
  {
    cardTitle: "2 of Hearts",
    cardNumber: "2",
    cardType: 'Heart'
  },
  {
    cardTitle: "4 of Diamonds",
    cardNumber: "4",
    cardType: 'Diamond'
  },
  {
    cardTitle: "Jack of Spades",
    cardNumber: "J",
    cardType: 'Spade'

  }
];

const App = () => {

  return (
    <div style={{display: 'flex', justifyContent:'space-between', flexWrap: "wrap"}}>
      {cards.map(card => {
        if(card.cardType === "Spade"){
        return (
          <PlayingCard key={card.cardTitle}
                   cardTitle={card.cardTitle}
                   cardNumber={card.cardNumber}
                   cardType={card.cardType}></PlayingCard>
          );
        }
      })}
    
    </div>
    );
}

export default App;

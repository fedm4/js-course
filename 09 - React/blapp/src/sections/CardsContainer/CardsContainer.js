import React from 'react';
import PlayingCard from '../../components/PlayingCard/PlayingCard';


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


const CardsContainer = props => {
    return (
        <div style={{padding: '30px', border: '1px solid black', margin: '25px',display: 'flex', justifyContent:'space-between', flexWrap: "wrap"}}>
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
};

export default CardsContainer;
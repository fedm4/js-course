import React from 'react';
import './App.css';
import CardsContainer from './sections/CardsContainer/CardsContainer';
import Badge from './components/Badge/Badge';
const App = () => {
  return (
    <div>
      <CardsContainer></CardsContainer>
      <Badge>
        <strong className="mi-strong-ribbon">Mi</strong> ribbon!
      </Badge>
      <Badge>
        Solo Badge
      </Badge>
    </div>  
    );
}

export default App;

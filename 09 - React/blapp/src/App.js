import React from 'react';
import './App.css';
import CardsContainer from './sections/CardsContainer/CardsContainer';
import Badge from './components/Badge/Badge';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import TextCounter from './components/TextCounter/TextCounter';
import BadgeClass from './components/Badge/BadgeClass';
import TextCounterClass from './components/TextCounter/TextCounterClass';
import ListaApi from './components/ListaApi/ListaApi';
const App = () => {
  return (
    <div>
      <ListaApi></ListaApi>
    </div>  
    );
}

export default App;

import React, {useState} from 'react';
import './App.css';
import Card from './components/Card/Card';
import CardsContainer from './sections/CardsContainer/CardsContainer';
import Badge from './components/Badge/Badge';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import TextCounter from './components/TextCounter/TextCounter';
import BadgeClass from './components/Badge/BadgeClass';
import TextCounterClass from './components/TextCounter/TextCounterClass';
import ListaApi from './components/ListaApi/ListaApi';
import ListaApiFuncional from './components/ListaApi/ListaApiFuncional';
import AlertBanner from './components/AlertBanner/AlertBanner';
import useMultiply from './components/useMultiply/useMultiply';





const App = () => {
  const [title, setTitle] = useState("");
  return (
    <div>
      <Input titleSetter={setTitle}></Input>
      <Card title={title}></Card>
    </div>  
    );
}

export default App;

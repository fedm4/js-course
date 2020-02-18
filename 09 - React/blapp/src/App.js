import React, {useState} from 'react';
import './App.css';
import Card from './components/Card/Card';
import cardImg from './components/Card/header-img.jpg';
import ThemeContext from './ThemeContext';
import TextCounter from './components/TextCounter/TextCounter';

const App = () => {
  const [theme, setTheme] = useState("light");
  const changeTheme = () => setTheme(theme === "light" ? "dark" : "light");
  return (
    <ThemeContext.Provider value={
      {
        theme,
        changeTheme
      }
    }>
      <div className={`App ${theme}`}>
        <Card
          theme={theme}
          title="Mi Card"
          headerImgUrl={cardImg}
        />
        <TextCounter></TextCounter>
      </div> 
    </ThemeContext.Provider>
    );
}

export default App;

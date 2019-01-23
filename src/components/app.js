import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import GameDeck from './gameDeck';
import './style.css';


function App(){
  return(
      <div className='App'>
           <div>
             <Header />
           </div>

           <div>
              <GameDeck />
           </div>
       </div>
  );
}

export default App;

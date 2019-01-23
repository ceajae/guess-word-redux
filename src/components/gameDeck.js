import React,{Component} from 'react';
import {connect} from 'react-redux';
import GameState from '../constants/gameState';
import './style.css';




export default function GameDeck(props){
  return(
     <div>
        <GameState />

     </div>
  );
}

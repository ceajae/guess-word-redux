import React from 'react';

export default function newGameBoard(state, index, inputValue){
       let gameBoardStateCopy = {...state.gameBoard};
       gameBoardStateCopy[index].value= inputValue;
       return gameBoardStateCopy;
}

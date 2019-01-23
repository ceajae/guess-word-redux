
export function changeGameWord(gameWord){
    return{
      type: 'CHANGE_GAMEWORD',
      payload:{
        gameWord
      }
    }

}

export function changeGameState(gameState){
  return{
    type: 'CHANGE_GAMESTATE',
    payload:{
      gameState
    }
  }
}

export function updateGameBoard(index, inputValue){

  return{
    type: 'UPDATE_GAMEBOARD_VALUE',
    payload:{
       index,
       inputValue
    }
  }
}

export function updateLives(){
    return{
      type: 'UPDATE_LIVES',
    }

}

export function toggleGameHeader(gameHeader){
  return{
    type: 'TOGGLE_GAME_HEADER',
    payload:{
      gameHeader
    }
  }
}

export function toggleGameEnd(value){
  return{
    type:'TOGGLE_GAME_END',
    payload:{
      value
    }
  }
}

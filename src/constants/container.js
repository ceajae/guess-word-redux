import {connect } from 'react-redux';
import {changeGameWord} from '../actions/gameStateActions';
import {changeGameState} from '../actions/gameStateActions';
import {updateGameBoard} from '../actions/gameStateActions';
import {updateLives} from '../actions/gameStateActions';
import {toggleGameHeader} from '../actions/gameStateActions';
import {toggleGameEnd} from '../actions/gameStateActions';

function mapStateToProps(state, ownProps){
  return{
        gameHeader: state.gameReducer.gameHeader,
        gameEnd:state.gameReducer.gameEnd,
        gameWord:state.gameReducer.gameWord,
        gameBoard:state.gameReducer.gameBoard,
        lives:state.gameReducer.lives
  }
}


function mapDispatchToProps(dispatch){
  return{
      changeGameWord: (gameWord) =>dispatch(changeGameWord(gameWord)),
      changeGameState: (gameState) =>dispatch(changeGameState(gameState)),
      toggleGameHeader: (gameHeader)=>dispatch(toggleGameHeader(gameHeader)),
      toggleGameEnd: (value)=> dispatch(toggleGameEnd(value)),
      updateLives: ()=>dispatch(updateLives()),
      updateGameBoard: (index, inputValue) =>dispatch(updateGameBoard(index, inputValue))

                //  console.log('hey i a here!!!');,

  }
}

export default connect(mapStateToProps, mapDispatchToProps);

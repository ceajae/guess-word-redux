import newGameBoard from '../constants/newGameBoard';
var initialState = {
      lives: "",
      gameWord:'',
      gameBoard:[],
      gameStartButton:'',
      gameEnd: false,
      gameHeader:''
}

function gameReducer(state = initialState, action){
    switch(action.type){
      case 'UPDATE_INPUT':
             return{
               ...state

             }
             break;

      case 'CHANGE_GAMEWORD':
             return{
               ...state,
               gameWord: action.payload.gameWord,
             }
             break;

      case 'CHANGE_GAMESTATE':
            return{
              ...state,
              gameBoard:action.payload.gameState,
              lives:7,
            }
            break;

      case 'UPDATE_GAMEBOARD_VALUE':
            let index = action.payload.index;
            let inputValue = action.payload.inputValue;
            console.log("chichi")
            return{
              ...state,
              gameBoard: newGameBoard(state, index, inputValue)
            }
            break;

        case 'UPDATE_LIVES':

            return{
              ...state,
              lives:state.lives - 1
            }
            break;

         case 'TOGGLE_GAME_HEADER':
             return{
               ...state,
               gameHeader: action.payload.gameHeader,
              //  gameEnd:true
             }

        case 'TOGGLE_GAME_END':
            return{
              ...state,
              gameEnd: action.payload.value,
             //  gameEnd:true
            }

      default:
        return state;
    }

    return state;
}

export default gameReducer;

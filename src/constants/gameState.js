import React,{Component} from 'react';
import {connect} from 'react-redux';
import Input from '../components/input';
import container from './container';
import './style.css';

const words=['money',
             'car',
             'house',
             'bread',
             'bottle',
             'lorry',
             'vendor',
             'rat'
           ];
// const words = [
//                 { 
//                   name:'money',
//                   description: 'medium of exchange'
//                 },
//                 {
//                   name:'bread',
//                   description:'energy giving food'
//                 },
//                 {
//                   name: 'rat',
//                   description: 'pest'
//                 }
// ]


class GameState extends Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this._handleNewGameState();

  }

   render(){
        const {gameBoard, lives} = this.props;
        console.log(lives);
        let wordInput = this.props.gameWord.split('').map( (item,index) => (
                <Input key={`input_${index}`}
                        value={gameBoard[index].value}
                        onChange={this.getInputValue.bind(this, index)}/>
                ));

        console.log("hello")
        if (lives === 0){
              console.log("false")
              this.props.toggleGameHeader('Game Over!!');
              this.props.toggleGameEnd(true);
        }

        else{
              let gameBoardLength = Object.keys(gameBoard).length;
    
              let counter =0;
              for(let i=0; i< gameBoardLength; i++){
                  if(gameBoard[i].value !== ''){
                      counter+=1;
                      if(counter === gameBoardLength ){
                        this.props.toggleGameEnd(true);
                        this.props.toggleGameHeader('Excellent!');

                      }
                      else{
                        console.log("wrong!!")
                      }
                  }
              }
      
        }
        return(
            <div className='gameDeck'>
                    <div className='gameDeckText'>
                          <p>{this.props.gameHeader}</p>
                    </div>
                    {this.props.gameEnd ? <div className='gameStartBlock'>
                                              <button className='gameStart'
                                                      type='button'
                                                      onClick={this._handleNewGameState.bind(this)}>
                                                      Restart
                                              </button>
                                            </div> :
                                            null}

                    <div className='inputBlockTray'>{wordInput}</div>

                    <button type='button'
                            onClick={this._handleHint.bind(this)}
                            className='hint'>HINT!
                    </button>
            </div>
        );
   }

   getInputValue(index, event){
        let inputValue= event.target.value;
        let inputValueArray;

        if(inputValue.length === 1){
           if(this.props.gameBoard[index].letter === inputValue){
              this.props.updateGameBoard(index, inputValue);
           }else{
               this.props.updateLives();

           }

        }else if (inputValue.length >1) {
          inputValueArray = inputValue.split('');
             if (this.props.gameBoard[index].letter === inputValueArray[0]){
                this.props.updateGameBoard(index, inputValueArray[0]);
             }
        }else{
               this.props.updateGameBoard(index, inputValue);

             }

    }

  

   _handleNewGameState(){
       let randWordIndex = Math.floor(Math.random()* words.length);
       let randWord = words[randWordIndex];
       this.props.changeGameWord(randWord);

       let newGameState =[];
       randWord.split('').map((item, index) => {
          return newGameState.push({letter:item, value:''});
       });
       this.props.changeGameState(newGameState);
       console.log(newGameState);
       this.props.toggleGameHeader('Can you guess the word?');
       this.props.toggleGameEnd(false);
       console.log(newGameState);
     }

    _handleHint(){
        let livesCopy = this.props.lives;
        let gameBoardCopy = this.props.gameBoard;
        const gameBoardCopyArray = Object.keys(gameBoardCopy).map(i => gameBoardCopy[i]);
        let hintValueIndex = Math.floor(Math.random()* gameBoardCopyArray.length );
        let hintValue = gameBoardCopy[hintValueIndex].letter;

        if(gameBoardCopy[hintValueIndex].value === ''){
          this.props.updateGameBoard(hintValueIndex, hintValue);
          this.props.updateLives(); 
        }else{
           this._handleHint();
        }
      
    }

}


export default container(GameState);

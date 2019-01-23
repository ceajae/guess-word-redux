import React from 'react';
import {connect} from 'react-redux';
import './style.css';


//
// export default function Inputs(props){
//   console.log(props.gameBoard)
//    return(
//      <div className='inputBlockTray'>
//       {wordInput}
//       </div>
//    );
// }

export default function Input(props){
  return(
    <div className='inputBlock'>
        <input  type='text'
                value={props.value}
                className='letterInput'
                onChange={props.onChange} />
    </div>
  )
}

import React from 'react';
import HealthBar from './healthBar';
import mapContainer from '../constants/container';
import {connect} from 'react-redux';



function Header(props){
  return(
    <div className='header'>
       <HealthBar lives={props.lives}/>
    </div>
  );
}


export default mapContainer(Header);
//
// function mapStateToProps(state, ownProps){
//   return{
//     lives:state.gameReducer.lives
//   }
// }
//
// function mapDispatchToProps(dispatch){
//   return{
//
//   }
// }
//
//
//
// export default connect(mapStateToProps, mapDispatchToProps)(Header);

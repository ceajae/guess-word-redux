import React from 'react';
import {connect} from 'react-redux';
import './style.css';




export default function HealthBar(props){
       let liveBar=[];
       for(let i=0; i<props.lives; i++){

           liveBar.push(<div className='liveBar' key={i}></div>)
       }

       return(
            <div className='barArray'>{liveBar}</div>
       );
}

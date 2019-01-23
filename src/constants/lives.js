import React from 'react';

export default function lives(state){
  console.log(state.lives)
       let livees = {...state.lives};
       let uu = livees - 1;
      //  console.log(uu);
       return uu;
}

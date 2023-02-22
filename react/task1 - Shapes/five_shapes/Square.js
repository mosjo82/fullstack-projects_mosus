import React from 'react';
import Cube from './Cube';

var res=0;
function Square(props){
    var ar = props.a;
    res = ar*ar;
    return (
      <>
      <div>Area of Square: {res}</div>
      <Cube ca={res}/>
     </>);

}

export default Square; 
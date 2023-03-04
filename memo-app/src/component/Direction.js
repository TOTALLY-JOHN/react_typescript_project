import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'UP':
      return [state[0], state[1]-10];
    case 'DOWN':
      return [state[0], state[1]+10];
    case 'RIGHT':
      return [state[0]+10, state[1]];
    case 'LEFT':
      return [state[0]-10, state[1]];
    default:
      return [state[0], state[1]];
  }
}

function Direction() {
  const [coordinate, dispatch] = useReducer(reducer, [70, 100]);

  return (
    <div>
      <div style={{textAlign:'left', padding: '10px'}}>
      <button onClick={()=>dispatch({type:'LEFT'})}>LEFT</button>
      <button onClick={()=>dispatch({type:'UP'})}>UP</button>
      <button onClick={()=>dispatch({type:'DOWN'})}>DOWN</button>
      <button onClick={()=>dispatch({type:'RIGHT'})}>RIGHT</button>
      </div>
      <div style={{width:'100px', height:'100px', backgroundColor:'blue', position:'absolute',left:coordinate[0]+'px',top:coordinate[1]+'px'}}>
      </div>
    </div>
  );
}

export default Direction;


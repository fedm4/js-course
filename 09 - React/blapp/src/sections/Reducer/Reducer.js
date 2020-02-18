import React, {useState, useReducer} from 'react';

const reducer = (state, action) => {
  switch(action.type) {
    case "changeColor":
      return {...state, color: action.payload};
    case "increment":
      return {...state, count: state.count + 1};
    case "decrement":
        return {...state, count: state.count - 1};
    default:
      return state;
  }
};

const Reducer = () => {
  const [color, setColor] = useState("black");
  const [state, dispatch] = useReducer(reducer, {count: 0, color});
  const changeColor = () => {
    dispatch({type: "changeColor", payload: color})
    setColor("");
  };
  const incrementClick = () => dispatch({type: "increment"});
  const decrementClick = () => dispatch({type: "decrement"});

  return (
    <div>
      <div>Color: {state.color}</div>
      <input type="text" value={color} onChange={e=>setColor(e.target.value)} />
      <button onClick={changeColor}>Cambiar Color</button>
      <div>Count: {state.count}</div>
      <button onClick={incrementClick}>Increment</button>
      <button onClick={decrementClick}>Decrement</button>
    </div> 
    );
}

export default Reducer;

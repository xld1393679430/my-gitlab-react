import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';

function App() {
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  const handleClick = ((type) => {
    dispatch({type})
  })

  return (
    <div className="App">
      hello
      {state.count}
      <button onClick={() => handleClick('add')}>+</button>
      <button onClick={() => handleClick('minus')}>-</button>
    </div>
  );
}

export default App;
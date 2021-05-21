import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createAction } from "redux-actions";
import { CHANGE_USER } from './store/reducers/user';
import './App.css';
import TestPureComponent from './pages/test/TestPureComponent';
import TestCloneElement from './pages/test/TestCloneElement';
import TestCreateFactor from './pages/test/TestCreateFactor';
import TestChildren from './pages/test/TestChildren';

function App() {
  const { count, user } = useSelector(state => state)
  const dispatch = useDispatch()
  const handleClick = ((type) => {
    dispatch({ type })
  })

  const handleChangeUser = (() => {
    const changeUser = createAction(CHANGE_USER)
    dispatch(changeUser({
      name: '张三',
      age: 10,
      sex: '男'
    }))
  })

  const { userInfo } = user
  return (
    <div className="App">
      <h4>hello</h4>
      <div>
        <span>count: {count.num}</span>
        <button onClick={() => handleClick('add')}>+</button>
        <button onClick={() => handleClick('minus')}>-</button>
      </div>

      <div>
        <p>user.name: {userInfo.name}</p>
        <p>user.age: {userInfo.age}</p>
        <p>user.sex: {userInfo.sex}</p>
        <button onClick={handleChangeUser}>ChangeUser</button>
      </div>

      <div id='TestCloneElement'>
        {/* <TestPureComponent /> */}
        {/* <TestCloneElement /> */}
        {/* <TestCreateFactor /> */}
        {/* <TestChildren /> */}
      </div>
    </div>
  );
}

export default App;

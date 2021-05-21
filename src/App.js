import React from 'react';
import './App.css';
import { TestRedux } from './pages/redux';
import {
  TestPureComponent,
  TestCloneElement,
  TestCreateFactor,
  TestChildren,
} from './pages/test';
import {
  TestUseReducer,
  TestCreateContext,
} from './pages/hooks';

function App() {

  return (
    <div className="App">
      <h4>hello</h4>
      
      <div id="redux">
        <TestRedux />
      </div>

      <div id='test'>
        {/* <TestPureComponent /> */}
        {/* <TestCloneElement /> */}
        {/* <TestCreateFactor /> */}
        {/* <TestChildren /> */}
      </div>

      <div id="hooks">
        {/* <TestUseReducer /> */}
        <TestCreateContext />
      </div>
    </div>
  );
}

export default App;

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
  TestUseImperativeHandle,
  TestUseDebugValue,
  TestUnstableBatchedUpdates,
  TestUseDeferredValue,
} from './pages/hooks';

import {
  TimeSlice,
} from './pages/largeData';

import {
  Index01,
} from './pages/css';

import {
  Question01,
} from './pages/questions';

function App() {

  return (
    <div className="App">      
      <div id="redux">
        {/* <TestRedux /> */}
      </div>

      <div id='test'>
        {/* <TestPureComponent /> */}
        {/* <TestCloneElement /> */}
        {/* <TestCreateFactor /> */}
        {/* <TestChildren /> */}
      </div>

      <div id="hooks">
        {/* <TestUseReducer /> */}
        {/* <TestCreateContext /> */}
        {/* <TestUseImperativeHandle /> */}
        {/* <TestUseDebugValue /> */}
        {/* <TestUnstableBatchedUpdates /> */}
        <TestUseDeferredValue />
      </div>

      <div id="largeData">
        {/* <TimeSlice /> */}
      </div>

      <div id="css">
        {/* <Index01 /> */}
      </div>

      <div id="Question">
        {/* <Question01 /> */}
      </div>
    </div>
  );
}

export default App;

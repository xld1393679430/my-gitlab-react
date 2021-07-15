/** @format */

import React from 'react'
import './App.css'
import { TestRedux } from './pages/redux'
import { TestPureComponent, TestCloneElement, TestCreateFactor, TestChildren } from './pages/test'
import {
  TestUseReducer,
  TestCreateContext,
  TestUseImperativeHandle,
  TestUseDebugValue,
  TestUnstableBatchedUpdates,
  TestUseDeferredValue,
  TestUseMemo,
} from './pages/hooks'

import { TimeSlice } from './pages/largeData'

import { Index01 } from './pages/css'

import { Question01, Question03, Question04, Question05, Question06 } from './pages/questions'

import { JDemo01, JDemo02, JDemo03, JDemo04, JDemo05, JDemo06, JDemo07, JDemo08 } from './pages/juejin'

import { ExportDemo, name } from './pages/juejin/exportDemo';

function App() {
  return (
    <div className="App">
      <div id="redux">{/* <TestRedux /> */}</div>

      <div id="test">
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
        {/* <TestUseDeferredValue /> */}
        {/* <TestUseMemo /> */}
      </div>

      <div id="largeData">{/* <TimeSlice /> */}</div>

      <div id="css">{/* <Index01 /> */}</div>

      <div id="Question">
        {/* <Question01 /> */}
        {/* <Question03 /> */}
        {/* <Question04 /> */}
        {/* <Question05 /> */}
        {/* <Question06 /> */}
      </div>

      <div id="Juejin">
        {/* <JDemo01 /> */}
        {/* <JDemo02 /> */}
        {/* <JDemo03 /> */}
        {/* <JDemo04 />  */}
        {/* <JDemo05 /> */}
        {/* <JDemo06 /> */}
        {/* <JDemo07 /> */}
        <JDemo08 />
      </div>

      <div id="ExportDemo">
        {/* <span>name: {name}</span>
        <ExportDemo /> */}
      </div>
    </div>
  )
}

export default App

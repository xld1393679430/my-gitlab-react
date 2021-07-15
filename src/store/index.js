/** @format */

import {combineReducers, createStore, applyMiddleware, compose} from 'redux'
import logger from 'redux-logger'
import {count, user} from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const reducer = combineReducers({
    count,
    user,
})

let middleware = []
// logger记得放在最后面
middleware.push(logger)

const store = createStore(reducer, composeEnhancers(applyMiddleware(...middleware)))

export {store}

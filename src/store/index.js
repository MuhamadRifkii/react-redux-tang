/* eslint-disable no-unused-vars */
import { createStore, applyMiddleware, compose } from 'redux'
import { thunk } from 'redux-thunk'
import reducer from './reducers'

const store = (initialState = {}) => createStore(reducer, compose(applyMiddleware(thunk)))
export default store
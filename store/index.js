import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import cart from './cart'

const reducer = combineReducers({
  cart
})

const store = configureStore({
    reducer,
})

export default store;

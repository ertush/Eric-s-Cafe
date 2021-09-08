import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import cart from './cart'
import subTotal from './subTotal'
import quantity from './quantity'
import price from './price'


const reducer = combineReducers({
  cart,
  subTotal,
  quantity,
  price
})

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})

export default store;

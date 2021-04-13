import { createStore, combineReducers, applyMiddleware } from 'redux'
import cartReducer from './reducers/cart'
import productsReducer from './reducers/products'
import searchReducer from './reducers/search'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  search: searchReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store

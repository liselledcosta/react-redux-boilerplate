
import { createStore, applyMiddleware } from 'redux'; 
import thunk from 'redux-thunk'; 
import RootReducer from '../reducers/RootReducer'; 

export default function configureStore(preloadedState) {
  return createStore(
    RootReducer, 
    preloadedState, 
    applyMiddleware(
      thunk
    )
  )
}
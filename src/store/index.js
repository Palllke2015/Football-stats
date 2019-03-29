import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducers'
import thunk from 'redux-thunk'
import apiMiddleware from "../middleware";

const store = createStore(
  reducer,
  applyMiddleware(
    thunk,
    apiMiddleware));
//dev only!!!
window.store = store;

export default store;

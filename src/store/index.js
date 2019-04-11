import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducers'
import thunk from 'redux-thunk'
import apiMiddleware from "../middleware";
import table from "../middleware/table";
import matchList from "../middleware/matchList";
import modal from "../middleware/modal";

const store = createStore(
  reducer,
  applyMiddleware(
    thunk,
    apiMiddleware,
    table,
    matchList,
    modal));
//dev only!!!
window.store = store;

export default store;

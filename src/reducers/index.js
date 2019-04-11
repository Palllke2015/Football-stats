import { combineReducers } from 'redux'
import league from './league'
import table from './table'
import matchList from "./matchList";
import modal from "./modal";

export default combineReducers({
  league,
  table,
  matchList,
  modal
})

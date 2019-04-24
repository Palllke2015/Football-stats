import { combineReducers } from 'redux'
import league from './league'
import table from './table'
import matchList from './matchList';
import modal from './modal';
import auth from './auth';
import registration from './registration'
import apiVerified from './api-verified'

export default combineReducers({
  league,
  table,
  matchList,
  modal,
  auth,
  registration,
  apiVerified
})

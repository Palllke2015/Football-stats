import { combineReducers } from 'redux';
import league from './league';
import table from './table';
import modal from './modal';
import auth from './auth';
import registration from './registration';
import apiVerified from './api-verified';

export default combineReducers({
  apiVerified,
  league,
  table,
  modal,
  auth,
  registration
});

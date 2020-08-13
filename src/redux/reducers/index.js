import {combineReducers} from 'redux';
import auth from './auth';
import products from './products';
/*
  import <reducer_name> from '<source>';
*/

export default combineReducers({auth, products});

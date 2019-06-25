import { combineReducers } from 'redux';
import category from './category';
import item from './item';

export default combineReducers({
  category,
  item
});
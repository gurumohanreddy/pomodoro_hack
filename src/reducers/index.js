import { combineReducers } from 'redux';
import ListReducers from './reducer_lists'; 

const rootReducer = combineReducers({
  lists: ListReducers
});

export default rootReducer;

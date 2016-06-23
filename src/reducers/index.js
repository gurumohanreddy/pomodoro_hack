import { combineReducers } from 'redux';
import ListReducers from './reducer_lists';
import ActiveList from './reducer_active_list';

const rootReducer = combineReducers({
  lists: ListReducers,
  activeList:ActiveList
});

export default rootReducer;

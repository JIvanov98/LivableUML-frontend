import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';

function createRootReducer(history: History) {
    return combineReducers({});
}
  
export interface RootState {}

export default createRootReducer;
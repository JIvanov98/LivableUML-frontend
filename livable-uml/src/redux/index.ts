import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';

function createRootReducer(history: History) {
    return combineReducers({
        router: connectRouter(history)
    });
}
  
export interface RootState {}

export default createRootReducer;
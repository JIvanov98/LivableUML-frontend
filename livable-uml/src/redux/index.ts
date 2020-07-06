import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { editorReducer } from '../pages/editor/reducer';

function createRootReducer(history: History) {
    return combineReducers({
        editor: editorReducer,
        router: connectRouter(history)
    });
}
  
export interface RootState {}

export default createRootReducer;

import { combineReducers } from 'redux';
import { connectRouter, RouterState, LocationChangeAction } from 'connected-react-router';
import { History } from 'history';
import { editorReducer } from '../pages/editor/reducer';
import { EditorData } from '../pages/editor/types';
import { Reducer } from 'react';

type S = {

};

export type StoreType = {
    editor: EditorData,
    router: Reducer<RouterState<S>, LocationChangeAction<S>>
};

function createRootReducer(history: History) {
    return combineReducers({
        editor: editorReducer,
        router: connectRouter(history)
    });
}
  
export interface RootState {}

export default createRootReducer;

import { combineReducers } from 'redux';
import { connectRouter, RouterState, LocationChangeAction } from 'connected-react-router';
import { History } from 'history';
import { ElementReducer } from '../pages/editor/ElementReducer';
import { EditorData } from '../pages/editor/EditorTypes';
import { Reducer } from 'react';
import { UserTypesReducer } from '../pages/editor/element/UserTypesReducer';

type S = {

};

export type StoreType = {
    editor: EditorData,
    userTypes: Set<string>,
    router: Reducer<RouterState<S>, LocationChangeAction<S>>
};

function createRootReducer(history: History) {
    return combineReducers({
        userTypes: UserTypesReducer,
        editor: ElementReducer,
        router: connectRouter(history)
    });
}
  
export interface RootState {}

export default createRootReducer;

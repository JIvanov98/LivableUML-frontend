export interface EditorData {
    elements: {[id: string]: ElementData};
}

export interface ElementData {
    id: string; 
    x: number;
    y: number;
}

export const ADD_ELEMENT = 'ADD_ELEMENT';
export const DELETE_ELEMENT = 'DELETE_ELEMENT';
export const UPDATE_POSITION = 'UPDATE_POSITION';

interface AddAction {
    type: typeof ADD_ELEMENT;
    payload: ElementData;
}

interface UpdatePositionAction {
    type: typeof UPDATE_POSITION;
    id: string;
    newX: number;
    newY: number;
}

export type UserActionTypes =
| AddAction
| UpdatePositionAction;

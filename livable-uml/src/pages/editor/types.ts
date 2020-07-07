export interface EditorData {
    elements: Element[];
}

export interface Element {
    x: number;
    y: number;
}

export const ADD_ELEMENT = 'ADD_ELEMENT';
export const DELETE_ELEMENT = 'DELETE_ELEMENT';

interface AddAction {
    type: typeof ADD_ELEMENT;
    payload: Element;
}
  
export type UserActionTypes =
| AddAction;

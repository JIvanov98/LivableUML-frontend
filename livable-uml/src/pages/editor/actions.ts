import { ADD_ELEMENT, ElementData, UPDATE_POSITION } from './types';
import { store } from '../../redux/store';


export function addElement(element: ElementData) {
    store.dispatch({
        type: ADD_ELEMENT,
        payload: element
    });
}

export function updatePosition(id: number, x: number, y: number) {
    store.dispatch({
        type: UPDATE_POSITION,
        id: id,
        newX: x,
        newY: y
    });
}

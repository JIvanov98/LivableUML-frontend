import { ElementData } from './EditorTypes';
import { ADD_ELEMENT, UPDATE_POSITION } from './ReducerTypes'
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

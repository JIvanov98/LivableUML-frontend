import { ADD_ELEMENT, Element } from './types';
import { store } from '../../redux/store';


export function addElement(element: Element) {
    store.dispatch({
        type: ADD_ELEMENT,
        payload: element
    });
}

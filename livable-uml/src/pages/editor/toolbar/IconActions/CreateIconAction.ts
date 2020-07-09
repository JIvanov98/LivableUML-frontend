import { addElement } from '../actions';
import { ElementData } from '../types';

let counter = 0;

export default function createIconAction() {
    addElement({id: counter, x: 0, y: 0} as ElementData);
    counter += 1;
}

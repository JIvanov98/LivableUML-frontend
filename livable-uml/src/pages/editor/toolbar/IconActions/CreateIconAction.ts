import { addElement } from '../../actions';
import { Element } from '../../types';

export default function createIconAction() {
    addElement({x: 0, y: 0} as Element);
}

import { addElement } from '../../actions';
import { ElementData } from '../../EditorTypes';

let counter = 0;

export default function createIconAction() {
  addElement(
    {
      id: counter,
      name: `Class${counter}`,
      x: 0,
      y: 0,
      attributes: []
    } as ElementData
  );
  counter += 1;
}

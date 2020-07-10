import { EditorData } from './EditorTypes';
import { UserActionTypes, ADD_ELEMENT, UPDATE_POSITION } from './ReducerTypes'

const initialState: EditorData = {
  elements: []
};

export function ElementReducer(
  state = initialState,
  action: UserActionTypes
): EditorData {
  switch (action.type) {
    case ADD_ELEMENT:
      return {elements: [...state.elements, action.payload]};
    case UPDATE_POSITION:
      return {elements: state.elements.map(function(e){ 
        if (e.id === action.id) {
          return {
            id: e.id,
            name: e.name, 
            x: action.newX, 
            y: action.newY,
            attributes: e.attributes
          };
        } else {
          return e;
        }
      })};
    default:
      return state;
  }
}

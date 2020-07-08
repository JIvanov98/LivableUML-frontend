import { EditorData, UserActionTypes, ADD_ELEMENT, UPDATE_POSITION, ElementData } from './types';


const initialState: EditorData = {
  elements: []
};

export function editorReducer(
  state = initialState,
  action: UserActionTypes
): EditorData {
  switch (action.type) {
    case ADD_ELEMENT:
      return {elements: [...state.elements, action.payload]};
    case UPDATE_POSITION:
      return {elements: state.elements.map(function(e){ 
        if (e.id == action.id) {
          return {id: e.id, x: action.newX, y: action.newY};
        } else {
          return e;
        }
      })};
    default:
      return state;
  }
}

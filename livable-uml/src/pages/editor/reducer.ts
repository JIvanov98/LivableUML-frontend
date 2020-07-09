import { EditorData, UserActionTypes, ADD_ELEMENT, UPDATE_POSITION } from './types';

const initialState: EditorData = {
  elements: {}
};

export function editorReducer(
  state = initialState,
  action: UserActionTypes
): EditorData {
  switch (action.type) {
    case ADD_ELEMENT:
      var newState: EditorData = {elements: {}};
      for (const [key, value] of Object.entries(state.elements)) {
        newState.elements[key] = value;
      }
      newState.elements[action.payload.id] = action.payload;
      return newState;

    case UPDATE_POSITION:
      var newState: EditorData = {elements: {}};
      for (const [key, value] of Object.entries(state.elements)) {
        if (key === action.id) {
          newState.elements[key] = {id: key, x: action.newX, y: action.newY};
        }
        else {
          newState.elements[key] = value;
        }
      }
      return newState;

    default:
      return state;
  }
}

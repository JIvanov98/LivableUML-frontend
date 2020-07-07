import { EditorData, UserActionTypes, ADD_ELEMENT } from './types';


const initialState: EditorData = {
  elements: []
};

export function editorReducer(
  state = initialState,
  action: UserActionTypes
): EditorData {
  switch (action.type) {
    case ADD_ELEMENT:
      state.elements.push(action.payload);
      return state;
    default:
      return state;
  }
}

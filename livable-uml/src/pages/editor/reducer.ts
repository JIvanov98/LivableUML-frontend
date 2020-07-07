import { EditorData, UserActionTypes, ADD_ELEMENT } from './types';


const initialState: EditorData = {
  elements: []
};

export function editorReducer(
  state = initialState,
  action: UserActionTypes
): EditorData {
  console.log(state.elements);
  switch (action.type) {
    case ADD_ELEMENT:
      return {elements: [...state.elements, action.payload]};
    default:
      return state;
  }
}

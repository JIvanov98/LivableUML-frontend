import { ADD_NAME, DELETE_NAME, UPDATE_NAME, NameActions } from '../ReducerTypes'


const initialState: Set<string> = new Set();

export function UserTypesReducer(
  state = initialState,
  action: NameActions
): Set<string> {
  switch (action.type) {
    case ADD_NAME:
      if (!state.has(action.name)) {
        var newState = new Set(state);
        return newState.add(action.name);
      } else {
        // error?
        return state;
      }

    // TODO: delete_name is unnecessary as delete_element will remove it
    case DELETE_NAME:
      var newState = new Set(state);
      newState.delete(action.name);
      return newState;
    case UPDATE_NAME:
      var newState = new Set(state);
      newState.delete(action.oldName);
      return newState.add(action.newName);
    default:
      return state;
  }
}

import {
  SET_TODO,
  SET_TODO_SHOW_HIDE,
  TodoActionTypes,
  TodoState,
} from "./types";

export const initialState: TodoState = {
  todo: undefined,
  isTodoVisible: false,
};

export function TodoReducer(
  state = initialState,
  action: TodoActionTypes
): TodoState {
  switch (action.type) {
    case SET_TODO:
      return {
        ...state,
        todo: action.todo,
      };
    case SET_TODO_SHOW_HIDE:
      return {
        ...state,
        isTodoVisible: action.isTodoVisible,
      };
    default:
      return state;
  }
}

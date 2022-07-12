import * as Model from "../../data/Model";
export const SET_TODO = "SET_TODO";
export const SET_TODO_SHOW_HIDE = "SET_TODO_SHOW_HIDE";

export interface TodoState {
  todo: Model.Todo | undefined;
  isTodoVisible: boolean;
}

export interface TodoSetAction {
  type: typeof SET_TODO;
  todo: Model.Todo | undefined;
}

export interface TodoShowHideAction {
  type: typeof SET_TODO_SHOW_HIDE;
  isTodoVisible: boolean;
}

export type TodoActionTypes = TodoSetAction | TodoShowHideAction;

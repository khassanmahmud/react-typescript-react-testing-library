import { SET_TODO, SET_TODO_SHOW_HIDE, TodoActionTypes } from "./types";
import * as Model from "../../data/Model";

export const TodoSetAction = (data: Model.Todo): TodoActionTypes => {
  return {
    type: SET_TODO,
    todo: data,
  };
};

export const TodoShowHideAction = (data: boolean): TodoActionTypes => {
  return {
    type: SET_TODO_SHOW_HIDE,
    isTodoVisible: data,
  };
};

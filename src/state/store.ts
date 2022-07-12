import { combineReducers, legacy_createStore as createStore } from "redux";
import { TodoReducer } from "./todo/TodoReducer";

const store = combineReducers({
  Todo: TodoReducer,
});

export type RootState = ReturnType<typeof store>;
export default createStore(store);

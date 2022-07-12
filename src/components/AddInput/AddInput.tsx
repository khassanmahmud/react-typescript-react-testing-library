import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TodoSetAction, TodoShowHideAction } from "../../state/todo/TodoAction";
import "./AddInput.css";
import * as Model from "../../data/Model";
import { v4 } from "uuid";

type AddInputProps = {
  todos: Model.Todo[];
  setTodos: (todos: Model.Todo[]) => void;
};

const AddInput: React.FC<AddInputProps> = (props: AddInputProps) => {
  //const dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    if (!todo) return;
    let updatedTodos = [
      ...props.todos,
      {
        id: v4(),
        task: todo,
        completed: false,
      },
    ];
    props.setTodos(updatedTodos);
    setTodo("");
    //dispatch(TodoShowHideAction(true));
    /* dispatch(
      TodoSetAction({
        id: v4(),
        task: todo,
        completed: false,
      })
    ); */
  };

  return (
    <div className="input-container">
      <input
        className="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add a new task here..."
      />
      <button className="add-btn" onClick={addTodo}>
        Add
      </button>
    </div>
  );
};

export default AddInput;

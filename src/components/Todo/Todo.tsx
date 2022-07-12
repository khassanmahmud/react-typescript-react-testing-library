import React, { useState } from "react";
import AddInput from "../AddInput/AddInput";
import Header from "../Header/Header";
import TodoList from "../TodoList/TodoList";
import "./Todo.css";
import * as Model from "../../data/Model";

const Todo: React.FC = () => {
  const [todos, setTodos] = useState<Model.Todo[]>([]);

  return (
    <div className="todo">
      <Header title="Todo" />
      <AddInput todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Todo;

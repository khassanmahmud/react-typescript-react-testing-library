import React from "react";
import TodoFooter from "../TodoFooter/TodoFooter";
import "./TodoList.css";

interface Todo {
  id: string;
  task: string;
  completed: boolean;
}

type TodoListProps = {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
};

const TodoList: React.FC<TodoListProps> = (props: TodoListProps) => {
  const updateTask = (id: string) => {
    let updatedTasks = props.todos.map((todo: Todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    props.setTodos(updatedTasks);
  };

  const calcNumberOfIncompletedTasks = () => {
    let count = 0;
    props.todos.forEach((todo: Todo) => {
      if (!todo.completed) count++;
    });
    return count;
  };

  return (
    <div className="todolist-container">
      <div className="todos-container">
        <div>
          {props.todos.map((todo: Todo, index) => (
            <div
              className={`todo-item ${todo.completed && "todo-item-active"}`}
              onClick={() => updateTask(todo.id)}
              key={index}
              data-testid="test-container"
            >
              {todo.task}
            </div>
          ))}
        </div>
      </div>
      <div>
        <TodoFooter numberOfIncompleteTasks={calcNumberOfIncompletedTasks()} />
      </div>
    </div>
  );
};

export default TodoList;

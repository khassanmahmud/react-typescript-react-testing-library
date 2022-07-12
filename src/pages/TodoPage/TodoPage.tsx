import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import Todo from "../../components/Todo/Todo";

const TodoPage: React.FC = () => {
  const isTodoDisplayed = useSelector(
    (state: RootState) => state.Todo.isTodoVisible
  );

  const todoInStore = useSelector((state: RootState) => state.Todo.todo);
  return (
    <div>
      {isTodoDisplayed && <h3>Yes, todo displayed</h3>}
      {todoInStore && <h3>Yes, we have todos</h3>}
      <Container>
        <Todo />
      </Container>
    </div>
  );
};

export default TodoPage;

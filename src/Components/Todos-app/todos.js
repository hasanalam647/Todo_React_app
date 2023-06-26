import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import TodosItem from "../items/Todos-Item";
import { addTask, setTodos } from "../Redux/todos-item.slice";
import "./todos.css";

const key = "todoItems";

const TodosList = () => {
  const ref = useRef();
  const dispatch = useDispatch();
  const todoItem = useSelector((state) => state.todos);

  useEffect(() => {
    let todoItems = JSON.parse(localStorage.getItem(key) || "[]");
    if (todoItems && todoItems.length) {
      dispatch(setTodos(todoItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(todoItem));
  }, [todoItem]);

  const handleAdd = (event) => {
    event.preventDefault();

    if (ref.current.value.length <= 0 || ref.current.value.trim() === "") {
      alert("Please Enter Valid Task");
    } else {
      dispatch(addTask(ref.current.value));
    }
    ref.current.value = "";
  };

  return (
    <>
      <Container>
        <h3 className="title">My Todos App</h3>

        <InputGroup as="form" className="mb-3" onSubmit={handleAdd}>
          <Form.Control
            ref={ref}
            placeholder="Please Enter Task"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <Button variant="success" id="button-addon2" type="submit">
            <FontAwesomeIcon icon={faPlus} />
          </Button>
        </InputGroup>
        {todoItem.map((value) => (
          <TodosItem key={value.id} {...value} />
        ))}
      </Container>
    </>
  );
};

export default TodosList;

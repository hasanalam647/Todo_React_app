import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
import TodosItem from "../items/Todos-Item";
import "./todos.css";

const key = "todoItems";

const TodosList = () => {
  const [todoItem, setTodoItem] = useState([]);
  const ref = useRef();

  useEffect(() => {
    let todoItems = JSON.parse(localStorage.getItem(key) || "[]");
    if (todoItems && todoItems.length) {
      setTodoItem(todoItems);
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
      setTodoItem([
        ...todoItem,
        { value: ref.current.value, id: Date.now(), isDone: false },
      ]);
    }
    ref.current.value = "";
  };
  const handleDone = (id) => {
    const todosItemIndex = todoItem.findIndex((value) => value.id === id);
    let todoDone = todoItem[todosItemIndex];
    todoDone.isDone = !todoDone.isDone;

    if (todosItemIndex >= 0) {
      todoItem.splice(todosItemIndex, 1, todoDone);
      setTodoItem([...todoItem]);
    }
  };

  const handleDelete = (id) => {
    const todosItemIndex = todoItem.findIndex((value) => value.id === id);
    if (todosItemIndex >= 0) {
      todoItem.splice(todosItemIndex, 1);
      setTodoItem([...todoItem]);
    }
  };

  const handleSave = (id, newvalue, event) => {
    event.preventDefault();

    const todosItemIndex = todoItem.findIndex((value) => value.id === id);
    if (newvalue <= 0 || newvalue.trim() === "") {
      alert("PLease enter Valid Task ");
    } else {
      if (todosItemIndex >= 0) {
        todoItem.splice(todosItemIndex, 1, { value: newvalue, id });
      }
      setTodoItem([...todoItem]);
    }
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
          <TodosItem
            key={value.id}
            id={value.id}
            isDone={value.isDone}
            todosItem={value.value}
            handleDelete={handleDelete}
            handleSave={handleSave}
            handleDone={handleDone}
          />
        ))}
      </Container>
    </>
  );
};

export default TodosList;

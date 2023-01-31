import React, { useState } from "react";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
import TodosItem from "../items/Todos-Item";
import "./todos.css";

const TodosList = () => {
  const [value, setValue] = useState("");
  const [todoItem, setTodoItem] = useState([]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleAdd = () => {
    setTodoItem([...todoItem, { value, id: Date.now() }]);
    setValue("");
  };
  const handleDelete = (id) => {
    const todosItemIndex = todoItem.findIndex((value) => value.id === id);
    if(todosItemIndex >= 0){
    todoItem.splice(todosItemIndex, 1);
    setTodoItem([...todoItem]);
  }
  };

  const  handleSave=(id, newvalue) => {
    const todosItemIndex = todoItem.findIndex((value) => value.id === id);
    if(todosItemIndex >= 0) {
      todoItem.splice(todosItemIndex, 1, {value: newvalue, id});
    setTodoItem([...todoItem])
    }
    
    };

  return (
    <>
      <Container>
        <h3 className="title">My Todos App</h3>

        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Please Enter Task"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={value}
            onChange={handleChange}
          />
          <Button
            variant="outline-secondary"
            id="button-addon2"
            onClick={handleAdd}
          >
            Add
          </Button>
        </InputGroup>
        {todoItem.map((value) => (
          <TodosItem
            key={value.id}
            id={value.id}
            todosItem={value.value}
            handleDelete={handleDelete}
            handleSave={handleSave}
            
          />
        ))}
      </Container>
    </>
  );
};

export default TodosList;

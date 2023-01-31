import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const InputItems = (props) => {
  const [newvalue, setNewValue] = useState(props.todosItem);
  const inputChange = (event) => {
    setNewValue(event.target.value);
  };
  return (
    <>
      <Row>
        <Col lg={10} sm={8}>
          <Form.Control
            placeholder="Please Enter Task"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={newvalue}
            onChange={inputChange}
          />
        </Col>
        <Col lg={2} sm={4}>
          <Button
            variant="primary"
            size="md"
            onClick={() => {
              props.handleSave(props.id, newvalue);
              props.handleEdit();
            }}
          >
            save
          </Button>
          <Button variant="primary" size="md" onClick={props.handleEdit}>
            cancel
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default InputItems;

import { faFloppyDisk, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const InputItems = (props) => {
  const [newvalue, setNewValue] = useState(props.todosItem);
  const inputChange = (event) => {
    setNewValue(event.target.value);
  };
  return (
    <>
      <Row
        as="form"
        onSubmit={(event) => {
          props.handleSave(props.id, newvalue, event);
          props.handleEdit();
        }}
      >
        <Col lg={10} sm={8}>
          <Form.Control
            className="btn-edit"
            placeholder="Please Enter Task"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={newvalue}
            onChange={inputChange}
          />
        </Col>
        <Col lg={2} sm={4}>
          <Button
            variant="success"
            size="md"
            className="btn-edit"
            type="submit"
            
          >
            <FontAwesomeIcon icon={faFloppyDisk} />
          </Button>
          <Button
            variant="danger"
            size="md"
            className="btn-edit"
            onClick={props.handleEdit}
          >
            <FontAwesomeIcon icon={faX} />
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default InputItems;

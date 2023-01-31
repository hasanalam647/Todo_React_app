import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import InputItems from "../input-item/input-Item";

const TodosItem = (props) => {
  const [isEditable, setIsEditable] = useState(false);

  const handleEdit = () => {
    setIsEditable(!isEditable)
  }


  return (
      <Container>
        {isEditable?
        <InputItems {...props} handleEdit={handleEdit} />
        :
        <Row>
          <Col lg={10} sm={8}>
            {props.todosItem}
          </Col>
          <Col lg={2} sm={4}>
            <Button
              variant="primary"
              size="md"
              onClick={handleEdit}
            >
              edit
            </Button>
            <Button
              variant="primary"
              size="md"
              onClick={() => props.handleDelete(props.id)}
            >
              delete
            </Button>
          </Col>
        </Row>}
      </Container>
  );
};

export default TodosItem;

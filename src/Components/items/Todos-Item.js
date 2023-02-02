import {
  faCheckToSlot,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useState } from "react";
import { Button, Col, Container, Row} from "react-bootstrap";
import InputItems from "../input-item/input-Item";

const TodosItem = (props) => {
  const [isEditable, setIsEditable] = useState(false);
 

  const handleEdit = () => {
    setIsEditable(!isEditable);
  };

  return (
    <Container className="conainter-1">
      {isEditable ? (
        <InputItems {...props} handleEdit={handleEdit} />
      ) : (
        <Row>
          <Col lg={10} sm={8} className={`col-1 ${props.isDone ? "done" : ""}`}>
            {props.todosItem}
          </Col>
          <Col lg={2} sm={4} className="col-1">
            <Button
              variant="success"
              size="md"
              className="btn-edit"
              onClick={() => props.handleDone(props.id)}
            >
              <FontAwesomeIcon icon={faCheckToSlot} />
            </Button>

            <Button
              variant="primary"
              size="md"
              className="btn-edit"
              onClick={handleEdit}
            >
              <FontAwesomeIcon icon={faPenToSquare} />
            </Button>
            <Button
              variant="danger"
              size="md"
              className="btn-edit"
              onClick={() => props.handleDelete(props.id)}
            >
              <FontAwesomeIcon icon={faTrash} />
            </Button>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default TodosItem;

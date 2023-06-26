import {
  faCheckToSlot,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import InputItems from "../input-item/input-Item";
import { taskDelete, taskDone, toggleEdit } from "../Redux/todos-item.slice";

const TodosItem = (props) => {
  const dispatch = useDispatch();

  const handleDone = () => {
    dispatch(taskDone(props.id));
  };

  const handleDelete = () => {
    dispatch(taskDelete(props.id));
  };

  const handleToggleEdit = () => {
    dispatch(toggleEdit(props.id));
  };

  return (
    <Container className="conainter-1">
      {props.isEditable ? (
        <InputItems {...props} handleToggleEdit={handleToggleEdit} />
      ) : (
        <Row>
          <Col lg={10} sm={8} className={`col-1 ${props.isDone ? "done" : ""}`}>
            {props.value}
          </Col>
          <Col lg={2} sm={4} className="col-1">
            <Button
              variant="success"
              size="md"
              className="btn-edit"
              onClick={handleDone}
            >
              <FontAwesomeIcon icon={faCheckToSlot} />
            </Button>

            <Button
              variant="primary"
              size="md"
              className="btn-edit"
              onClick={handleToggleEdit}
            >
              <FontAwesomeIcon icon={faPenToSquare} />
            </Button>
            <Button
              variant="danger"
              size="md"
              className="btn-edit"
              onClick={handleDelete}
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

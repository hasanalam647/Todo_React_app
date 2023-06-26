import { faFloppyDisk, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { taskSave } from "../Redux/todos-item.slice";

const InputItems = (props) => {
  const ref = useRef();
  const dispatch = useDispatch();

  const handleSave = (event) => {
    event.preventDefault();

    const newvalue = ref.current.value;

    if (newvalue <= 0 || newvalue.trim() === "") {
      alert("PLease enter Valid Task ");
    } else {
      dispatch(taskSave({ id: props.id, newvalue: ref.current.value }));
    }
  };
  return (
    <>
      <Row as="form" onSubmit={handleSave}>
        <Col lg={10} sm={8}>
          <Form.Control
            className="btn-edit"
            ref={ref}
            placeholder="Please Enter Task"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            defaultValue={props.value}
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
            onClick={props.handleToggleEdit}
          >
            <FontAwesomeIcon icon={faX} />
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default InputItems;

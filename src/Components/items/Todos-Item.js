import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const TodosItem=(props)=> {

    return (
      <>
      <Container>
       <Row>
        <Col lg={10} sm={8}>{props.todosItem}</Col>
        <Col lg={2} sm={4}>
        
        <Button variant="primary" size="md">
          edit
        </Button>{' '}
        <Button variant="primary" size="md">
          delete
        </Button>{' '}


        </Col>
      </Row>
      </Container>
      </>
      
    );
  }
  
  export default TodosItem;
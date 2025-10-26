import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container className="text-center my-5">
      <Row>
        <Col>
          <h1>Welcome to the Library Manager</h1>
          <p className="lead">
            Manage your book collection easily and efficiently. Browse, add, edit, or remove books from your library.
          </p>
          <Button as={Link} to="/books" variant="primary" size="lg">
            Browse Books
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

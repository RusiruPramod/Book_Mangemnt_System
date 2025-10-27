import React from "react";
import { Navbar, Nav, Container, Button, Form, FormControl, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AppNav() {
  return (
    <Navbar
      expand="lg"
      variant="dark"
      sticky="top"
      style={{ background: "linear-gradient(90deg, darkred, crimson)" }}
      className="py-3 mb-4"
    >
      <Container fluid>
        {/* Left: Brand + Main Links */}
        <Navbar.Brand as={Link} to="/" className="fw-bold text-white me-4">
          📚 Library Manager
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Row className="w-100 align-items-center">
            {/* Left Section: Navigation Links */}
            <Col xs={12} md={4} className="d-flex align-items-center">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/" className="text-white mx-2">Home</Nav.Link>
                <Nav.Link as={Link} to="/books" className="text-white mx-2">Books</Nav.Link>
                <Nav.Link as={Link} to="/contact" className="text-white mx-2">Contact Us</Nav.Link>
              </Nav>
            </Col>

            {/* Center Section: Search Bar */}
            <Col xs={12} md={4} className="d-flex justify-content-center my-2 my-md-0">
              <Form className="d-flex w-100">
                <FormControl
                  type="search"
                  placeholder="Search books..."
                  className="me-2 rounded-pill px-3"
                />
               
              </Form>
            </Col>

            {/* Right Section: Actions */}
            <Col xs={12} md={4} className="d-flex justify-content-end align-items-center mt-2 mt-md-0">
              <Nav className="align-items-center">
                <Nav.Link as={Link} to="/language" className="text-white mx-2">Change Language</Nav.Link>
                <Nav.Link as={Link} to="/upload" className="text-white mx-2">⬆ Upload</Nav.Link>
                <Button as={Link} to="/login" variant="outline-light" className="mx-2 rounded-pill">Sign In</Button>
                <Button as={Link} to="/download" variant="warning" className="mx-2 rounded-pill fw-bold text-dark">
                  ⬇️ Download Free for 30 Days
                </Button>
              </Nav>
            </Col>
          </Row>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

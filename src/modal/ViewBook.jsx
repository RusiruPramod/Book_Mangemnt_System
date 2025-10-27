import React from "react";
import { Modal, Button } from "react-bootstrap";

const ViewBook = ({ show, handleClose, book }) => {
  if (!book) return null;

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>📖 View Book Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p><strong>Title:</strong> {book.title}</p>
        <p><strong>Author:</strong> {book.author}</p>
        <p><strong>Category:</strong> {book.category}</p>
        <p><strong>Published Year:</strong> {book.year}</p>
        <p><strong>Description:</strong></p>
        <p>{book.description || "No description available."}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ViewBook;

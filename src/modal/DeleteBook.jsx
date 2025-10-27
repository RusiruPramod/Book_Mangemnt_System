import React from "react";
import { Modal, Button } from "react-bootstrap";

const DeleteBook = ({ show, handleClose, handleDelete, book }) => {
  if (!book) return null;

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>⚠️ Delete Book</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Are you sure you want to delete the book <strong>"{book.title}"</strong> by{" "}
          <em>{book.author}</em>?
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => handleDelete(book._id)}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteBook;

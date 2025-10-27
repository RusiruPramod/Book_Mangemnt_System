import React from "react";
import { Card, Button } from "react-bootstrap";

const BookCard = ({ book, onEdit, onDelete }) => (
  <Card
    className="mb-4 shadow-lg border-0"
    style={{
      borderRadius: "14px",
      transition: "all 0.3s ease",
      backgroundColor: "#fff8f4",
    }}
  >
    <Card.Body>
      <Card.Title className="fw-bold text-dark mb-2">{book.title}</Card.Title>
      <Card.Text className="text-muted">
        <strong>Author:</strong> {book.author} <br />
        {book.year && (
          <>
            <strong>Year:</strong> {book.year}
            <br />
          </>
        )}
        {book.genre && (
          <>
            <strong>Genre:</strong> {book.genre}
          </>
        )}
      </Card.Text>
      <div className="d-flex justify-content-between mt-3">
        <Button
          variant="outline-warning"
          size="sm"
          onClick={() => onEdit(book)}
          className="fw-semibold"
        >
          ✏️ Edit
        </Button>
        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => onDelete(book._id)}
          className="fw-semibold"
        >
          🗑 Delete
        </Button>
      </div>
    </Card.Body>
  </Card>
);

export default BookCard;

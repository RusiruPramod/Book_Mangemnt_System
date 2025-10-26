import React from 'react';
import { Card, Button } from 'react-bootstrap';

const BookCard = ({ book, onEdit, onDelete }) => (
  <Card className="mb-3 shadow-sm">
    <Card.Body>
      <Card.Title>{book.title}</Card.Title>
      <Card.Text>
        <strong>Author:</strong> {book.author} <br />
        {book.year && <><strong>Year:</strong> {book.year} <br /></>}
        {book.genre && <><strong>Genre:</strong> {book.genre}</>}
      </Card.Text>
      <Button variant="primary" size="sm" className="me-2" onClick={() => onEdit(book)}>
        Edit
      </Button>
      <Button variant="danger" size="sm" onClick={() => onDelete(book._id)}>
        Delete
      </Button>
    </Card.Body>
  </Card>
);

export default BookCard;

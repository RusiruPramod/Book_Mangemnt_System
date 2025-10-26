import React from "react";
import { Table, Button } from "react-bootstrap";

export default function BookTable({ books, onEdit, onDelete }) {
  return (
    <Table striped bordered hover responsive>
      <thead className="table-dark">
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Year</th>
          <th>Genre</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book._id}>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.year}</td>
            <td>{book.genre}</td>
            <td>
              <Button size="sm" variant="warning" onClick={() => onEdit(book)}>
                Edit
              </Button>{' '}
              <Button size="sm" variant="danger" onClick={() => onDelete(book._id)}>
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

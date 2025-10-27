import React from "react";
import { Table, Button } from "react-bootstrap";

const BookDataTable = ({ books, onView, onEdit, onDelete }) => {
  return (
    <div className="table-responsive">
      <Table bordered hover striped className="align-middle text-center">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            <th>Year</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books && books.length > 0 ? (
            books.map((book, index) => (
              <tr key={book._id}>
                <td>{index + 1}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.category}</td>
                <td>{book.year}</td>
                <td>
                  <Button
                    variant="info"
                    size="sm"
                    className="me-2"
                    onClick={() => onView(book)}
                  >
                    View
                  </Button>
                  <Button
                    variant="warning"
                    size="sm"
                    className="me-2"
                    onClick={() => onEdit(book)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => onDelete(book)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-muted">
                No books available.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default BookDataTable;

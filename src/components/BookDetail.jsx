import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button, Container, Spinner, Card } from "react-bootstrap";
import api from "../api/axios";

export default function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await api.get(`/${id}`);
        setBook(res.data);
      } catch {
        alert("Failed to load book details.");
      }
    })();
  }, [id]);

  if (!book)
    return (
      <div className="text-center py-5">
        <Spinner animation="border" variant="danger" />
        <p className="mt-3 text-muted">Loading book details...</p>
      </div>
    );

  return (
    <Container className="my-5">
      <Card
        className="shadow-lg border-0 mx-auto"
        style={{ maxWidth: "600px", borderRadius: "16px" }}
      >
        <Card.Body className="p-4">
          <h2 className="fw-bold text-dark mb-3">{book.title}</h2>
          <p className="fs-5 text-muted mb-1">
            <strong>Author:</strong> {book.author}
          </p>
          {book.year && (
            <p className="text-muted mb-1">
              <strong>Year:</strong> {book.year}
            </p>
          )}
          {book.genre && (
            <p className="text-muted mb-3">
              <strong>Genre:</strong> {book.genre}
            </p>
          )}

          <div className="d-flex gap-2 mt-4">
            <Link
              to={`/books/${book._id}/edit`}
              className="btn btn-outline-warning fw-semibold"
            >
              ✏️ Edit
            </Link>
            <Link to="/books" className="btn btn-outline-secondary fw-semibold">
              ← Back
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

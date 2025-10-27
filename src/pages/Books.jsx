import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";
import BookTable from "../components/BookTable";
import api from "../api/axios";

export default function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await api.get("/");
        setBooks(res.data);
      } catch (err) {
        console.error(err);
        setError("⚠️ Failed to load books. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      try {
        await api.delete(`/${id}`);
        setBooks((prev) => prev.filter((b) => b._id !== id));
      } catch (err) {
        console.error(err);
        alert("❌ Delete failed");
      }
    }
  };

  const handleEdit = (book) => {
    window.location.href = `/books/${book._id}/edit`;
  };

  return (
    <>
      {/* ─── Hero Section ─────────────────────────────── */}
      <div
        className="py-5 text-center text-white"
        style={{
          background: "linear-gradient(135deg, #8B0000, #5C2E00)",
          borderBottom: "5px solid #A0522D",
        }}
      >
        <Container>
          <h1 className="fw-bold mb-2 display-5">📚 Books Management</h1>
          <p className="lead mb-0 text-light">
            Effortlessly organize, update, and manage your library collection.
          </p>
        </Container>
      </div>

      {/* ─── Main Content ─────────────────────────────── */}
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col lg={10}>
            <Card
              className="shadow-lg border-0"
              style={{
                borderRadius: "16px",
                backgroundColor: "#fffaf5",
              }}
            >
              <Card.Header
                className="py-3 text-white"
                style={{
                  background: "linear-gradient(90deg, #8B0000, #A0522D)",
                  borderTopLeftRadius: "16px",
                  borderTopRightRadius: "16px",
                }}
              >
                <div className="d-flex justify-content-between align-items-center">
                  <h4 className="fw-semibold mb-0">Book List</h4>
                  <Button
                    href="/books/new"
                    variant="light"
                    className="fw-semibold px-4"
                  >
                    ➕ Add New Book
                  </Button>
                </div>
              </Card.Header>

              <Card.Body>
                {loading ? (
                  <div className="text-center py-5">
                    <Spinner animation="border" variant="danger" />
                    <p className="mt-3 text-muted">Loading books...</p>
                  </div>
                ) : error ? (
                  <Alert variant="danger" className="text-center">
                    {error}
                  </Alert>
                ) : books.length === 0 ? (
                  <div className="text-center py-5">
                    <h5 className="text-muted mb-3">
                      No books found in your library 📖
                    </h5>
                    <Button href="/books/new" variant="outline-danger">
                      Add Your First Book
                    </Button>
                  </div>
                ) : (
                  <BookTable
                    books={books}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                  />
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* ─── Call To Action ───────────────────────────── */}
      <div
        className="text-white text-center py-5 mt-5"
        style={{
          background: "linear-gradient(135deg, #5C2E00, #8B0000)",
        }}
      >
        <h3 className="fw-bold mb-3">Expand Your Library Today</h3>
        <p className="lead mb-4">
          Keep track of every story — add and manage your favorite books.
        </p>
        <Button href="/books/new" variant="light" size="lg">
          Add Book
        </Button>
      </div>
    </>
  );
}

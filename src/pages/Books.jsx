


import React, { useEffect, useState } from "react";
import { Container, Button, Spinner } from "react-bootstrap";
import BookTable from "../components/BookTable";
import api from "../api/axios"; // Axios instance

export default function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await api.get("/"); // Adjust to your API endpoint
        setBooks(res.data);
      } catch (err) {
        console.error(err);
        alert("Failed to fetch books");
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
        setBooks(books.filter((b) => b._id !== id));
      } catch (err) {
        console.error(err);
        alert("Delete failed");
      }
    }
  };

  const handleEdit = (book) => {
    window.location.href = `/books/${book._id}/edit`; // Use navigate if using react-router
  };

  return (
    <Container className="my-4">
      <h2>Books List</h2>
      {loading ? (
        <Spinner animation="border" />
      ) : (
        <BookTable books={books} onEdit={handleEdit} onDelete={handleDelete} />
      )}
      <Button className="mt-3" href="/books/new" variant="success">
        Add New Book
      </Button>
    </Container>
  );
}

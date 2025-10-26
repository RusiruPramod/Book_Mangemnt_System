import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button, Container, Spinner } from 'react-bootstrap';
import api from '../api/axios';

export default function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await api.get(`/${id}`);
        setBook(res.data);
      } catch (err) {
        console.error(err);
        alert('Failed to load book');
      }
    })();
  }, [id]);

  if (!book) return <Spinner animation="border" />;

  return (
    <Container className="mt-3">
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      {book.year && <p><strong>Year:</strong> {book.year}</p>}
      {book.genre && <p><strong>Genre:</strong> {book.genre}</p>}
      <Link to={`/books/${book._id}/edit`} className="btn btn-primary me-2">Edit</Link>
      <Link to="/books" className="btn btn-secondary">Back</Link>
    </Container>
  );
}
      
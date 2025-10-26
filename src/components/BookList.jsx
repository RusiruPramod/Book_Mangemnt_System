import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/axios';

export default function BookList() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBooks = async () => {
    try {
      const res = await api.get('/');
      setBooks(res.data);
    } catch (err) {
      console.error(err);
      alert('Failed to fetch books');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm('Delete this book?')) return;
    try {
      await api.delete(`/${id}`);
      setBooks((prev) => prev.filter(b => b._id !== id));
    } catch (err) {
      console.error(err);
      alert('Delete failed');
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Books ({books.length})</h2>
      {books.length === 0 && <p>No books yet. <Link to="/books/new">Add one</Link>.</p>}
      <ul>
        {books.map(book => (
          <li key={book._id} style={{ marginBottom: 10 }}>
            <strong>{book.title}</strong> — {book.author}
            <div>
              <Link to={`/books/${book._id}`} style={{ marginRight: 8 }}>View</Link>
              <Link to={`/books/${book._id}/edit`} style={{ marginRight: 8 }}>Edit</Link>
              <button onClick={() => handleDelete(book._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

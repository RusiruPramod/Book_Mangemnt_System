import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Button, Container, Spinner } from 'react-bootstrap';
import api from '../api/axios';

export default function BookForm({ editMode }) {
  const [form, setForm] = useState({
    title: '',
    author: '',
    year: '',
    genre: ''
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (editMode && id) {
      (async () => {
        try {
          const res = await api.get(`/${id}`);
          setForm({
            title: res.data.title || '',
            author: res.data.author || '',
            year: res.data.year || '',
            genre: res.data.genre || ''
          });
        } catch (err) {
          console.error(err);
          alert('Cannot load book');
        }
      })();
    }
  }, [editMode, id]);

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (!form.title || !form.author) {
      alert('Title and Author are required');
      return;
    }
    setLoading(true);
    try {
      if (editMode) {
        await api.put(`/${id}`, { ...form, year: form.year ? Number(form.year) : undefined });
        alert('Book updated');
      } else {
        await api.post('/', { ...form, year: form.year ? Number(form.year) : undefined });
        alert('Book created');
      }
      navigate('/books');
    } catch (err) {
      console.error(err);
      alert('Save failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="mt-3">
      <h2>{editMode ? 'Edit Book' : 'Add Book'}</h2>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title *</Form.Label>
          <Form.Control name="title" value={form.title} onChange={onChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Author *</Form.Label>
          <Form.Control name="author" value={form.author} onChange={onChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Year</Form.Label>
          <Form.Control name="year" value={form.year} onChange={onChange} type="number" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Genre</Form.Label>
          <Form.Control name="genre" value={form.genre} onChange={onChange} />
        </Form.Group>
        <Button type="submit" variant="success" disabled={loading}>
          {loading ? <Spinner animation="border" size="sm" /> : 'Save'}
        </Button>
      </Form>
    </Container>
  );
}

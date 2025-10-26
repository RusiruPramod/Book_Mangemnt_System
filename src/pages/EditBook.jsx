import React, { useState, useEffect } from "react";
import { Container, Form, Button, Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/axios";

export default function EditBook() {
  const [form, setForm] = useState({
    title: "",
    author: "",
    year: "",
    genre: "",
  });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await api.get(`/${id}`);
        setForm({
          title: res.data.title,
          author: res.data.author,
          year: res.data.year || "",
          genre: res.data.genre || "",
        });
      } catch (err) {
        console.error(err);
        alert("Failed to load book");
      } finally {
        setLoading(false);
      }
    };
    fetchBook();
  }, [id]);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.put(`/${id}`, {
        ...form,
        year: form.year ? Number(form.year) : undefined,
      });
      alert("Book updated successfully");
      navigate("/books");
    } catch (err) {
      console.error(err);
      alert("Update failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="my-4">
      <h2>Edit Book</h2>
      {loading ? (
        <Spinner animation="border" />
      ) : (
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
            <Form.Control type="number" name="year" value={form.year} onChange={onChange} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Genre</Form.Label>
            <Form.Control name="genre" value={form.genre} onChange={onChange} />
          </Form.Group>

          <Button type="submit" variant="primary" disabled={loading}>
            {loading ? <Spinner animation="border" size="sm" /> : "Update Book"}
          </Button>
        </Form>
      )}
    </Container>
  );
}

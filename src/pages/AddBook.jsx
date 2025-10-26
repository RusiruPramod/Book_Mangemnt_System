import React, { useState } from "react";
import { Container, Form, Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

export default function AddBook() {
  const [form, setForm] = useState({
    title: "",
    author: "",
    year: "",
    genre: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.author) {
      alert("Title and Author are required");
      return;
    }
    setLoading(true);
    try {
      await api.post("/", {
        ...form,
        year: form.year ? Number(form.year) : undefined,
      });
      alert("Book added successfully");
      navigate("/books");
    } catch (err) {
      console.error(err);
      alert("Add failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="my-4">
      <h2>Add New Book</h2>
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
          {loading ? <Spinner animation="border" size="sm" /> : "Save Book"}
        </Button>
      </Form>
    </Container>
  );
}

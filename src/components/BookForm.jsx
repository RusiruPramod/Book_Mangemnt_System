import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Button, Container, Spinner, Card } from "react-bootstrap";
import api from "../api/axios";

export default function BookForm({ editMode }) {
  const [form, setForm] = useState({
    title: "",
    author: "",
    year: "",
    genre: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (editMode && id) {
      (async () => {
        try {
          const res = await api.get(`/${id}`);
          setForm(res.data);
        } catch {
          alert("Cannot load book details.");
        }
      })();
    }
  }, [editMode, id]);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.author) return alert("Title and Author required.");

    setLoading(true);
    try {
      if (editMode) {
        await api.put(`/${id}`, { ...form });
        alert("Book updated successfully!");
      } else {
        await api.post("/", { ...form });
        alert("Book added successfully!");
      }
      navigate("/books");
    } catch {
      alert("Failed to save book.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="my-5">
      <Card
        className="shadow-lg border-0 mx-auto"
        style={{ maxWidth: "650px", borderRadius: "16px" }}
      >
        <Card.Body className="p-5">
          <h3 className="fw-bold text-dark mb-4">
            {editMode ? "✏️ Edit Book" : "➕ Add New Book"}
          </h3>
          <Form onSubmit={onSubmit}>
            {["title", "author", "year", "genre"].map((field, i) => (
              <Form.Group className="mb-3" key={i}>
                <Form.Label className="fw-semibold text-secondary text-capitalize">
                  {field}
                  {["title", "author"].includes(field) && " *"}
                </Form.Label>
                <Form.Control
                  name={field}
                  type={field === "year" ? "number" : "text"}
                  value={form[field]}
                  onChange={onChange}
                  placeholder={`Enter ${field}`}
                  className="py-2"
                />
              </Form.Group>
            ))}
            <Button
              type="submit"
              variant="danger"
              className="w-100 mt-3 fw-semibold"
              disabled={loading}
            >
              {loading ? (
                <Spinner animation="border" size="sm" />
              ) : editMode ? (
                "Update Book"
              ) : (
                "Save Book"
              )}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

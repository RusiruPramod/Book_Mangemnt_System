import React from "react";
import { Routes, Route } from "react-router-dom";
import AppNav from "./components/Navbar";
import Home from "./pages/Home";
import Books from "./pages/Books";
import AddBook from "./pages/AddBook";
import EditBook from "./pages/EditBook";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <AppNav />
      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/new" element={<AddBook />} />
          <Route path="/books/:id/edit" element={<EditBook />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

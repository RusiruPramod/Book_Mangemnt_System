import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Books from "./pages/Books";
import AddBook from "./modal/AddBook";
import EditBook from "./modal/EditBook";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/new" element={<AddBook />} />
          <Route path="/books/:id/edit" element={<EditBook />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
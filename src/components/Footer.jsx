import React from "react";
import { Container } from "react-bootstrap";

export default function Footer() {
  return (
  <footer className="bg-dark text-white py-3">
  <Container className="text-center">
    &copy; {new Date().getFullYear()} Library Manager. All rights reserved.
  </Container>
</footer>

  );
}

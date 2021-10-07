import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

export default function Header() {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/">KILIESKIN</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/bundles-sets">BUNDLES AND SETS</Nav.Link>
            <Nav.Link href="/cleansers">CLEANSERS</Nav.Link>
            <Nav.Link href="/moisturizers">MOISTURIZERS</Nav.Link>
            <Nav.Link href="/serums">SERUMS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

import {useContext} from "react";
import { Container, Nav, Navbar, Form, FormControl } from "react-bootstrap";
import { SearchContext } from "./SearchContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

export default function Header() {
  const {addSearch} = useContext(SearchContext);
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/">KYLIESKIN</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/bundles-sets">BUNDLES AND SETS</Nav.Link>
            <Nav.Link href="/cleansers">CLEANSERS</Nav.Link>
            <Nav.Link href="/moisturizers">MOISTURIZERS</Nav.Link>
            <Nav.Link href="/serums">SERUMS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Form className="d-flex">
          <FormControl
            onChange={(event) => {
              addSearch(event.target.value);
            }}
            type="search"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
          />
        </Form>
      </Container>
    </Navbar>
  );
}

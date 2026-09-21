import React from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Container>
      <Navbar bg="light" expand="lg" className="px-4 ">
        <Container fluid className="px-0">
          <Navbar.Brand href="#home">
            <Image style={{ width: "100px" }} src="./Images/logo.jpg" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
            <Nav className="mx-auto gap-4 fs-5">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Product</Nav.Link>
              <Nav.Link href="#link">Men</Nav.Link>
              <Nav.Link href="#link">Women</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
            </Nav>

            <Nav>
              <Nav.Link href="#link">Cart</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>

  );
};

export default Header;

import { Button, Container, Form, Nav, NavDropdown, Navbar } from "react-bootstrap";

import React from 'react'

const Topbar = () => {
  return (
    <header className="App-header">
      <Navbar expand="lg" className="bg-body-tertiary" style={{width:"100%"}}>
      <Container fluid>
        <Navbar.Brand href="#">Sport shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Accueil</Nav.Link>
            <Nav.Link href="#action2">A propos</Nav.Link>
            <Nav.Link href="#action2">Boutique</Nav.Link>
            <NavDropdown title="Categorie" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Homme</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Femme
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Enfants
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </header>
  )
}

export default Topbar
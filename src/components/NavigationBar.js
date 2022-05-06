import React from 'react';
import { Navbar, Container, Nav, NavbarBrand } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <div>
      <Navbar>
        <Container>
          <NavbarBrand>MAMEN FILMS</NavbarBrand>
          <Nav>
            <Nav.Link>Trending</Nav.Link>
            <Nav.Link>SUPERHERO</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;

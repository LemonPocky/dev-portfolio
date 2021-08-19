import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';

// Here we are using object destructuring assignment to pluck off our variables from the props object
export default function Header({ handlePageChange }) {
  return (
    <header className="header">
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Navbar.Brand>Lily Huang</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent"></Navbar.Toggle>
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="mr-auto">
            <NavItem>
              <NavLink onClick={() => handlePageChange('About')}>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => handlePageChange('My Works')}>
                My Works
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => handlePageChange('Contact')}>
                Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="jumbotron bg-light">
        <Container className="text-center">
          <h1>Portfolio of Lily Huang</h1>
          <h4>Software Engineer</h4>
        </Container>
      </div>
    </header>
  );
}

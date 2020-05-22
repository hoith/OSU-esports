import React from 'react';
import{ Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar{
    background-color: #ADD8E6;
  }
  .navbar-brand,.navbar-nav,.nav-link {
    color: #bbb;
  &:hover{
    color:white;

  }
  }
`;
export const NaviBar = () => (
<Styles>
  <Navbar expand="1g" bg="dark" variant="dark">
    <Navbar.Brand href="/"> Hoith </Navbar.Brand>
    <Navbar.Toggle aria-controls="responisve-navbar-nav"/>
    <Navbar.Collapse id="responisve-navbar-nav">
      <Nav>
        <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="/projects">Projects</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
      </Nav>
      </Navbar.Collapse>
      </Navbar>

</Styles>
)

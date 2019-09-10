import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavBar = () => {

  return(
    <Navbar bg="primary">
      <Navbar.Brand>Give it Up</Navbar.Brand>
      <Nav as="ul" >
        <Nav.Item as="li">
          <Nav.Link as={Link} to='/signup'>Sign Up</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link as={Link} to='/'>Login</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link as={Link} to='/profile'>Profile</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link as={Link} to='/vices'>Vices</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link as={Link} to='/Cart'>Cart</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>

  )
}

export default NavBar

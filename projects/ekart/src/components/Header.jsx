import React from 'react'
import { Container, Navbar, Nav, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <>
      <Navbar expand="lg" className="bg-primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand className='text-light'>
            <Link to={'/'} style={{ color: '#fff', textDecoration: 'none' }}>
              <i className="fa-solid fa-cart-shopping fa-bounce me-3 text-light"></i> EKART
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">

              <Nav.Link className='text-light'>
                <Link to={'wishlist'} style={{ color: '#fff', textDecoration: 'none' }}>
                  WISHLIST
                  <Badge bg="secondary" className='ms-1'>3</Badge>
                  </Link>
              </Nav.Link>
              <Nav.Link className='text-light'>
                <Link to={'/cart'} style={{ color: '#fff', textDecoration: 'none' }}>
                  CART
                  <Badge bg="secondary" className='ms-1'>4</Badge>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
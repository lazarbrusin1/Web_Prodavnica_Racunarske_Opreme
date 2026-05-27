import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import logo from '../assets/logo.png'
import { LinkContainer } from 'react-router-bootstrap'
// za login modal
import '../assets/styles/prijava.css'
import { Modal, Button, Form } from 'react-bootstrap'
import { useState } from 'react'
const Header = () => {
    const [show, setShow] = useState(false)
    return (
        <header>
           <Navbar className="custom-navbar" variant="dark" expand="md" collapseOnSelect>
            <Modal show={show} onHide={() => setShow(false)} centered>
    <Modal.Body className='p-4'>
        <h3 className='text-center mb-4'>Prijava</h3>

        <Form.Control
            className='mb-3'
            type='email'
            placeholder='Email'
        />

        <Form.Control
            className='mb-3'
            type='password'
            placeholder='Lozinka'
        />

        <button
            className='btn add-to-cart-btn w-100'
            onClick={() => setShow(false)}
        >
            Prijava
        </button>
    </Modal.Body>
</Modal>
                <Container className="mx-auto text-center">
                    <LinkContainer to="/">
                        <Navbar.Brand className="mx-auto text-center">
                          <img src={logo} alt="logo" width="180" height="120" className="d-inline-block align-top me-2" />
                            <div>
                                <h1>
                            <span className="store-title">Prodavnica računarske opreme </span>
                            </h1>
                        
                            </div>
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <LinkContainer to="/cart">
                                <Nav.Link>
                                    <FaShoppingCart /> Korpa 

                                </Nav.Link>
                            </LinkContainer>
                          <Nav.Link onClick={() => setShow(true)}>
                                <Nav.Link>
                                    <FaUser /> Prijava
                                </Nav.Link>
                           </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
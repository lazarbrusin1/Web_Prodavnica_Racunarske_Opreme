import React from 'react'
import { Navbar, Container, Nav, Modal, Button, Form, Toast, NavDropdown } from 'react-bootstrap'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import products from '../products_list.js'
import '../assets/styles/prijava.css'
import '../assets/styles/futuristic.css'
import { useState } from 'react'
const Header = () => {
    const categories = Array.from(new Set(products.map((product) => product.category))).filter(Boolean)
    const [show, setShow] = useState(false)
    const [role, setRole] = useState(localStorage.getItem('role') || '')
    const [selectedRole, setSelectedRole] = useState('Korisnik')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({ email: '', password: '' })
    const [showToast, setShowToast] = useState(false)
    const [toastMessage, setToastMessage] = useState('')

    const handleLogin = () => {
      const trimmedEmail = email.trim()
      const newErrors = { email: '', password: '' }

      if (!trimmedEmail.toLowerCase().endsWith('@gmail.com')) {
        newErrors.email = 'Mejl mora završiti sa @gmail.com'
      }

      if (password.length < 4) {
        newErrors.password = 'Lozinka mora imati najmanje 4 karaktera'
      }

      if (newErrors.email || newErrors.password) {
        setErrors(newErrors)
        return
      }

      localStorage.setItem('role', selectedRole)
      setRole(selectedRole)
      setToastMessage(`Uspešno ste prijavljeni kao ${selectedRole}!`)
      setShowToast(true)
      setShow(false)
      setEmail('')
      setPassword('')
      setErrors({ email: '', password: '' })
    }

    return (
        <header className="site-header">
          <div className="page-background">
            <span className="bg-dot dot-1" />
            <span className="bg-dot dot-2" />
            <span className="bg-dot dot-3" />
            <span className="bg-line line-1" />
            <span className="bg-line line-2" />
          </div>
          <Navbar className="custom-navbar" variant="dark" expand="lg" collapseOnSelect>
            <Container fluid className="position-relative align-items-center">
              <LinkContainer to="/">
                <Navbar.Brand className="brand-left d-flex align-items-center gap-3">
                  <img src={logo} alt="logo" width="56" height="56" className="header-logo" />
                  <div className="brand-text">
                    <div className="brand-label">Prodavnica</div>
                    <div className="brand-title">računarske opreme</div>
                  </div>
                </Navbar.Brand>
              </LinkContainer>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                <Nav className="header-nav align-items-center">
                  <NavDropdown title="Meni" id="menu-dropdown" className="nav-pill menu-pill nav-dropdown">
                    <NavDropdown.Item as={Link} to="/">Sve kategorije</NavDropdown.Item>
                    {categories.map((category) => (
                      <NavDropdown.Item
                        as={Link}
                        key={category}
                        to={`/?category=${encodeURIComponent(category)}`}
                      >
                        {category}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>
                  <LinkContainer to="/cart">
                    <Nav.Link className="nav-pill">
                      <FaShoppingCart /> Korpa
                    </Nav.Link>
                  </LinkContainer>
                  {role ? (
                    <Nav.Link className="nav-pill" onClick={() => {
                      localStorage.removeItem('role')
                      setRole('')
                    }}>
                      <FaUser /> {role}
                    </Nav.Link>
                  ) : (
                    <Nav.Link className="nav-pill" onClick={() => setShow(true)}>
                      <FaUser /> Prijava
                    </Nav.Link>
                  )}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <section className="hero-panel">
            <div className="hero-copy">
              <h1>Napredna oprema za moderne kreatore i gejmere</h1>
              <p>Ubrzaj kupovinu sa svemirom inspirisanim interfejsom, narandžastim akcentima i živim animacijama u pozadini.</p>
              <div className="hero-actions">
                <LinkContainer to="/cart">
                  <Button className="hero-btn me-3">Pogledaj korpu</Button>
                </LinkContainer>
                <Button variant="outline-light" onClick={() => setShow(true)}>Prijavi se</Button>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-coin" />
              <div className="hero-bar hero-bar-1" />
              <div className="hero-bar hero-bar-2" />
              <div className="hero-bar hero-bar-3" />
              <div className="hero-bar hero-bar-4" />
            </div>
          </section>

          <Modal show={show} onHide={() => setShow(false)} centered>
            <Modal.Body className='p-4'>
              <h3 className='text-center mb-4'>Prijava</h3>

              <Form.Control
                className='mb-3'
                type='email'
                placeholder='Email'
                value={email}
                onChange={e => {
                  setEmail(e.target.value)
                  if (errors.email) {
                    setErrors(prev => ({ ...prev, email: '' }))
                  }
                }}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type='invalid'>
                {errors.email}
              </Form.Control.Feedback>

              <Form.Control
                className='mb-3'
                type='password'
                placeholder='Lozinka'
                value={password}
                onChange={e => {
                  setPassword(e.target.value)
                  if (errors.password) {
                    setErrors(prev => ({ ...prev, password: '' }))
                  }
                }}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type='invalid'>
                {errors.password}
              </Form.Control.Feedback>

              <Form.Select
                className='mb-3'
                id='role'
                value={selectedRole}
                onChange={e => setSelectedRole(e.target.value)}
              >
                <option value='Korisnik'>Korisnik</option>
                <option value='Administrator'>Administrator</option>
              </Form.Select>

              <button
                className='btn add-to-cart-btn w-100'
                onClick={handleLogin}
              >
                Prijava
              </button>
            </Modal.Body>
          </Modal>

          <div className="toast-custom-container">
            <Toast
              show={showToast}
              onClose={() => setShowToast(false)}
              delay={3000}
              autohide
              className="toast-custom"
            >
              <Toast.Header closeButton>
                <strong className="me-auto">Prijava</strong>
              </Toast.Header>
              <Toast.Body>{toastMessage}</Toast.Body>
            </Toast>
          </div>
        </header>
    )
}

export default Header
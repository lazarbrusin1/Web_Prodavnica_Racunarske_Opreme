import React from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { Outlet } from 'react-router-dom'
import { Container } from 'react-bootstrap'

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container className="main-container">
           <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App

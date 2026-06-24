import React from 'react'
import { NavDropdown } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Menu = () => {
    const navigate = useNavigate()

    const categories = [
        'Računari',
        'Laptopovi',
        'Monitori',
        'Periferije',
        'Komponente',
        'Kućišta',
        'Mrežna oprema',
        'Skladištenje',
        'Dodaci',
        'Servisna oprema',
    ]

    return (
        <NavDropdown title="Meni" id="menu-dropdown" className="nav-pill menu-pill nav-dropdown">
            <NavDropdown.Item onClick={() => navigate('/')}>
                Sve kategorije
            </NavDropdown.Item>

            {categories.map((category) => (
                <NavDropdown.Item
                    key={category}
                    onClick={() => navigate(`/?category=${encodeURIComponent(category)}`)}
                >
                    {category}
                </NavDropdown.Item>
            ))}
        </NavDropdown>
    )
}

export default Menu
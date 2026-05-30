import React from 'react'
import { Row, Col, ListGroup, Button } from 'react-bootstrap'
import '../assets/styles/korpa.css'

const CartScreen = () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [] //uzmima proizvode iz localstorage, ako nema proizvoda prazna lista

    return (
        <>
            <h1 className='products-title'>Korpa</h1>

            {cartItems.length === 0 ? (
                <h4 className='card-text'> Korpa je prazna</h4>
            ) : (
                <ListGroup>
                    {cartItems.map((item) => (
                        <ListGroup.Item key={item._id}>
                            <Row className='align-items-center'>
                                <Col md={3}>
                                    <img src={item.image} alt={item.name} width='80' />
                                </Col>

                                <Col md={3}>{item.name}</Col>

                                <Col md={2}>{item.price} RSD</Col>

                                <Col md={2}>x{item.qty}</Col>

                                <Col md={2}>
                                    <Button
                                        variant='danger'
                                        onClick={() => {
                                            const updatedCart = cartItems.filter(
                                                (x) => x._id !== item._id //pravi novu listu proizvoda bez onog koji se brise
                                            )

                                            localStorage.setItem(
                                                'cartItems',
                                                JSON.stringify(updatedCart) //cuva novu korpu u localstorage kao string
                                            )

                                            window.location.reload()
                                        }}
                                    >
                                        X
                                    </Button>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            )}
        </>
    )
}

export default CartScreen
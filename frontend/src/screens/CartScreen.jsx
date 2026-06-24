import React, { useState } from 'react'
import { Row, Col, ListGroup, Button, Alert } from 'react-bootstrap'
import '../assets/styles/korpa.css'

const CartScreen = () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []
    const [error, setError] = useState('')

    const totalPrice = cartItems.reduce(
        (sum, item) => sum + Number(item.price) * Number(item.qty),
        0
    )

    const placeOrderHandler = async () => {
        try {
            const order = {
                orderItems: cartItems.map((item) => ({
                    name: item.name,
                    qty: item.qty,
                    image: item.image,
                    price: item.price,
                    product: item._id,
                })),
                shippingAddress: {
                    address: 'Novi Sad',
                    city: 'Novi Sad',
                    postalCode: '21000',
                    country: 'Serbia',
                },
                paymentMethod: 'PayPal',
                itemsPrice: totalPrice,
                taxPrice: 0,
                shippingPrice: 0,
                totalPrice: totalPrice,
            }

            const response = await fetch('/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(order),
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message || 'Greška pri slanju porudžbine')
            }

            localStorage.removeItem('cartItems')
            window.location.href = `/order/${data._id}`
        } catch (err) {
            setError('Porudžbina nije poslata. Proveri da li backend radi.')
        }
    }

    return (
        <>
            <h1 className='products-title'>Korpa</h1>

            {error && <Alert variant='danger'>{error}</Alert>}

            {cartItems.length === 0 ? (
                <h4 className='card-text'>Korpa je prazna</h4>
            ) : (
                <>
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
                                                    (x) => x._id !== item._id
                                                )

                                                localStorage.setItem(
                                                    'cartItems',
                                                    JSON.stringify(updatedCart)
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

                    <div className='text-center mt-4'>
                        <h4>Ukupno: {totalPrice} RSD</h4>

                        <Button variant='warning' size='lg' onClick={placeOrderHandler}>
                            Naruči
                        </Button>
                    </div>
                </>
            )}
        </>
    )
}

export default CartScreen
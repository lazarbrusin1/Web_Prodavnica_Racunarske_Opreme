import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating.jsx'

const Product = ({ product }) => {
    const role = localStorage.getItem('role')

    const removeFromStockHandler = async () => {
        try {
            const response = await fetch(`/api/products/${product._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: product.name,
                    price: product.price,
                    description: product.description,
                    image: product.image,
                    category: product.category,
                    countInStock: 0,
                }),
            })

            if (!response.ok) {
                throw new Error('Greška')
            }

            window.location.reload()
        } catch (error) {
            alert('Greška pri skidanju proizvoda sa stanja.')
        }
    }

    return (
        <Card className='my-3 p-3 rounded'>
            <Link to={`/product/${product._id}`}>
                <Card.Img
                    src={product.image}
                    variant='top'
                    style={{ height: '250px', objectFit: 'cover' }}
                />
            </Link>

            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as='div' className='product-title'>
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>

                <Card.Text as='div'>
                    <Rating
                        value={product.rating}
                        text={`${product.numReviews} recenzija`}
                    />
                </Card.Text>

                <Card.Text as='h3'>{product.price} RSD</Card.Text>

                <p className='loyalty-price'>
                    Loyalty cena: {Math.round(product.price * 0.7)} RSD
                </p>

                {product.countInStock === 0 && (
                    <p className='text-danger fw-bold'>Nema na stanju</p>
                )}

              {role === 'Administrator' && (
    <Button
        variant={product.countInStock > 0 ? 'danger' : 'success'}
        className='w-100 mt-2'
        onClick={async () => {
            try {
                const response = await fetch(`/api/products/${product._id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: product.name,
                        price: product.price,
                        description: product.description,
                        image: product.image,
                        category: product.category,
                        countInStock: product.countInStock > 0 ? 0 : 5,
                    }),
                })

                if (!response.ok) {
                    throw new Error('Greška')
                }

                window.location.reload()
            } catch (error) {
                alert('Greška pri promeni stanja proizvoda.')
            }
        }}
    >
        {product.countInStock > 0 ? 'Skini sa stanja' : 'Vrati na stanje'}
    </Button>
)}
            </Card.Body>
        </Card>
    )
}

export default Product
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Row, Col, Image, Card, Button, Badge } from "react-bootstrap";
import Rating from "../components/Rating.jsx";

const ProductScreen = () => {
    const { id: productId } = useParams()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const role = localStorage.getItem('role')

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true)

                const response = await fetch(`/api/products/${productId}`)

                if (!response.ok) {
                    throw new Error('Proizvod nije pronađen')
                }

                const data = await response.json()
                setProduct(data)
            } catch (err) {
                setError(err.message || 'Greška pri učitavanju proizvoda')
            } finally {
                setLoading(false)
            }
        }

        fetchProduct()
    }, [productId])

    const addToCartHandler = () => {
        if (!role) {
            alert('Morate biti prijavljeni kao Korisnik ili Administrator da biste poručili proizvod!')
            return
        }

        if (product.countInStock === 0) {
            alert('Proizvod trenutno nije na stanju.')
            return
        }

        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []
        const existItem = cartItems.find((x) => x._id === product._id)

        if (existItem) {
            existItem.qty += 1
        } else {
            cartItems.push({
                ...product,
                qty: 1,
            })
        }

        localStorage.setItem('cartItems', JSON.stringify(cartItems))
        window.location.href = '/cart'
    }

    const changeStockHandler = async () => {
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
                throw new Error('Greška pri promeni stanja proizvoda')
            }

            const updatedProduct = await response.json()
            setProduct(updatedProduct)
        } catch (err) {
            alert('Greška pri promeni stanja proizvoda.')
        }
    }

    if (loading) {
        return <p className='text-white'>Učitavanje proizvoda...</p>
    }

    if (error || !product) {
        return (
            <>
                <Link className='btn btn-outline-secondary mb-4' to='/'>
                    Nazad
                </Link>

                <p className='text-danger'>
                    {error || 'Proizvod nije pronađen'}
                </p>
            </>
        )
    }

    return (
        <>
            <Link className='btn btn-outline-secondary mb-4' to='/'>
                Nazad
            </Link>

            <Card className='border-0 shadow-sm p-4 mb-4'>
                <Row className='align-items-center'>
                    <Col md={8}>
                        <h2 className='mb-2'>{product.name}</h2>

                        <Rating
                            value={product.rating}
                            text={`${product.numReviews} recenzija`}
                        />
                    </Col>

                    <Col md={4} className='text-md-end mt-3 mt-md-0'>
                        <h3 className='text-primary mb-0'>
                            {product.price.toFixed(2)} RSD
                        </h3>

                        <p className='loyalty-price mb-0'>
                            Loyalty cena: {Math.round(product.price * 0.7)} RSD
                        </p>
                    </Col>
                </Row>
            </Card>

            <Row className='gy-4'>
                <Col lg={8}>
                    <Card className='border-0 shadow-sm p-4'>
                        <div className='text-center'>
                            <Image
                                src={product.image}
                                alt={product.name}
                                fluid
                                style={{
                                    maxHeight: '500px',
                                    objectFit: 'contain',
                                }}
                            />
                        </div>
                    </Card>
                </Col>

                <Col lg={4}>
                    <Card className='border-0 shadow-sm'>
                        <Card.Body>
                            <h4 className='mb-4'>Informacije o proizvodu</h4>

                            <div className='d-flex justify-content-between mb-3'>
                                <span>Kategorija:</span>
                                <span>{product.category}</span>
                            </div>

                            <div className='d-flex justify-content-between align-items-center mb-4'>
                                <span>Status:</span>

                                {product.countInStock > 0 ? (
                                    <Badge bg='success'>Dostupno</Badge>
                                ) : (
                                    <Badge bg='danger'>Nema na stanju</Badge>
                                )}
                            </div>

                            <div className='d-grid gap-2'>
                                <Button
                                    className='btn-block add-to-cart-btn'
                                    type='button'
                                    disabled={product.countInStock === 0}
                                    onClick={addToCartHandler}
                                >
                                    {product.countInStock > 0
                                        ? 'Dodaj u korpu'
                                        : 'Nema na stanju'}
                                </Button>

                                {role === 'Administrator' && (
                                    <Button
                                        variant={product.countInStock > 0 ? 'danger' : 'success'}
                                        type='button'
                                        onClick={changeStockHandler}
                                    >
                                        {product.countInStock > 0
                                            ? 'Skini sa stanja'
                                            : 'Vrati na stanje'}
                                    </Button>
                                )}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Card className='border-0 shadow-sm mt-4'>
                <Card.Body>
                    <h4 className='mb-3'>Opis proizvoda</h4>

                    <p className='mb-0'>{product.description}</p>
                </Card.Body>
            </Card>
        </>
    )
}

export default ProductScreen
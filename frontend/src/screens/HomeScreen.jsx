import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import Product from "../components/Product.jsx";

const HomeScreen = () => {
    const [searchParams] = useSearchParams()
    const selectedCategory = searchParams.get('category') || ''
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true)
                const response = await fetch('/api/products')

                if (!response.ok) {
                    throw new Error('Greška pri učitavanju proizvoda sa servera')
                }

                const data = await response.json()
                setProducts(data)
            } catch (err) {
                setError(err.message || 'Greška pri učitavanju proizvoda')
            } finally {
                setLoading(false)
            }
        }

        fetchProducts()
    }, [])

    const filteredProducts = selectedCategory
        ? products.filter(
            (product) =>
                product.category &&
                product.category.toLowerCase() === selectedCategory.toLowerCase()
          )
        : products

    return (
        <>
            <h1 className="products-title">
              {selectedCategory ? `Kategorija: ${selectedCategory}` : 'Naši proizvodi'}
            </h1>
            <div className="products-black-area">
              <div className="products-black-inner">
                {selectedCategory && (
                  <p className="text-muted mb-4">Prikazujem proizvode iz kategorije <strong>{selectedCategory}</strong>.</p>
                )}

                {loading ? (
                  <p className="text-white">Učitavanje proizvoda...</p>
                ) : error ? (
                  <p className="text-danger">{error}</p>
                ) : (
                  <Row>
                      {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                              <Product product={product} />
                          </Col>
                        ))
                      ) : (
                        <Col>
                          <p className="text-white">Trenutno nema proizvoda u ovoj kategoriji.</p>
                        </Col>
                      )}
                  </Row>
                )}
              </div>
            </div>
        </>
    )
}

export default HomeScreen;

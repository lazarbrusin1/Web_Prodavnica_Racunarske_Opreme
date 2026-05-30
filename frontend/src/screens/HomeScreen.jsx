import React from "react";
import { Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import products from "../products_list.js"
import Product from "../components/Product.jsx";

const HomeScreen = () => {
    const [searchParams] = useSearchParams()
    const selectedCategory = searchParams.get('category') || ''
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
              </div>
            </div>
        </>
    )
}

export default HomeScreen;
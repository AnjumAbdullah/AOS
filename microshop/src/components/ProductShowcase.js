// src/components/ProductShowcase.js
import React from 'react';

const products = [
    { id: 1, name: 'Product 1', price: '$10', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: '$20', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', price: '$30', image: 'https://via.placeholder.com/150' },
];

const ProductShowcase = () => {
    return (
        <div style={showcaseStyle}>
            <h2>Featured Products</h2>
            <div style={productsStyle}>
                {products.map(product => (
                    <div key={product.id} style={productStyle}>
                        <img src={product.image} alt={product.name} style={imageStyle} />
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const showcaseStyle = {
    padding: '20px',
    textAlign: 'center'
};

const productsStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
};

const productStyle = {
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '10px',
    margin: '10px',
    width: '150px'
};

const imageStyle = {
    maxWidth: '100%',
    height: 'auto'
};

export default ProductShowcase;

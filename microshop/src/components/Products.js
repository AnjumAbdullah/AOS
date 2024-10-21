import React, { useEffect } from 'react';

const products = [
    { id: 1, title: 'Stylish Jacket', description: 'Comfortable and warm jacket for winter.', image: 'https://via.placeholder.com/200', price: '$59.99' },
    { id: 2, title: 'Running Shoes', description: 'Lightweight shoes for everyday running.', image: 'https://via.placeholder.com/200', price: '$89.99' },
    { id: 3, title: 'Smart Watch', description: 'Track your fitness and stay connected.', image: 'https://via.placeholder.com/200', price: '$199.99' },
    // Add more products as needed
];


const Products = () => {
    useEffect(() => {
        addHoverEffect();
    }, []);

    const addHoverEffect = () => {
        const productCards = document.querySelectorAll('.product-card');
        productCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'scale(1.05)';
                card.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'scale(1)';
                card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
            });
        });

        const buyButtons = document.querySelectorAll('.buy-button');
        buyButtons.forEach(button => {
            button.addEventListener('mouseenter', () => {
                button.style.backgroundColor = '#145dbf';
            });
            button.addEventListener('mouseleave', () => {
                button.style.backgroundColor = '#1a73e8';
            });
        });
    };

    return (
        
        <div style={outerContainerStyle}>
            
            <div style={productsContainerStyle}>
                {products.map(product => (
                    <div key={product.id} style={productCardStyle} className="product-card">
                        <img src={product.image} alt={product.title} style={productImageStyle} />
                        <div style={productInfoStyle}>
                            <h2 style={productTitleStyle}>{product.title}</h2>
                            <p style={productDescriptionStyle}>{product.description}</p>
                            <p style={productPriceStyle}>{product.price}</p>
                            <button style={buyButtonStyle} className="buy-button">Buy Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Styles
const outerContainerStyle = {
    display: 'flex',
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically (optional)
    padding: '20px',
    backgroundColor: '#f4f4f4',
    height: '100vh', // Optional: Makes sure the container takes the full viewport height
};

const productsContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    gap: '30px',
    padding: '40px',
    overflowX: 'auto' // Allows horizontal scrolling if needed
};

const productCardStyle = {
    border: '1px solid #e0e0e0',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    backgroundColor: '#fff',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    minWidth: '250px' // Ensures each product card has a minimum width
};

const productImageStyle = {
    width: '100%',
    height: 'auto',
    transition: 'transform 0.3s ease',
};

const productInfoStyle = {
    padding: '20px',
    textAlign: 'center'
};

const productTitleStyle = {
    fontSize: '1.5em',
    margin: '10px 0',
    fontWeight: 'bold',
    color: '#333'
};

const productDescriptionStyle = {
    fontSize: '1em',
    color: '#777',
    marginBottom: '15px'
};

const productPriceStyle = {
    fontSize: '1.2em',
    fontWeight: 'bold',
    color: '#1a73e8',
    marginBottom: '15px'
};

const buyButtonStyle = {
    backgroundColor: '#1a73e8',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1em',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
};

export default Products;
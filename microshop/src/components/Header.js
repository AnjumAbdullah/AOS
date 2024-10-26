import './Header.css'; 
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const Header = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    const handleLogout = () => {
        signOut(auth).catch((error) => {
            console.error("Error signing out: ", error);
        });
    };

    return (
        <>
            <header className={`header ${isHovered ? 'hovered' : ''}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                <h1 className="microshop-heading">Microshop</h1>
                <nav>
                    <ul className="nav-list">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/orders">Manage Orders</Link></li>
                        <li><Link to="/sale" className='sale-link'>Black Friday Sale!</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>

                        {!user ? (
                            <>
                                <li><Link to="/Signup">Sign Up</Link></li>
                                <li><Link to="/Login">Login</Link></li>
                            </>
                        ) : (
                            <li>
                                <button onClick={handleLogout} className="logout-button">Logout</button>
                            </li>
                        )}
                    </ul>
                </nav>
            </header>

            {/* Main content */}
            <main className="main-content">
                {/* Rendered child components go here */}
            </main>
        </>
    );
};

export default Header;

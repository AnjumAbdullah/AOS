import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'; // Correct imports
import { auth } from '../firebase'; // Make sure this is your Firebase initialization

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            // Use createUserWithEmailAndPassword with the auth instance
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log('User signed up:', userCredential.user);
        } catch (err) {
            setError(err.message);
            console.error('Error signing up:', err);
        }
    };

    return (
        <div className="sign-up-container">
            <h2>Sign Up</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSignUp}>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;
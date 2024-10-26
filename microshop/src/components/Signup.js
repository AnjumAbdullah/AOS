// SignUp.js
import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'; 
import { auth } from '../firebase'; 
import './Signup.css'; // Import custom CSS for styling

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSignUp = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        setSuccess(false);

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log('User signed up:', userCredential.user);
            setSuccess(true);
            setEmail('');
            setPassword('');
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="sign-up-container">
            <h2>Create Your Account</h2>
            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">Signup successful! 🎉</p>}

            <form onSubmit={handleSignUp} className={`sign-up-form ${loading ? 'loading' : ''}`}>
                <div className="input-group">
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>

                <div className="input-group">
                    <input 
                        type="password" 
                        placeholder="Enter your password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>

                <button type="submit" disabled={loading}>
                    {loading ? 'Signing up...' : 'Sign Up'}
                </button>
            </form>

            <div className="alternative-options">
                <p>Already have an account? <a href="/login">Log in</a></p>
            </div>
        </div>
    );
};

export default SignUp;

import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import './Signup.css';
import { FaCheckCircle, FaSpinner } from 'react-icons/fa'; // Icons for interactivity

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState('');

  const handlePasswordChange = (e) => {
    const newPass = e.target.value;
    setPassword(newPass);

    if (newPass.length >= 8) {
      setPasswordStrength('Strong');
    } else if (newPass.length >= 5) {
      setPasswordStrength('Medium');
    } else {
      setPasswordStrength('Weak');
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    setSuccess(false);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccess(true);
      setEmail('');
      setPassword('');
    } catch (err) {
      switch (err.code) {
        case 'auth/email-already-in-use':
          setError('This email is already in use. Please use a different email.');
          break;
        case 'auth/weak-password':
          setError('Password should be at least 6 characters long.');
          break;
        case 'auth/invalid-email':
          setError('Invalid email format.');
          break;
        default:
          setError('Error signing up. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sign-up-wrapper">
      <div className="sign-up-container">
        <h2>Create Your Account</h2>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message"><FaCheckCircle /> Signup successful! 🎉</p>}

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
              onChange={handlePasswordChange} 
              required 
            />
            <small className={`password-strength ${passwordStrength.toLowerCase()}`}>
              {passwordStrength && `Password Strength: ${passwordStrength}`}
            </small>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? <FaSpinner className="spinner" /> : 'Sign Up'}
          </button>
        </form>

        <div className="alternative-options">
          <p>Already have an account? <a href="/login">Log in</a></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

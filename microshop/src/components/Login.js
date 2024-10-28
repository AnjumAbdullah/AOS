import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './Login.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();
  const redirectErrorMessage = location.state?.error; // Error from ProtectedRoute

  const togglePasswordVisibility = () => setShowPassword(prev => !prev);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Logged in successfully!');
      navigate('/'); // Redirect to home page after successful login
    } catch (err) {
      handleLoginError(err); // Pass the entire error object
    } finally {
      setLoading(false);
    }
  };

  // Function to handle different login errors
  const handleLoginError = (error) => {
    switch (error.code) {
      case 'auth/invalid-credential':
        setError('Incorrect credentials. Please try again.');
        break;
      case 'auth/user-not-found':
        setError('No user found with this email.');
        break;
      case 'auth/invalid-email':
        setError('Invalid email format.');
        break;
      case 'auth/user-disabled':
        setError('This account has been disabled. Please contact support.');
        break;
      case 'auth/too-many-requests':
        setError('Too many login attempts. Please try again later.');
        break;
      case 'auth/network-request-failed':
        setError('Network error. Please check your connection.');
        break;
      default:
        setError(`Error logging in: ${error.message}`);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h2>Login</h2>
        {(error || redirectErrorMessage) && (
          <div style={errorStyle}>
            {error || redirectErrorMessage} {/* Display whichever error is present */}
          </div>
        )}
        <form onSubmit={handleLogin} className="login-form">
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group password-group">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="toggle-password" onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

const errorStyle = {
  color: 'red',
  textAlign: 'center',
  marginTop: '10px',
  marginBottom: '10px',
  fontSize: '18px',
};

export default Login;
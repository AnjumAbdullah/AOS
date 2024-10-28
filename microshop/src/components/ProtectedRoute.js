import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

const ProtectedRoute = ({ element }) => {
    const [user] = useAuthState(auth); // Get the current authenticated user
    const location = useLocation();

    if (!user) {
        // Redirect to the login page with state
        return <Navigate to="/login" state={{ error: 'You must be logged in to access this page.' }} />;
    }

    return element;
};

export default ProtectedRoute;
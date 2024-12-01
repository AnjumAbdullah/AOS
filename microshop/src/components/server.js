// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { initializeApp } = require('firebase-admin/app');
const { getAuth } = require('firebase-admin/auth');
const firebaseAdmin = require('firebase-admin');
const app = express();

// Initialize Firebase Admin SDK
const serviceAccount = require('./path/to/your/serviceAccountKey.json'); // Update with your Firebase Admin SDK private key

initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
});

app.use(cors());
app.use(bodyParser.json());

// Route to handle Firebase user login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Your Firebase Authentication logic here
    const userCredential = await firebaseAdmin.auth().getUserByEmail(email);
    // Normally you would verify the password here as well, 
    // but Firebase Admin SDK only handles token generation, not password verification

    res.status(200).send({ message: 'Login successful!', user: userCredential });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).send({ error: error.message });
  }
});

// Route to handle Firebase user signup
app.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Create a new user using Firebase Admin SDK
    const userRecord = await firebaseAdmin.auth().createUser({
      email,
      password,
    });

    res.status(201).send({ message: 'User created successfully!', user: userRecord });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).send({ error: error.message });
  }
});

// Start the server on port 8080
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
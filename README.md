# Microshop

Microshop is a web application for online shopping, providing a user-friendly platform to browse, add to cart, and purchase products. This repository contains the complete source code and configuration files for the project, including the frontend, backend, and deployment settings.

---

## Features
- **User Authentication**: Secure login and signup using Firebase.
- **Product Showcase**: Browse available products with attractive UI components.
- **Shopping Cart**: Add, view, and manage cart items seamlessly.
- **Order Management**: Place orders and view order history.
- **Responsive Design**: Optimized for mobile and desktop views.
- **Backend API**: Python-based API for handling product data and other backend operations.
- **Containerization**: Docker support for easy deployment.

---

## Project Structure

### Root Directory
- `.gitattributes`: Git configuration settings.
- `package.json`: Node.js project dependencies and scripts.
- `package-lock.json`: Locked dependency tree.
- `README.md`: Documentation for the project.

### Application Directory: `microshop`

#### Backend
- `api.py`: Python script implementing the backend API.
- `server.js`: Backend server logic for handling requests.
- `requirements.txt`: List of Python dependencies for the backend.

#### Frontend
- **Public Directory** (`public/`): Contains static assets like images and icons.
- **Source Directory** (`src/`): React.js source code:
  - `App.js`, `App.css`: Main application entry point.
  - Components (`src/components/`): Modular components such as `Home.js`, `About.js`, and `cart.js`.

#### Configurations
- `docker-compose.yml`: Orchestrates Docker containers.
- `Dockerfile.api`, `Dockerfile.frontend`: Dockerfiles for backend and frontend.
- `products.json`: Sample product data.

---

## Installation

### Prerequisites
- Node.js and npm
- Python 3.9+
- Docker (optional for containerized setup)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/AnjumAbdullah/Microshop
   cd Microshop
   
   or
   For downloading: download the repository as a ZIP file.
                    extract the ZIP file.
                    open the project in Visual Studio Code:
                    Open Visual Studio Code 
                    Go to File > Open Folder....
                    Select the extracted directory (e.g., Microshop).

    ```
## Important - Make sure Node.js is installed in the system.
```sh
To install Node.js, follow these steps:

Download the Installer:

Go to the Node.js download page.
Download the installer for your operating system (Windows, macOS, or Linux).
Run the Installer:

Open the downloaded file and follow the instructions in the installer.
Make sure to install the necessary tools, including npm (Node.js package manager).
Verify the Installation:

Open a terminal or command prompt.
Run the following commands to verify that Node.js and npm were installed correctly:
node -v
npm -v
These commands should display the installed versions of Node.js and npm.
```


2. Install dependencies:
   - **Frontend**:
     ```bash
     cd microshop
     npm install
     ```
   - **Backend**:
     ```bash
     pip install -r requirements.txt
     ```

3. Start the application:
   - **Frontend**:
     ```bash
     npm start
     ```
   - **Backend**:
     ```bash
     python api.py
     ```

4. Open the application in your browser at `http://localhost:3000`.

---

## Deployment

To deploy using Docker:
1. Build and run the containers:
   ```bash
   docker-compose up --build
   ```

2. Access the application at `http://localhost:3000`.

---

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bugfix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes and push:
   ```bash
   git commit -m "Description of changes"
   git push origin feature-name
   ```
4. Submit a pull request.

---

## Contact
For any queries or issues, please contact pshrestha3@islander.tamucc.edu, aanjum@islander.tamucc.edu

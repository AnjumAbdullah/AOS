from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from datetime import datetime
import os

app = Flask(__name__)
CORS(app)  # To allow communication with the React frontend

# Get MongoDB URI from environment variable or fallback to default
mongo_uri = os.getenv('MONGO_URI', 'mongodb://mongo:27017')  # MongoDB URI in Docker container
client = MongoClient(mongo_uri)

# Separate databases
orders_db = client["microshop-orders"]
contact_db = client["microshop-contact"]

# Collections
orders_collection = orders_db["orders"]
contact_collection = contact_db["contact_messages"]

# In-memory database for products for demo purposes
products = [
    {"id": 1, "title": "Stylish Jacket", "description": "Comfortable and warm jacket for winter.", "price": 59.99},
    {"id": 2, "title": "Running Shoes", "description": "Lightweight shoes for everyday running.", "price": 89.99},
    {"id": 3, "title": "Smart Watch", "description": "Track your fitness and stay connected.", "price": 199.99},
]

# Helper function to find a product by ID
def find_product(product_id):
    return next((p for p in products if p["id"] == product_id), None)

# Routes for CRUD operations on products
@app.route('/api/products', methods=['GET'])
def get_products():
    return jsonify(products)

@app.route('/api/products/<int:product_id>', methods=['GET'])
def get_product(product_id):
    product = find_product(product_id)
    if not product:
        return jsonify({"error": "Product not found"}), 404
    return jsonify(product)

@app.route('/api/products', methods=['POST'])
def add_product():
    data = request.get_json()
    new_product = {
        "id": len(products) + 1,  # Simple ID increment
        "title": data["title"],
        "description": data["description"],
        "price": data["price"]
    }
    products.append(new_product)
    return jsonify(new_product), 201

@app.route('/api/products/<int:product_id>', methods=['PUT'])
def update_product(product_id):
    product = find_product(product_id)
    if not product:
        return jsonify({"error": "Product not found"}), 404
    data = request.get_json()
    product.update(data)
    return jsonify(product)

@app.route('/api/products/<int:product_id>', methods=['DELETE'])
def delete_product(product_id):
    product = find_product(product_id)
    if not product:
        return jsonify({"error": "Product not found"}), 404
    products.remove(product)
    return '', 204

# Routes for Orders
@app.route('/api/orders', methods=['GET'])
def get_orders():
    """Retrieve all orders from the orders database."""
    orders = list(orders_collection.find())
    for order in orders:
        order["_id"] = str(order["_id"])  # Convert MongoDB ObjectId to string
    return jsonify(orders)

@app.route('/api/orders', methods=['POST'])
def create_order():
    """Save a new order to the orders database."""
    data = request.get_json()

    # Validate order data
    if not data.get("name") or not data.get("address") or not data.get("items") or not data.get("total"):
        return jsonify({"error": "Invalid order data"}), 400

    new_order = {
        "name": data["name"],
        "address": data["address"],
        "items": data["items"],
        "total": data["total"],
        "date": datetime.now().isoformat(),  # Store current date and time
    }

    # Insert order into MongoDB
    result = orders_collection.insert_one(new_order)
    new_order["id"] = str(result.inserted_id)  # Add the MongoDB-generated ID to the response
    return jsonify(new_order), 201

# Route to save contact form message to the contact database
@app.route('/api/contact', methods=['POST'])
def save_contact_message():
    data = request.get_json()

    # Validate the data
    if not data.get("name") or not data.get("email") or not data.get("phone") or not data.get("subject") or not data.get("message"):
        return jsonify({"error": "All fields are required."}), 400

    # Prepare the contact message data
    new_message = {
        "name": data["name"],
        "email": data["email"],
        "phone": data["phone"],
        "subject": data["subject"],
        "message": data["message"],
        "date": datetime.now().isoformat(),  # Save current date and time
    }

    # Insert the message into MongoDB
    result = contact_collection.insert_one(new_message)
    new_message["id"] = str(result.inserted_id)
    return jsonify(new_message), 201

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)  # Expose to external network (0.0.0.0)
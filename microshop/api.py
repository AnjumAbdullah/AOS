from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # To allow communication with the React frontend

# In-memory databases for demonstration purposes
products = [
    {"id": 1, "title": "Stylish Jacket", "description": "Comfortable and warm jacket for winter.", "price": 59.99},
    {"id": 2, "title": "Running Shoes", "description": "Lightweight shoes for everyday running.", "price": 89.99},
    {"id": 3, "title": "Smart Watch", "description": "Track your fitness and stay connected.", "price": 199.99},
]

orders = []  # Store orders

# Helper function to find a product by ID
def find_product(product_id):
    return next((p for p in products if p["id"] == product_id), None)

# Routes for CRUD operations
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
    """Retrieve all orders."""
    return jsonify(orders)

@app.route('/api/orders', methods=['POST'])
def create_order():
    """Save a new order."""
    data = request.get_json()

    # Validate order data
    if not data.get("name") or not data.get("address") or not data.get("items") or not data.get("total"):
        return jsonify({"error": "Invalid order data"}), 400

    new_order = {
        "id": len(orders) + 1,
        "name": data["name"],
        "address": data["address"],
        "items": data["items"],
        "total": data["total"],
        "date": data.get("date", ""),
    }
    orders.append(new_order)
    return jsonify(new_order), 201

if __name__ == '__main__':
    app.run(debug=True)

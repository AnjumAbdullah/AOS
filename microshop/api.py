from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from bson.objectid import ObjectId
import datetime

app = Flask(__name__)
CORS(app)  # Allow communication with React frontend

# MongoDB Configuration
MONGO_URI = "mongodb://mongodb:27017"  # Use 'mongodb' as the service name in Docker
client = MongoClient(MONGO_URI)
db = client['ecommerce']  # Database name
orders_collection = db['orders']  # Collection for orders

@app.route('/api/orders', methods=['GET'])
def get_orders():
    """Retrieve all orders."""
    orders = list(orders_collection.find())
    # Convert ObjectId to string for JSON serialization
    for order in orders:
        order['_id'] = str(order['_id'])
    return jsonify(orders)


@app.route('/api/orders', methods=['POST'])
def create_order():
    """Save a new order."""
    data = request.get_json()

    if not data.get("name") or not data.get("address") or not data.get("items") or not data.get("total"):
        return jsonify({"error": "Invalid order data"}), 400

    order = {
        "name": data["name"],
        "address": data["address"],
        "items": data["items"],
        "total": data["total"],
        "date": data.get("date", datetime.datetime.utcnow().isoformat())
    }
    result = orders_collection.insert_one(order)
    order["_id"] = str(result.inserted_id)  # Add the new order ID to the response
    return jsonify(order), 201


@app.route('/api/orders/<order_id>', methods=['GET'])
def get_order(order_id):
    """Retrieve a single order by ID."""
    order = orders_collection.find_one({"_id": ObjectId(order_id)})
    if not order:
        return jsonify({"error": "Order not found"}), 404
    order['_id'] = str(order['_id'])
    return jsonify(order)


@app.route('/api/orders/<order_id>', methods=['DELETE'])
def delete_order(order_id):
    """Delete an order by ID."""
    result = orders_collection.delete_one({"_id": ObjectId(order_id)})
    if result.deleted_count == 0:
        return jsonify({"error": "Order not found"}), 404
    return '', 204


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)

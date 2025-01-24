from flask import Flask, jsonify, request
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

API_URL = "https://dealership.naman.zip"

@app.route('/api/cars', methods=['GET'])
def get_cars():
    response = requests.get(f"{API_URL}/cars")
    return jsonify(response.json())

@app.route('/api/cars/sort', methods=['GET'])
def get_sorted_cars():
    key = request.args.get('key', 'price')
    ascending = request.args.get('direction', 'asc')
    response = requests.get(f"{API_URL}/cars/sort?key={key}&direction={ascending}")
    return jsonify(response.json())

@app.route('/api/car/<int:car_id>', methods=['GET'])
def get_car_details(car_id):
    response = requests.get(f"{API_URL}/car/{car_id}")
    return jsonify(response.json())

if __name__ == '__main__':
    app.run(debug=True)

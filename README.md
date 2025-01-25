# 🚗 Convergent Car Dealership

A simple web application to browse and view details of convergent cars. Built with **React** for the frontend and **Flask** for the backend.

---

## Project Structure

```
convergent-car-dealership/
|-- backend/         # Flask backend
|   |-- app.py       # Main Flask app
|   |-- requirements.txt  # Python dependencies
|-- frontend/        # React frontend
|   |-- src/
|   |   |-- components/
|   |   |   |-- Home.js
|   |   |   |-- CarDetails.js
|   |   |-- App.js
|   |   |-- index.js
|   |-- public/
|   |-- package.json # React dependencies
|-- README.md
```

---

## Features

- View cars sorted by price (lowest to highest).
- Click on a car to see detailed information.

---

## Installation and Setup

### 1. Clone the repository
```bash
git clone https://github.com/TanishG123/Covergent_Cars.git
cd convergent-car-dealership
```

### 2. Backend Setup (Flask)
```bash
cd backend
python -m venv convcars
source convcars/bin/activate  # On Windows use: convcars\Scripts\activate
pip install -r requirements.txt
python app.py
```

Backend will be running at: `http://127.0.0.1:5000/`

---

### 3. Frontend Setup (React)
```bash
cd frontend
npm install
npm start
```

Frontend will be running at: `http://localhost:3000/`

---

## API Endpoints

The backend fetches data from the API hosted at `https://dealership.naman.zip`. Key API endpoints include:

- `GET /cars` - Retrieve all available cars in sorted order.
- `GET /car/{id}` - Get detailed information about a specific car.

---

## Tech Stack

**Frontend:**

- React
- React Router
- Axios
- Bootstrap

**Backend:**

- Flask
- Flask-CORS
- Requests


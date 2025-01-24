Convergent Car Dealership
Project Overview
A simple web application to browse and view details of used cars. Built with React for the frontend
and Flask for the backend.
Project Structure
convergent-car-dealership/
|-- backend/ # Flask backend
| |-- app.py # Main Flask app
| |-- requirements.txt # Python dependencies
|-- frontend/ # React frontend
| |-- src/
| | |-- components/
| | | |-- Home.js
| | | |-- CarDetails.js
| | |-- App.js
| | |-- index.js
| |-- public/
| |-- package.json # React dependencies
|-- README.md
Installation and Setup
1. Clone the repository:
 git clone https://github.com/your-username/convergent-car-dealership.git
 cd convergent-car-dealership
2. Backend Setup (Flask):
 cd backend
 python -m venv venv
 source venv/bin/activate
 pip install -r requirements.txt
 python app.py
3. Frontend Setup (React):
 cd frontend
 npm install
 npm start
API Endpoints
- GET /cars - Retrieve all available cars.
- GET /cars/sort?key=price&direction=asc - Get cars sorted by price.
- GET /car/{id} - Get detailed information about a specific car.
Tech Stack
Frontend:
- React
- React Router
- Axios
- Bootstrap
Backend:
- Flask
- Flask-CORS
- Requests
License
This project is licensed under the MIT License.
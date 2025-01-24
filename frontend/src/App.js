import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Link, useParams} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
      axios.get('http://127.0.0.1:5000/api/cars')
          .then(response => setCars(response.data))
          .catch(error => console.error("Error fetching cars:", error));
  }, []);

  return (
      <div className="container mt-5">
          <h1 className="text-center mb-4">Convergent Car Dealership</h1>
          <div className="row">
              {cars.map(car => (
                  <div key={car.id} className="col-md-4 mb-4">
                      <div className="card shadow-lg">
                          <img 
                              src={car.image} 
                              className="card-img-top" 
                              alt={`${car.make} ${car.model}`} 
                              style={{ height: '200px', objectFit: 'cover' }} 
                          />
                          <div className="card-body">
                              <h5 className="card-title">{car.make} {car.model}</h5>
                              <p className="card-text"><strong>Price:</strong> ${car.price.toLocaleString()}</p>
                              <p className="card-text"><strong>Year:</strong> {car.year}</p>
                              <Link to={`/car/${car.id}`} className="btn btn-primary btn-block">
                                  View Details
                              </Link>
                          </div>
                      </div>
                  </div>
              ))}
          </div>
      </div>
  );
};

const CarDetails = () => {
    const { id } = useParams();
    const [car, setCar] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id) {
            setError("Invalid car ID");
            setLoading(false);
            return;
        }

        axios.get(`http://127.0.0.1:5000/api/car/${id}`)
            .then(response => {
                setCar(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching car details:", error);
                setError("Car not found");
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
      <div style={{ maxWidth: '600px', margin: '20px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h2>{car.year} {car.make} {car.model}</h2>
        <img src={car.image} alt={`${car.make} ${car.model}`} style={{ width: '100%', borderRadius: '8px' }} />
        <p><strong>Price:</strong> ${car.price}</p>
        <p><strong>Condition:</strong> {car.condition}</p>
        <p><strong>Mileage:</strong> {car.mileage.toLocaleString()} miles</p>
        <p><strong>Fuel Type:</strong> {car.fuel_type}</p>
        <p><strong>Transmission:</strong> {car.transmission}</p>
        <p><strong>Color:</strong> {car.color}</p>
        <p><strong>VIN:</strong> {car.vin}</p>
        <p><strong>Description:</strong> {car.description}</p>
        <a href="/" style={{ display: 'block', textAlign: 'center', marginTop: '20px', textDecoration: 'none', color: '#fff', background: '#007bff', padding: '10px 20px', borderRadius: '5px' }}>Back to Home</a>
    </div>
    );
};


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/car/:id" element={<CarDetails />} />
            </Routes>
        </Router>
    );
};

export default App;

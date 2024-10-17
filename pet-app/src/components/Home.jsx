import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PetCard from './PetCard';
import Button from './Button'; 

const Home = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetchPets();
  }, []);

  const fetchPets = () => {
    axios.get('http://localhost:3005/api/pets')
      .then((response) => {
        setPets(response.data);
      })
      .catch((error) => {
        console.error("Error fetching pets:", error);
      });
  };

  const deletePet = (id) => {
    axios.delete(`http://localhost:3005/api/pets/${id}`)
      .then(() => {
        fetchPets();
      })
      .catch((error) => {
        console.error("Error deleting pet:", error);
      });
  };

  return (
    <div className="container" style={{ marginLeft: '2rem' }}>
      <h1 className="title">Gestión de Mascotas</h1>
      <Link to="/add-pet">
        <Button label="Agregar mascota" />
      </Link>
      <div className="columns is-multiline">
        {pets.map((pet) => (
          <div className="column is-one-quarter" key={pet.id}>
            <PetCard pet={pet} deletePet={deletePet} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

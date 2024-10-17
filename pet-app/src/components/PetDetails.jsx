import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BackButton from './BackButton';

const PetDetails = () => {
  const { id } = useParams();
  const [pet, setPet] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3005/api/pets/${id}`)
      .then((response) => {
        setPet(response.data);
      })
      .catch((error) => {
        console.error("Error fetching pet details:", error);
      });
  }, [ ]);
 
  return (
    <div className="container" style={{ marginTop: '2rem', marginLeft: '2rem' }}>
      {pet ? 
        <>
        <BackButton />

        <div className="box">
          <h1 className="title is-3">{pet.name}</h1>
          <p>{pet.age}</p>
          <p>{pet.type}</p>
          <p>{pet.description}</p>
          <p>{pet.characteristics[0]}, {pet.characteristics[1]}, {pet.characteristics[2]}</p>
          <img src={pet.photo}></img>

        </div>
      </>
       : 
        <p>Cargando...</p>
      }
    </div>
  );
};

export default PetDetails;
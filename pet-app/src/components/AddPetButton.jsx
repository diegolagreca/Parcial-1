import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddPetButton = ({ name, age, type, description, characteristics, photo }) => {
    const navigate = useNavigate();

    const addPet = () => {
        if (name.trim() === '') {
            alert('El nombre es mandatorio.');
            return;
        }

        const newPet = { name, age, type, description, characteristics, photo };
        axios.post('http://localhost:3005/api/pets', newPet)
            .then(() => {
                navigate('/'); 
            })
            .catch((error) => {
                console.error("Error al agregar el juego:", error);
            });
    };

    return (
        <button className="button is-primary" onClick={addPet}>
        <span className="icon">
          <i className="fas fa-plus-circle"></i>
        </span>
        <span>Agregar Mascota</span>
      </button>
      );
};

export default AddPetButton;

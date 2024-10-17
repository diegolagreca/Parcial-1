import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Edad from './Edad';
import Tipo from './Tipo';
import Foto from './Foto';

import Button from './Button';
import BackButton from './BackButton';

const EditPet = () => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [characteristics, setCharacteristics] = useState('');
    const [photo, setPhoto] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Obtener el juego actual para pre-rellenar el formulario
        axios.get(`http://localhost:3005/api/pets/${id}`)
            .then((response) => {
                const pet = response.data;
                setName(pet.name);
                setAge(pet.age);
                setType(pet.type);
                setDescription(pet.description);
                setCharacteristics(pet.characteristics || []);
                setPhoto(pet.photo);

            })
            .catch((error) => {
                console.error("Error fetching Pet details:", error);
            });
    }, [id]);

    const updatePet = () => {
        if (name.trim() === '') {
            alert('El nombre es mandatorio.');
            return;
        }

        const updatedPet = { name, age, type, description, characteristics, photo };
        axios.put(`http://localhost:3005/api/pets/${id}`, updatedPet)
            .then(() => {
                navigate('/');
            })
            .catch((error) => {
                console.error("Error updating Pet:", error);
            });
    };

    return (
        <div className="container" style={{ marginLeft: '2rem' }}>
            <BackButton />
            <h2 className="title">Editar Mascota</h2>

            <div className="columns is-variable is-8 is-multiline">
                <div className="column is-full-tablet is-half-desktop">
                    <div className="field">
                        <label className="label">Nombre</label>
                        <div className="control">
                            <input
                                className="input"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Nombre de Mascota"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Descripcion</label>
                        <div className="control">
                            <input
                                className="input"
                                type="text"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Descripcion"
                            />
                        </div>
                    </div>
                    <Edad value={age} onChange={(e) => setAge(e.target.value)} />
                    <Tipo value={type} onChange={(e) => setType(e.target.value)} />
                    <Foto value={photo} onChange={(e) => setPhoto(e.target.value)} />

                </div>
            </div>
            

            <div className="control">
                <Button label="Actualizar Mascota" onClick={updatePet} />
            </div>
        </div>
    );
};

export default EditPet;

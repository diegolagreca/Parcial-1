import React, { useState } from 'react';
import Edad from './Edad';
import Tipo from './Tipo';
import Foto from './Foto';
import AddPetButton from './AddPetButton';
import BackButton from './BackButton';

const AddPet = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [photo, setPhoto] = useState('');


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
                <AddPetButton
                    name={name}
                    age={age}
                    type={type}
                    description={description}
                    photo={photo}
                />
            </div>
        </div>
    );
};

export default AddPet;

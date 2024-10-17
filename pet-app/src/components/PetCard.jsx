import React from 'react';
import DetailsButton from './DetailsButton';
import DeleteButton from './DeleteButton';
import EditPetButton from './EditPetButton'; 

const PetCard = ({ pet, deletePet }) => {
  return (
    <div className="card">
      <div className="card-content">
        <p className="title">{pet.name}</p>
        <img src={pet.photo}></img>
        <div className="buttons">
          <DetailsButton petId={pet.id} />
          <EditPetButton petId={pet.id} /> 
          <DeleteButton onDelete={() => deletePet(pet.id)} />
        </div>
      </div>
    </div>
  );
};

export default PetCard;

import React from 'react';
import { Link } from 'react-router-dom';

const EditPetButton = ({ petId }) => {
  return (
    <Link to={`/edit-pet/${petId}`}>
      <button className="button is-warning">
        <span className="icon">
          <i className="fas fa-edit"></i>
        </span>
        <span>Editar</span>
      </button>
    </Link>
  );
};

export default EditPetButton;

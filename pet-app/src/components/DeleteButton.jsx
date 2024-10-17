import React from 'react';

const DeleteButton = ({ onDelete }) => {
  const handleDelete = () => {
    if (window.confirm("¿Estás seguro de que deseas adoptar a esta mascota?")) {
      onDelete();
    }
  };

  return (
    <button className="button is-danger" onClick={handleDelete}>
      <span className="icon">
        <i className="fas fa-trash"></i>
      </span>
      <span>Adoptar</span>
    </button>
  );
};

export default DeleteButton;

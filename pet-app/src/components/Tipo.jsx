import React from 'react';

const Tipo = ({ value, onChange }) => {
  return (
    <div className="field">
      <label className="label">Tipo</label>
      <div className="control">
        <div className="select">
          <select value={value} onChange={onChange}>
            <option value="Cachorro">Perro</option>
            <option value="Senior">Gato</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Tipo;

import React from 'react';

const Edad = ({ value, onChange }) => {
  return (
    <div className="field">
      <label className="label">Edad</label>
      <div className="control">
        <div className="select">
          <select value={value} onChange={onChange}>
            <option value="Cachorro">Cachorro</option>
            <option value="Adulto">Adulto</option>
            <option value="Senior">Senior</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Edad;

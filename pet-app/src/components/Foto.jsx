import React from 'react';

const Foto = ({ value, onChange }) => {
  return (
    <div className="field">
      <label className="label">Foto</label>
      <div className="control">
        <div className="select">
          <select value={value} onChange={onChange}>
            <option value="https://img.freepik.com/vector-premium/labrador-retriever-es-ilustracion-vectorial-muy-bonita_969863-183791.jpg">Foto Perro</option>
            <option value="https://img.freepik.com/vector-gratis/ilustracion-icono-vector-dibujos-animados-lindo-gato-sentado-concepto-icono-naturaleza-animal-aislado-premium-vector-estilo-dibujos-animados-plana_138676-4148.jpg">Foto Gato</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Foto;

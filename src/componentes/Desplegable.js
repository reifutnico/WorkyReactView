import React from 'react';
import '../css/header.css';

const Desplegable = ({ texto }) => {
  return (
    <div className="desplegable-container">
      <button className="desplegable-button">
        {texto}
      </button>
      <ul className="desplegable-menu">
        <li>Opción 1</li>
        <li>Opción 2</li>
        <li>Opción 3</li>
      </ul>
    </div>
  );
};

export default Desplegable;


import React, { useState } from 'react';
import '../css/header.css';

const Desplegable = ({ texto }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="desplegable-container">
      <button onClick={toggleMenu} className="desplegable-button">
        {texto}
      </button>
      {isOpen && (
        <ul className="desplegable-menu">
          <li>Opción 1</li>
          <li>Opción 2</li>
          <li>Opción 3</li>
        </ul>
      )}
    </div>
  );
};

export default Desplegable;

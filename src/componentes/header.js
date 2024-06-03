import React from 'react';
import Logo from './logo';
import Desplegable from './desplegable';

import imgLogo from '../vendor/logo.png'; 

import '../css/header.css';

const Header = () => {
  return (
    <header>
      <div className='logo'><Logo destino="#Index" img={imgLogo} /></div>
      
      <div className='desplegable'>
      
      <Desplegable texto="Hogar" />
      <Desplegable texto="Educacion" />
      <Desplegable texto="Consultoria"  />
      <Desplegable texto="Diseño"  />
      <Desplegable texto="Desarollo personal" />
      
      </div>
    </header>
  );
}

export default Header;

//
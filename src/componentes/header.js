import React from 'react';
import Logo from './logo';
import Desplegable from './Desplegable';
import imgLogo from '../vendor/logo.png'; 
import '../css/header.css';

const Header = () => {
  return (
    <header>
      <div className='logo'>
        <Logo destino="#Index" img={imgLogo} />
      </div>
      <div className='desplegable'>
        <Desplegable texto="Hogar" />
        <Desplegable texto="Educación" />
        <Desplegable texto="Consultoría" />
        <Desplegable texto="Diseño" />
        <Desplegable texto="Desarrollo personal" />
      </div>
    </header>
  );
}

export default Header;

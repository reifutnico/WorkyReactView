import React from 'react';
import Logo from './logo';
import Desplegable from './Desplegable';
import imgLogo from '../vendor/logo.png'; 
import '../css/header.css';
<link href='https://fonts.googleapis.com/css?family=Abhaya Libre' rel='stylesheet'></link>

const Header = () => {
  return (
    <header>
      <div className='logo'>
        <Logo destino="#Index" img={imgLogo} />
      </div>
      <div className='desplegable'>
        <Desplegable texto="hogar" />
        <Desplegable texto="educación" />
        <Desplegable texto="consultoría" />
        <Desplegable texto="diseño" />
        <Desplegable texto="desarrollo personal" />
      </div>
    </header>
  );
}

export default Header;

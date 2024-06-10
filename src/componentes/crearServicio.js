import React from 'react';
import '../css/crearServicio.css';
import ImageUploadComponent from './imageUploadComponent';


<link href='https://fonts.googleapis.com/css?family=Abhaya Libre' rel='stylesheet'></link>



const CrearServicio = () => {
  return (
<form className="service-form">
    <h1>Crear servicio</h1>
    <ImageUploadComponent />
  </form>
);

    }
    export default CrearServicio;
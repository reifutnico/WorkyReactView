import React from 'react';
import imgDescargar from '../vendor/imgDescargar.png'; 
import imgDescargar2 from '../vendor/imgDescargar.png'; 

import BotonDownload from './BotonDownload';


const ImageUploadComponent = () => (
  <div className="image-upload">
    <img src={imgDescargar} alt="Upload" />
    <button type="button" className="download-icon">
      <BotonDownload destino="#Archivos" img={imgDescargar2} className="logo" />
    </button>
  </div>
);

export default ImageUploadComponent;
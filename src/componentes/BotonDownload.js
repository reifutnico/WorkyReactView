import React from 'react';

const BotonDownload = (prop) => {
    return (
      <div className='img'>
        <a href={prop.destino}>
          <img src={prop.img} alt='' />
        </a>
      </div>
    );
};

export default BotonDownload;

// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './css/header.css';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <Header />
      {/* Otros componentes o contenido */}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

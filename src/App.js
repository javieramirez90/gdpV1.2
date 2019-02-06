import React, { Component } from 'react';
import logo from './gdp-logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="pLeMiddle">
            GDP es la nueva tarjeta de crédito con la que podrás empezar a construir tu historial crediticio. 
            En esta primera etapa: quedarás registrado para que te notifiquemos cuando las tarjetas estén listas para emitirse. 
            En la segunda etapa: te pediremos algunos documentos para hacer el análisis de tu perfil, GDP podrá proporcionarte una tarjeta de crédito diseñada a tu medida.
          </p>
          <a
            className="App-link"
            href="https://steemitimages.com/p/2gsjgna1uruvUuS7ndh9YqVwYGPLVszbFLwwpAYXYD1GGDeG2sdiYSrncPjXda9aQEsd55qV2eQbWiPGrmUMf3ASDRaRqbf3mt8KUY7dFx9nJ6LwWN?format=match&mode=fit&width=640"
            target="_blank"
            rel="noopener noreferrer"
          >
            Solicítala.
          </a>
        </header>
      </div>
    );
  }
}

export default App;

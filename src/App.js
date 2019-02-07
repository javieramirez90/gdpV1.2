import React, { Component } from "react";
import Login from "./components/Login";
import "./App.css";
// import Options from "./components/Options";
import { sendForm, checkIfSubmitedBefore } from "./services/firebase";
import swal from "sweetalert2";
import logo from './gdp-logo.png';


class App extends Component {

  state = {
    alreadySentInfo: true,
    user: null,
    finalMessage: null,
    loading: true,
    count: false
  };

  setUser = user => {
    this.setState({ user });
    checkIfSubmitedBefore(user).then(r => {
      if (r) this.setState({ finalMessage: "Ya hemos recibido tu información, en breve estaremos en contacto contigo." });
      else this.setState({ alreadySentInfo: false });
    });
  };

  fillForm = form => {
    const { user } = this.state;
    // console.log(votes)
    sendForm(form, user)
      .then(r => {
        this.setState({ finalMessage: "¡Gracias por tu registro, en breve estaremos en contacto contigo!" });
      })
      .catch(error => {
        swal({
          type: "error",
          title: "Oops...",
          text: "Algo salió mal, vuelve a intentar",
          footer: "" + error
        });
      });
  };

  componentWillMount() {}

  render() {
    const { user, finalMessage, alreadySentInfo } = this.state; //count between finalMessage and alreadySentInfo
    // if (count) return <Count />;
    // if(loading) return <img src="https://i.redd.it/ounq1mw5kdxy.gif" />
    if (finalMessage) {
      return (
        <div className="fl">
          <div>
            <img
              src={logo}
              alt="GDP logo"
            />
            <h1 className="despedida">{finalMessage}</h1>
          </div>
        </div>
      );
    }

    if (!user) return <Login setUser={this.setUser} />;
    // if (user && !alreadySentInfo) return <Options makeVote={this.makeVote} />;
    if (user && alreadySentInfo) {
      return (
        <div className="fl">
          <div>
            <img
              src={logo}
              alt="GDP logo"
            />
            <h1 className="despedida">Cargando...</h1>
          </div>
        </div>
      );
    }
    // return (
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <p className="pLeMiddle">
    //         GDP es la nueva tarjeta de crédito con la que podrás empezar a construir tu historial crediticio. 
    //         En esta primera etapa: quedarás registrado para que te notifiquemos cuando las tarjetas estén listas para emitirse. 
    //         En la segunda etapa: te pediremos algunos documentos para hacer el análisis de tu perfil, GDP podrá proporcionarte una tarjeta de crédito diseñada a tu medida.
    //       </p>
    //       <a
    //         className="App-link"
    //         href=""
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Solicítala.
    //       </a>
    //     </header>
    //   </div>
    // );
  }
}

export default App;

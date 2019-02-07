import React, { Component } from "react";
import firebase, { redirectLogin } from "../services/firebase";
import swal from "sweetalert2";
import logo from '../gdp-logo.png';

class Login extends Component {
  state = {
    user: null
  };

  componentWillMount() {
    this.checkLogin();
    this.login();
  }

  checkLogin = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.setUser(user);
      }
    });
  };

  login = () => {
    firebase
      .auth()
      .getRedirectResult()
      .then(result => {
        if (result.credential) {
          this.props.setUser(result.user);
        }
      })
      .catch(function(error) {
        swal({
          type: "error",
          title: "Oops...",
          text: "Algo salió mal, vuelve a intentar",
          footer: "" + error
        });
      });
  };

  facebookLogin = () => {
    redirectLogin(true);
  };

  gmailLogin = () => {
    redirectLogin();
  };

  render() {
    return (
      <div className="login">
        <div>
          <img
            src={logo}
            alt="GDP logo"
          />
          <h2>¿Estás listo para registrarte?</h2>
          <button className="btn" onClick={this.gmailLogin}>
            Regístrate / Solicítala
          </button>
        </div>
      </div>
    );
  }
}

export default Login;

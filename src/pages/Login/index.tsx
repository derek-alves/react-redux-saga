import React from "react";

import Logo from "../../assets/logo.svg";

import "./styles.css";

const Login: React.FC = () => {
  return (
    <div className="container">
      <img src={Logo} alt="" />
      <div className="input-section">
        <div className="input-wrapper">
          <label htmlFor="name" className="form__label">
            E-mail
          </label>
          <input
            type="input"
            className="form__field"
            placeholder="Name"
            name="name"
            id="name"
            required
          />
        </div>

        <div className="input-wrapper">
          <label htmlFor="name" className="form__label">
            Senha
          </label>
          <input
            type="input"
            className="form__field"
            placeholder="Name"
            name="name"
            id="name"
            required
          />
        </div>
      </div>
      <button className="login-button"> Entrar </button>
    </div>
  );
};

export default Login;

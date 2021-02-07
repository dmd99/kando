import Layout from "../../components/Layout";
import React, {useState} from "react";
import "./loginStyle.scss";
import { Link } from "react-router-dom";


const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length < 8;
  }
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <Layout title="Connexion" description="Creer un compte gratuitement">
      <i className="fa fa-user-circle d-block mx-auto" aria-hidden="true"></i>
      <h3 className="d-block mx-auto m-text">Connexion</h3>
      <form onSubmit={handleSubmit}>
        <input
          className=" d-block m-input mx-auto"
          placeholder="E-mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className=" d-block m-input mx-auto"
          placeholder="*******"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="m-div">
          <button type="submit" disabled={!validateForm} className="btn m-button btn-outline-primary">
            Connexion
          </button>
        </div>
        <p className="text-center">
          Vous n'avez pas encore de compte ? <br />
          <a href="www.google.com" className="signin">
          </a>
          <Link to='/registration/Signin'>Insrivez vous gratuitement</Link>
        </p>
      </form>  
    </Layout>
  );
};

export default Login;

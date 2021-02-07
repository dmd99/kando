import Layout from "../../components/Layout";
import React,{useState} from "react";
import "./loginStyle.scss";


const Signin = () => {
  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const validateForm =()=>{
    return repassword===password && password.length>8
  }
  return (
    <Layout title="Inscription" description="This is the Cart page">
      <i className="fa fa-user-circle d-block mx-auto" aria-hidden="true"></i>
      <h3 className="d-block mx-auto m-text">Inscription</h3>
      <form>
        <input
          className=" d-block m-input mx-auto"
          placeholder="Prénom"
          type="name"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
          required
        />
        <input
          className=" d-block m-input mx-auto"
          placeholder="Nom"
          type="nom"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
          required
        />
        <input
          className=" d-block m-input mx-auto"
          placeholder="E-mail"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className=" d-block m-input mx-auto"
          id="password"
          placeholder="*********"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          className=" d-block m-input mx-auto"
          placeholder="Confirmer le mot de passe"
          type="password"
          value={repassword}
          onChange={(e) => setRepassword(e.target.value)}
          required
        />
        <div className="m-div">
          <button type="submit" disabled={validateForm()} className="btn m-button btn-outline-primary">
            Inscription
          </button>
        </div>
      </form>
    </Layout>
  );
};
export default Signin;

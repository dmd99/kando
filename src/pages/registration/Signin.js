import Layout from "../../components/Layout";
import React from "react";
import axios from "axios";

import "./loginStyle.scss";
import { Component } from "react";


class Signin extends Component {
  // const [email, setEmail] = useState("");
  // const [fname, setFname] = useState("");
  // const [lname, setLname] = useState("");
  // const [password, setPassword] = useState("");
  // const [repassword, setRepassword] = useState("");

  constructor() {
    super();
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
      islogged: false,
    };
    this.changeFname = this.changeFname.bind(this);
    this.changeLname = this.changeLname.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  changeFname(e) {
    this.setState({
      fname: e.target.value,
    });
  }
  changeLname(e) {
    this.setState({
      lname: e.target.value,
    });
  }
  changePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  changeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const registered = {
      fname: this.state.fname,
      lname: this.state.lname,
      email: this.state.email,
      password: this.state.password,
    };
    axios
      .post("http://localhost:4000/app/signup", registered)
      .then((response) =>{ console.log(response.data);});

    window.location = '/'    
  }

  render() {
    return (
      <Layout title="Inscription" description="This is the Cart page">
        <i className="fa fa-user-circle d-block mx-auto" aria-hidden="true"></i>
        <h3 className="d-block mx-auto m-text">Inscription</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            className=" d-block m-input mx-auto"
            placeholder="Prénom"
            type="name"
            value={this.state.fname}
            onChange={this.changeFname}
            required
          />
          <input
            className=" d-block m-input mx-auto"
            placeholder="Nom"
            type="nom"
            value={this.state.lname}
            onChange={this.changeLname}
            required
          />
          <input
            className=" d-block m-input mx-auto"
            placeholder="E-mail"
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.changeEmail}
            required
          />
          <input
            className=" d-block m-input mx-auto"
            id="password"
            placeholder="*********"
            type="password"
            value={this.state.password}
            onChange={this.changePassword}
            required
          />
          <input
            className=" d-block m-input mx-auto"
            placeholder="Confirmer le mot de passe"
            type="password"
            value={this.state.repassword}
            required
          />
          <div className="m-div">
            <button type="submit" className="btn m-button btn-outline-primary">
              Inscription
            </button>
          </div>
        </form>
      </Layout>
    );
  }
}
export default Signin;

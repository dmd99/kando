import Layout from "../../components/Layout";
import React, { useState } from "react";
import "./loginStyle.scss";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import loginIllus from "../../components/5098290-ai.svg";
import "./loginStyle.scss";
import Typography from "@material-ui/core/Typography";
import { Grid, Hidden, IconButton } from "@material-ui/core";
import { Facebook, Twitter, User } from "react-feather";

const useStyles = makeStyles({
  illusr: {
    // position: "absolute",
    width: "65%",
    alignSelf: "center",
    margin: " 0px auto",
  },
  center: {
    margin: "1px auto",
    width: "300px",
  },
  form: {
    border: "1px solid gray",
    borderRadius: "30px",
    boxShadow: "5px 5px 5px gray",
    marginTop: "80px",
    padding: "30px",
  },
  user: {
    width: "100%",
    textAlign: "center",
  },
});

const Login = () => {
  const classes = useStyles();
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
      <Grid container  alignItems="center" spacing={1}>
        <Hidden smDown>
        <Grid item xs={6}>
          <img className={classes.illusr} src={loginIllus} alt="..." />
        </Grid>
        </Hidden>
        <Grid item>
          <form className={classes.form} onSubmit={handleSubmit}>
            <div className={classes.user}>
              <User size="80" />
            </div>
            <h3 className="d-block mx-auto m-text">Connexion</h3>

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
            <Grid container className={classes.center}>
              <Grid item>
                <button
                  type="submit"
                  disabled={!validateForm}
                  className="btn m-button btn-outline-primary"
                >
                  Connexion
                </button>
              </Grid>
              <Grid item>
                <IconButton>
                  <Facebook />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton>
                  <Twitter />
                </IconButton>
              </Grid>
            </Grid>
            <Typography variant="body2" color="initial">
              Vous n'avez pas encore de compte ?
            </Typography>

            <Typography variant="body1" color="initial">
              <Link to="/registration/Signin">Insrivez vous gratuitement</Link>
            </Typography>
          </form>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Login;

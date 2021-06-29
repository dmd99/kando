import { Container } from "@material-ui/core";
import {
  makeStyles,
  Typography,
  Grid,
  Box,
  Paper,
  Button,
} from "@material-ui/core";
import { Carousel } from "3d-react-carousal";
import React from "react";
import Layout from "../../components/Layout";
import "./homeModule.css";
import { DollarSign, MessageSquare, Truck, Shield, ShoppingBag, User } from "react-feather";

const useStyles = makeStyles({
  root: {
    paddingTop: "50px",
  },
  homeHeader: {
    width: "fit-content",
  },
  categories: {
    background: "#fff",
    padding: "0",
    width: "300px",
    borderRadius: "16px",
    boxShadow: " 0px 2px 12px rgba(183, 189, 196, 0.503551)",
    paddingBottom: "10px",
  },
  categoriesTitle: {
    background: "#27313D",
    color: "#fff",
    borderRadius: "15px 15px 0px 0px",
    margin: 0,
    padding: "8px 12px",
    fontFamily: "Viga",
  },
  categoriesUl: {
    borderRadius: "16px",
    listStyleType: "none",
  },
  categoriesLi: {
    background: "#fff",
    borderTop: "1px solid rgba(39, 49, 61, 0.2)",
    fontFamily: "Lato",
    textTransform: "uppercase",
    padding: "10px 5px",
  },
  carousel: {
    background: "#fff",
    boxShadow: " 0px 2px 12px rgba(183, 189, 196, 0.503551)",
    margin: "0 32px",
    borderRadius: "16px",
  },
  paper: {
    padding: "10px",
    fontFamily: "Lato",
    maxWidth: "300px",
    Width: "100%",
  },
  markting: {
    marginTop: "50px",
  },
});

let slides = [
  <img src="/img/carous1.jpg" alt="1" />,
  <img src="/img/carous2.jpg" alt="1" />,
  <img src="/img/carous1.jpg" alt="1" />,
];

const Home = () => {
  const classes = useStyles();
  return (
    <Layout title="Boutique" description="Trouvez votre bonheur">
      <div className={classes.root}>
        <Container>
          <Grid alignItems="center" container spacing={4}>
            <Grid item lg={3} sm={3}>
              <Box className={classes.categories}>
                <h3 className={classes.categoriesTitle}>Categories</h3>
                <div className={classes.categoriesUl}>
                  <h6 className={classes.categoriesLi}>Ordinateurs</h6>
                  <h6 className={classes.categoriesLi}>Serveur</h6>
                  <h6 className={classes.categoriesLi}>Logiciels</h6>
                  <h6 className={classes.categoriesLi}>
                    Peripheriques et imprimantes
                  </h6>
                  <h6 className={classes.categoriesLi}>
                    Accesoires et multimedia
                  </h6>
                </div>
              </Box>
            </Grid>
            <Grid className={classes.carousel} item lg={8} md={8} sm={4}>
              <Carousel slides={slides} autoplay={true} interval={7000} />
            </Grid>
          </Grid>
        </Container>
        <Typography className="text-center m-4 p-2" variant="h6">
          Vente de matériel et consommable informatique au Maroc pour les
          professionnels et particumiers
        </Typography>
        <Container className={classes.markting}>
          <Grid justify="center" container spacing={5}>
            <Grid item lg={3}>
              <Paper className={classes.paper}>
                <MessageSquare color="#2F8BD5" size="32px" strokeWidth="2px" />
                &nbsp;
                <strong className="bold">Conseils et devis</strong>
                <br /> Des spécialistes à votre écoute
              </Paper>
            </Grid>
            <Grid item lg={3}>
              <Paper className={classes.paper}>
                <DollarSign color="#2F8BD5" size="32px" strokeWidth="2px" />
                &nbsp;
                <strong className="bold">Prix bas garantis </strong>
                <br />
                sur tous nos produits
              </Paper>
            </Grid>
            <Grid item lg={3}>
              <Paper className={classes.paper}>
                <Truck color="#2F8BD5" size="32px" strokeWidth="2px" />
                &nbsp;
                <strong className="bold">Livraison express</strong> <br /> chez
                vous en 24/48h
              </Paper>
            </Grid>
            <Grid item lg={3}>
              <Paper className={classes.paper}>
                <Shield color="#2F8BD5" size="32px" strokeWidth="2px" />
                &nbsp;
                <b className="bold">Paiements sécurisés</b>
                <br /> Vous achetez ici en sécurité
              </Paper>
            </Grid>
          </Grid>
        </Container>
        <Container className="m-4 p-2">
          <Grid container spacing={4} justify="center">
            <Grid item>
              <Button href="/shop" variant="contained" color="primary">
                  <ShoppingBag /> &nbsp;
                Accéder a la boutique
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="secondary">
                <User />&nbsp;
                S' incrire
              </Button>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Layout>
  );
};

export default Home;

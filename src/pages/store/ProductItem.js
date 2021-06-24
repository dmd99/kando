import { CartContext } from "../../contexts/CartContext";
import { formatNumber } from "../../helpers/utils";
import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Grid, IconButton } from "@material-ui/core";
import { Heart, PlusCircle, Maximize } from "react-feather";

const useStyles = makeStyles({
  root: {
    width: "100%",
    padding: "20px",
    borderRadius: "9px",
    boxShadow: " 1px 0px 20px #cacaca",
  },
  gridicon: {
    background: "#242526",
    borderRadius: "10px",
    border: "2px solid #242526",
    boxShadow: "3px 5px 10px gray",
  },
  sgridicon: {
    background: "#fff",
    borderRadius: "10px",
    border: "2px solid #242526",
    boxShadow: "3px 5px 10px gray",
  },
  image: {
    borderRadius: "7px",
    overflow: "auto",
    width:"100%",
    height:"100%",
    margin: "0 auto",
  },
  price: {
    position: "absolute",
    textAlign: "center",
    background: "rgba(37,38,39,0.4)",
    color: "white",
    borderRadius: "100%",
    width: "30px",
    height: "30px"
  },
});

const ProductItem = ({ product }) => {
  const { addProduct, cartItems, increase } = useContext(CartContext);
  const isInCart = (product) => {
    return !!cartItems.find((item) => item.id === product.id);
  };
  const classes = useStyles();
 

  return (
    <Grid item lg={3} md={4} sm={6} xs={12}>
      <Card className={classes.root}>
        <Typography
          className={classes.price}
          variant="subtitle1"
          component="h6"
        >
          {product.id}
        </Typography>
        <CardMedia
          className={classes.image}
          component="img"
          alt="..."
          src={product.photo + "?v=" + product.id}
          title={product.description}
        />
        <CardContent>
          <Typography noWrap variant="subtitle1">
            {product.name}
          </Typography>
          <Typography variant="h6" component="h3" className="text-left">
            {formatNumber(product.price)}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton>
            <Maximize  color="black"/>
          </IconButton>

          <IconButton>
            <Heart color="black" />
          </IconButton>

          {isInCart(product) && (
            <button
              onClick={() => increase(product)}
              className="btn btn-outline-primary btn-block"
            >
              Plus
            </button>
          )}

          {!isInCart(product) && (
            <button
              onClick={() => addProduct(product)}
              className="btn btn-primary btn-block"
            >
              Acheter
            </button>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductItem;

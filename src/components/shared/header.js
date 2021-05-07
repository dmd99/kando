import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import SwipeableTemporaryDrawer from "./drawer";
import {
  Button,
  Badge,
  Typography,
  AppBar,
  Hidden,
  TextField,
  Box,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import logo from "../icons/km.svg";
import { makeStyles } from "@material-ui/core/styles";

import {
  ShoppingCart,
  Search,
  Info,
  User,
  ShoppingBag,
  Heart,
  Mail,
} from "react-feather";

const useStyle = makeStyles({
  toolbar: {
    width: "100%",
    display: "flex",
    padding: "8px",
    alignItems: "center",
    background: "#fff",
    alignSelf: "center",
  },
  box: {
    display: "flex",
    alignSelf: "center",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
  },
  navBox: {
    display: "flex",
    alignSelf: "center",
  },
  navitemtext: {
    marginRight: "5px",
    color: "#000",
  },
  navitem: {
    width: "fit-content",
    textAlign: "right",
    display: "inline",
    fontSize: "20px",
    fontWeight: "600",
    fontFamily: "Verdana",
  },
});

const Header = () => {
  const { itemCount } = useContext(CartContext);
  const classes = useStyle();
  //const isLogged = false;
  return (
    <AppBar className={classes.toolbar}>
      <Box className={classes.box} justifyContent="space-between">
        {/* Affichage Mobile */}
        <Hidden smUp>
          <SwipeableTemporaryDrawer />
          <IconButton>
            <Mail href="/" />
          </IconButton>
          <img
            alt="..."
            style={{ margin: "0px auto" }}
            height="40px"
            src={logo}
          />
        </Hidden>
        <Hidden smDown>
          <Typography
            className={classes.navitem}
            component={Button}
            href="/"
            variant="h4"
          >
            <img alt="..." height="30px" src={logo} />
            Kando Market
          </Typography>
        </Hidden>
        <Hidden mdUp only="xs">
          <Typography
            className={classes.navitem}
            component={Button}
            href="/"
            variant="h4"
          >
            K<img alt="..." height="30px" src={logo} />M
          </Typography>
          <SwipeableTemporaryDrawer />
        </Hidden>
        <div className={classes.navBox}>
          {/* Large Display */}
          <Hidden smDown>
            <TextField
              style={{ marginRight: "10px", alignSelf: "center" }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />
            <IconButton
              className={classes.navitem}
              href="/shop"
              aria-label="cart"
            >
              <ShoppingBag className={classes.navitemtext} />
            </IconButton>
            <IconButton
              className={classes.navitem}
              href="/cart"
              aria-label="cart"
            >
              <Badge badgeContent={itemCount} color="secondary">
                <ShoppingCart className={classes.navitemtext} />
              </Badge>
            </IconButton>
            <IconButton
              className={classes.navitem}
              href="/registration/login"
              aria-label="cart"
            >
              <User className={classes.navitemtext} />
            </IconButton>
            <IconButton href="/about">
              <Info />
            </IconButton>
          </Hidden>
        </div>
        <Hidden smUp>
          <IconButton
            className={classes.navitem}
            href="/registration/login"
            aria-label="cart"
          >
            <Search className={classes.navitemtext} />
          </IconButton>
          <IconButton
            className={classes.navitem}
            href="/registration/login"
            aria-label="cart"
          >
            <Heart className={classes.navitemtext} />
          </IconButton>
        </Hidden>
      </Box>
    </AppBar>
  );
};
export default Header;

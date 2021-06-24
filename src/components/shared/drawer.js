import React, { useContext } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { IconButton, Badge } from "@material-ui/core";
import {
  Menu,
  Home as HomeIcon,
  ShoppingCart,
  ShoppingBag,
  User,
  LogOut,
} from "react-feather";
import { CartContext } from "../../contexts/CartContext";

import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const { itemCount } = useContext(CartContext);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };



  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* Partie Logo */}
      <img
        style={{ display: "Block", margin: " 5px auto" }}
        width="150px"
        alt="logo-kando"
        src="km.svg"
      />
      <Divider />
      {/* Partie MAPING */}
      <Link to="/">
        <ListItem button value="test">
          <ListItemIcon style={{color:"#000"}}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary={"Acceuil"} />
        </ListItem>
      </Link>
      <Link to="/shop">
        <ListItem button value="test">
          <ListItemIcon style={{color:"#000"}}>
            <ShoppingBag />
          </ListItemIcon>
          <ListItemText primary={"Boutique"} />
        </ListItem>
      </Link>
      <Link to="/cart">
        <ListItem button value="test">
          <ListItemIcon style={{color:"#000"}}>
            <ShoppingCart />
          </ListItemIcon>
          <ListItemText primary={"Panier"} />
        </ListItem>
      </Link>
      <Divider />
      <List>
        <Link to="/registration/login">
          <ListItem button value="test">
            <ListItemIcon style={{color:"#000"}}>
              <User />
            </ListItemIcon>
            <ListItemText primary={"Se connecter"} />
          </ListItem>
        </Link>
        <Link to="/about">
          <ListItem button value="test">
            <ListItemIcon style={{color:"#000"}}>
              <LogOut />
            </ListItemIcon>
            <ListItemText primary={"Se déconnecter"} />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <Link to="/">
          <ListItem button value="test">
            <ListItemText primary={"A propos"} />
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <div style={{ zIndex: "222222" }}>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton onClick={toggleDrawer(anchor, true)}>
            <Badge badgeContent={itemCount} color="secondary">
              <Menu color="black"/>
            </Badge>
          </IconButton>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}

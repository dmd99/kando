import React from "react";
import clsx from "clsx";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CartIon from "@material-ui/icons/Home";
import StoreIcon from "@material-ui/icons/Store";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";




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

    setState({...state, [anchor]: open});
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
      <img style={{display:"Block",margin:"10px auto"}} width="150px" alt="logo-kando" src="img/knd-logo.png"/>
      <List>
        <ListItem button>
          <ListItemIcon></ListItemIcon>
          <ListItemText Primary={"Kando-Market"} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <Link to="/">
          <ListItem button>
            <ListItemIcon>
              <CartIon />
            </ListItemIcon>
            <ListItemText primary={"Acceuil"} />
          </ListItem>
        </Link>
      </List>
      <List>
        <Link to="/shop">
          <ListItem button>
            <ListItemIcon>
              <StoreIcon />
            </ListItemIcon>
            <ListItemText primary={"Boutique"} />
          </ListItem>
        </Link>
      </List>
      {/* <List>
        <ListItemLink href="#simple-list">
          <ListItemText primary="Spam" />
        </ListItemLink>
      </List> */}
      <List>
        <Link to="/cart">
          <ListItem button value="test">
            <ListItemIcon>
              {" "}
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary={"Panier"} />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <ListItem button value="test">
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary={"Se connecter"} />
        </ListItem>
        <ListItem button value="test">
          <ListItemIcon>
            <ExitToAppIcon/>
          </ListItemIcon>
          <ListItemText primary={"Se déconnecter"} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <Link to="/about">
          <ListItem button value="test">
            <ListItemText primary={"A propos"} />
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <div style={{zIndex: "22222222222"}}>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <i className="fa fa-bars"></i>
          </Button>
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

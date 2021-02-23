import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CartIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
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
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
      <ListItem button value="test">
            {/* <ListItemIcon> <CartIcon /></ListItemIcon> */}
            <ListItemText Primary={"Kando-Market"} />
          </ListItem>
      </List>
      <Divider />
      <List>
          <ListItem button value="test">
            <ListItemIcon> <CartIcon /></ListItemIcon>
            <ListItemText primary={"Acceuil"} />
          </ListItem>
      </List>
      <List>
          <ListItem button value="test">
            <ListItemIcon> <CartIcon /></ListItemIcon>
            <ListItemText primary={"Boutique"} />
          </ListItem>
      </List>
      <List>
          <ListItem button value="test">
            <ListItemIcon> <CartIcon /></ListItemIcon>
            <ListItemText primary={"Panier"} />
          </ListItem>
      </List>
      <Divider />
      <List>
          <ListItem button value="test">
            <ListItemIcon> <UserIcon /></ListItemIcon>
            <ListItemText primary={"Panier"} />
          </ListItem>
      </List>
    </div>
  );

  return (
    <div  style={{zIndex:"22222222222"}}>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><i className="fa fa-bars"></i></Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
          
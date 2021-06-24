import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Home, Menu, ShoppingCart, Star, User } from 'react-feather';
import { Badge } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

const MenuContext =()=>{
  return(
    <Badge color="secondary">
      <Menu />
    </Badge>

  );
}

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction href="/" label="Acheter" value="recents" icon={<Home />} />
      <BottomNavigationAction href="" label="Categories" value="favorites" icon={<MenuContext />} />
      <BottomNavigationAction href="" label="Nouveau" value="nearby" icon={<Star />} />
      <BottomNavigationAction href="/registration/login" label="Moi" value="folder" icon={<User />} />
      <BottomNavigationAction href="/cart" label="Panier" value="cart" icon={<ShoppingCart />} />
    </BottomNavigation>
  );
}
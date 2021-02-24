import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../../contexts/CartContext';
import {CartIcon} from '../icons';
import SwipeableTemporaryDrawer from "./drawer"
import HomeIcon from "@material-ui/icons/Home";
import StoreIcon from "@material-ui/icons/Store";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";


import styles from './header.module.scss';


const Header = () => {
    const {itemCount} = useContext(CartContext);
    return ( 
        <header className={styles.header}>
            <Link to="/" className={styles.brand}>Kando-market</Link>
            <nav id="nav" className={styles.nav}>
                <Link to='/shop'><StoreIcon /> Boutique</Link>
                <Link to='/cart'> <ShoppingCartIcon/>Panier ({itemCount})</Link>
                <Link to='/registration/login'><AccountCircleIcon />Compte</Link>
                <Link to='/about'>A propos</Link>
            </nav>
            <span className={styles.btn}>
            <SwipeableTemporaryDrawer/>
            </span>
        </header>
     );
}
export default Header;
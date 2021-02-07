import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../../contexts/CartContext';
import {CartIcon} from '../icons';
import styles from './header.module.scss';

const Header = () => {

    const {itemCount} = useContext(CartContext);

    return ( 
        <header className={styles.header}>
            <Link to='/'>Boutique</Link>
            <Link to='/about'>A propos</Link>
            <Link to='/registration/login'>Compte</Link>
            <Link to='/cart'> <CartIcon/> Panier ({itemCount})</Link>

        </header>
     );
}
 
export default Header;
import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../../contexts/CartContext';
import {CartIcon} from '../icons';

import styles from './header.module.scss';


const Header = () => {
    const {itemCount} = useContext(CartContext);
    return ( 
        <header className={styles.header}>
            <Link to="/" className={styles.brand}>Kando-market</Link>
            <nav id="nav" className={styles.nav}>
                <Link to='/shop'><i className="fa fa-home" aria-hidden="true"></i> Boutique</Link>
                <Link to='/cart'> <CartIcon/>Panier ({itemCount})</Link>
                <Link to='/registration/login'><i className="fa fa-user" aria-hidden="true"></i> Compte</Link>
                <Link to='/about'>A propos</Link>

            </nav>
            <button className={styles.btn}><i class="fa fa-bars"></i></button>
        </header>
     );
}
export default Header;
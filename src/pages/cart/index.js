import React, { useContext } from 'react';
import Layout from '../../components/Layout';

import CartProducts from './CartProducts';
import { CartContext } from '../../contexts/CartContext';
import { formatNumber } from '../../helpers/utils';
import { Link } from 'react-router-dom';

const Cart = () => {

    const { total, cartItems, itemCount, clearCart, checkout, handleCheckout } = useContext(CartContext);
    
    return ( 
        <Layout title="Panier" description="test" >
            <div >
                <div className="text-center mt-5">
                    <h1>Panier</h1>
                    <p>Ceci est le votre panier.</p>
                </div>

                <div className="row no-gutters justify-content-center">
                    <div className="col-sm-9 p-3">
                        {
                            cartItems.length > 0 ?
                            <CartProducts/> :
                            <div className="p-3 text-center text-muted">
                                Votre panier est vide
                            </div>
                        }

                        { checkout && 
                            <div className="p-3 text-center text-success">
                                <p>Paiement réussi</p>
                                <Link to="/" className="btn btn-outline-success btn-sm">BUY MORE</Link>
                            </div>
                        }
                    </div>
                    {
                        cartItems.length > 0 && 
                        <div className="col-sm-3 p-3">
                            <div className="card card-body">
                                <p className="mb-1">Articles au total</p>
                                <h4 className=" mb-3 txt-right">{itemCount}</h4>
                                <p className="mb-1">Paiement total</p>
                                <h3 className="m-0 txt-right">{formatNumber(total)}</h3>
                                <hr className="my-4"/>
                                <div className="text-center">
                                    <button type="button" className="btn btn-primary mb-2" onClick={handleCheckout}>Acheter</button>
                                    <button type="button" className="btn btn-outlineprimary btn-sm" onClick={clearCart}>Effacer</button>
                                </div>

                            </div>
                        </div>
                    }

                </div>
            </div>
        </Layout>
     );
}
 
export default Cart;
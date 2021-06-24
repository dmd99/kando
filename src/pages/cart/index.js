import React, { useContext, useReducer, useState } from "react";
import Layout from "../../components/Layout";
import emailjs from "emailjs-com";
import CartProducts from "./CartProducts";
import { CartContext } from "../../contexts/CartContext";
import { CartReducer,sumItems } from "../../contexts/CartReducer";

import { formatNumber } from "../../helpers/utils";
import { Link } from "react-router-dom";
import email from "../../services/email";

const Cart = () => {
  const { total, cartItems, itemCount, clearCart, checkout, handleCheckout } =
    useContext(CartContext);
  const storage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
  const initialState = { cartItems: storage, ...sumItems(storage), checkout: false };
  const [state, dispatch] = useReducer(CartReducer, initialState)
  const achatsGlobals = JSON.stringify(state)
  const [email, setEmail] = useState();
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [tel, settel] = useState();
  const [adress, setAdresse] = useState();
  console.log(state.cartItems);
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents default refresh by the browser
    const registered = {
      clientId: Math.floor(Math.random() * 5000),
      fname: fname,
      lname: lname,
      email: email,
      tel: tel,
      achatsGlobals: JSON.stringify(state.cartItems),
      adress: adress,
      totalAchats:state.total+" Dhs",
      nbElement:state.itemCount+" Elements",

    };
    console.log(registered);
    emailjs.send('service_k00c8ye', 'template_kvh2hov', registered, 'user_qmJt0yxuNlcEpAaMaZQHM')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <Layout title="Panier" description="test">
      <div>
        <div className="text-center mt-5">
          <h1>Panier</h1>
          <p>Ceci est le votre panier.</p>
        </div>

        <div className="row no-gutters justify-content-center">
          <div className="col-sm-9 p-3">
            {cartItems.length > 0 && !checkout ? (
              <CartProducts />
            ) : (
              <div className="p-3 text-center text-muted">Votre panier</div>
            )}

            {checkout && (
              <div className="p-3 text-center text-success">
                {/* <p>Paiement réussi</p>
                <Link to="/" className="btn btn-outline-success btn-sm">
                  ACHETER PLUS
                </Link> */}
                <div class="alert alert-info" role="alert">
                  Pour Confimer l'achat veuillez remplir le formulaire suivant
                </div>
                <form onSubmit={handleSubmit}>
                  <input
                    className=" d-block m-input mx-auto"
                    placeholder="Prénom"
                    type="name"
                    value={fname}
                    onChange={(e) => {
                      setFname(e.target.value);
                    }}
                    required
                  />
                  <input
                    className=" d-block m-input mx-auto"
                    placeholder="Nom"
                    type="nom"
                    value={lname}
                    onChange={(e) => {
                      setLname(e.target.value);
                    }}
                    required
                  />
                  <input
                    className=" d-block m-input mx-auto"
                    placeholder="E-mail"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    required
                  />
                  <input
                    className=" d-block m-input mx-auto"
                    id="tel"
                    placeholder="+212 12 34 56 78 90"
                    type="tel"
                    value={tel}
                    onChange={(e) => {
                      settel(e.target.value);
                    }}
                    required
                  />
                  <input
                    className=" d-block m-input mx-auto"
                    placeholder="Veuillez entrez votre adresse"
                    type="adress"
                    value={adress}
                    onChange={(e) => {
                      setAdresse(e.target.value);
                    }}
                    required
                  />
                  <div className="m-div">
                    <button
                      type="submit"
                      className="btn m-button btn-outline-primary"
                    >
                      Confimer l'achat
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
          {cartItems.length > 0 && (
            <div className="col-sm-3 p-3">
              <div className="card card-body">
                <p className="mb-1">Articles au total</p>
                <h4 className=" mb-3 txt-right">{itemCount}</h4>
                <p className="mb-1">Paiement total</p>
                <h3 className="m-0 txt-right">{formatNumber(total)}</h3>
                <hr className="my-4" />
                <div className="text-center">
                  <button
                    type="button"
                    className="btn btn-primary mb-2"
                    onClick={handleCheckout}
                  >
                    Acheter
                  </button>
                  <button
                    type="button"
                    className="btn btn-outlineprimary btn-sm"
                    onClick={clearCart}
                  >
                    Effacer
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Cart;

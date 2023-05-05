
import React, { useContext } from "react";

import { ShopContext } from "../../assess/shop-assess";

import { INVENTORY } from "../../products";

import { CartInventory } from "./cart-inventory";

import { useNavigate } from "react-router-dom";

import "./cart.css";

export const Cart = () => {

  const { cartItems, getCartAmount, checkout } = useContext(ShopContext);

  const totalAmount = getCartAmount();

  const navigate = useNavigate();

  return (

    <div className="cart">

      <div>

        <h1>Your Cart Items Here</h1>

      </div>

      <div className="cart-product" >

        {INVENTORY.map((product) => {

          if (cartItems[product.id] !== 0) {

            return <CartInventory data={product} />;
          }
        })}

      </div>

      {totalAmount > 0 ? (

        <div className="checkout">

          <p> Subtotal: ${totalAmount} </p>

          <button onClick={() => navigate("/")}> Continue Shopping </button>

          <button

            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Checkout{" "}

          </button>

        </div>
      ) : (


        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};

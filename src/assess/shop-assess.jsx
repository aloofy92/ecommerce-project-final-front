

import { createContext, useState } from "react";

import { INVENTORY } from "../products";


export const ShopContext = createContext(null);

const getCart = () => {

  let shoppingcart = {};

  for (let i = 1; i < INVENTORY.length + 1; i++) {

    shoppingcart[i] = 0;
  }

  return shoppingcart;
};


export const ShopContextProvider = (props) => {

  const [cartItems, setCartItems] = useState(getCart());

  const getCartAmount = () => {

    let cartAmount = 0;

    for (const item in cartItems) {

      if (cartItems[item] > 0) {

        let itemInfo = INVENTORY.find((product) => product.id === Number(item));

        cartAmount += cartItems[item] * itemInfo.price;
      }
    }
    return cartAmount;
  };



  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const updateCartItem = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const removeCartItem = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const shoppingCheckout = () => {

    setCartItems(getCart());
  };


  const cartValue = {

    addToCart,
    updateCartItem,
    removeCartItem,
    getCartAmount,
    shoppingCheckout,
    cartItems,
  };

  return (

    <ShopContext.Provider value={cartValue}>

      {props.children}

    </ShopContext.Provider>

  );
};
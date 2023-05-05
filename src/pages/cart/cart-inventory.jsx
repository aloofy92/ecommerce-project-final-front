import React, { useContext } from "react";

import { ShopContext } from "../../assess/shop-assess";

export const CartInventory = (props) => {

  const { id, productName, price, productImage } = props.data;

  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =

    useContext(ShopContext);

  return (
    <div className="cartInventory">

      <img src={productImage} />

      <div className="item-description">

        <p>
          <b>{productName}</b>

        </p>

        <p> Price: ${price}</p>

        <div className="countHandler">

          <button onClick={() => removeFromCart(id)}> - </button>

          <input
          
            value={cartItems[id]}

            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />

          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};

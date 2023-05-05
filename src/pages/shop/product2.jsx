import React, { useContext } from "react";

import { ShopContext } from "../../assess/shop-assess";

export const Product2 = (props) => {

  const { id, productName, price, productImage } = props.data;

  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (

    <div className="product2">

      <img  variant ="top"src={productImage}  height="280px"alt="prod-img"
      
      style={{ objectFit: 'contain'}}/>

      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> ${price}</p>
      </div>

      <button className="addToCartBttn" onClick={() => addToCart(id)}>

        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}

      </button>
    </div>
  );
};

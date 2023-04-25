import React from "react";

import { INVENTORY } from "../../products";

import { Product } from "./product";

import "./shop.css";

export const Shop = () => {

  return (

    <div className="shop">

      <div className="photography-shop-title">

      </div>

      <div className="inventory">
        
        {INVENTORY.map((product) => (

          <Product data={product} />
        ))}
      </div>
    </div>
  );
};

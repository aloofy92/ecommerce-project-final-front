import React from "react";

import { INVENTORY } from "../../products";

import { Product } from "./product";

import "./shop2.css";

export const Shop2 = () => {

  return (

    <div className="shop2">

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


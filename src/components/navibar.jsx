import React from "react";

import "./navibar.css";

import { Link } from "react-router-dom";

import { ShoppingCart, Camera } from "phosphor-react";



import Searchbar from "./searchbar";





export const Navibar = () => {

  return (

    <div className="navibar">

      <div className="links">

 
  
  <div>

    <p className="nav-text"> Behind The Lens </p> </div>
    
    <Searchbar className="custom-search" />
<div>
        <Link to="/"> Shop </Link>  

        <Link to="/contact"> Contact Us </Link>

        <Link to="/cart"><ShoppingCart size={30} />

        </Link>

        </div>

      </div>
      
     
    </div>
   

    
  );
};

// Phosphor is a flexible icon family for interfaces, diagrams, presentations 

// <Link to="/"> Shop Here </Link> --Changes the shop here text

// <Link to="/contact"> Contact Us </Link> -- changes the contact us text

// <Link to="/cart"><ShoppingCart size={40} /> -- changes the size of the shopping cart icon at top of page

//The useState hook is used to create a state variable called searchQuery which holds the value of the search query. 
//The handleSearchInputChange function is called whenever the user types in the search bar, 
// and updates the state variable accordingly. The handleSearchSubmit function is called when the user clicks the search button or presses the Enter key, 
// and can be used to handle the search query submission. The search bar is positioned within a div element and styled with CSS.
import React from "react";

import "./navibar2.css";

import { Link } from "react-router-dom";

import { NavDropdown } from 'react-bootstrap';

export const Navibar2 = () => {

  return (

    <div className="navibar2">

      <div>


<div>
      

      <NavDropdown title="Cameras" id="products-dropdown1">
<br/>
<br/>
<br/>
        <NavDropdown.Item href="/inventory1" id="prod1">Product 1</NavDropdown.Item>
<br/>
        <NavDropdown.Item href="/inventory2" id="prod2">Product 2</NavDropdown.Item>
<br/>
        <NavDropdown.Item href="/inventory3" id="prod3">Product 3</NavDropdown.Item>
<br/>
      </NavDropdown>

    
     <div> 

      <NavDropdown title="Camera Lenses" id="products-dropdown2">
<br/>
<br/>
<br/>
        <NavDropdown.Item href="/inventory4" id="prod1">Product 1</NavDropdown.Item>
<br/>
        <NavDropdown.Item href="/inventory5" id="prod2">Product 2</NavDropdown.Item>
<br/>
        <NavDropdown.Item href="/inventory6" id="prod3">Product 3</NavDropdown.Item>
<br/>
      </NavDropdown>

      </div>  
     <div> 

      <NavDropdown title="Camera accessories" id="products-dropdown3">
<br/>
<br/>
<br/>
        <NavDropdown.Item href="/inventory7" id="prod1">Product 1</NavDropdown.Item>
<br/>
        <NavDropdown.Item href="/inventory8" id="prod2">Product 2</NavDropdown.Item>
<br/>
        <NavDropdown.Item href="/inventory9" id="prod3">Product 3</NavDropdown.Item>
<br/>
      </NavDropdown>

      </div>  
     <div> 

      <NavDropdown title="Camera Bags" id="products-dropdown4">
<br/>
<br/>
<br/>
        <NavDropdown.Item href="/inventory10" id="prod1">Product 1</NavDropdown.Item>
<br/>
        <NavDropdown.Item href="/inventory11" id="prod2">Product 2</NavDropdown.Item>
<br/>
        <NavDropdown.Item href="/inventory12" id="prod3">Product 3</NavDropdown.Item>
<br/>
      </NavDropdown>

      </div>  
    </div>

        </div>

    </div>

   

    
  );
};
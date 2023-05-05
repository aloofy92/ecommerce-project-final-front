import React from "react";

import "./navibar2.css";



import { NavLink } from 'react-router-dom';

export const Navibar2 = () => {

        return (

          <nav>
            <ul className="nav-links2">
              <li><NavLink exact to="/">Home</NavLink></li>
              <li><NavLink to="/" >Products</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
            </ul>
          </nav>
        );
      }
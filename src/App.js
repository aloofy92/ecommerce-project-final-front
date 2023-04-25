import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ShopContextProvider } from "./assess/shop-assess";

import { Navibar } from "./components/navibar";

import { Navibar2 } from "./components/navibar2";

import { Shop } from "./pages/shop/shop";

import { Cart } from "./pages/cart/cart";

import { Contact } from "./pages/contact";



function App() {

  return (

    <div className="App">

      <ShopContextProvider>

        <Router>

          <Navibar />

          <Navibar2 />

          <Routes>

            <Route path="/" element={<Shop />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="/cart" element={<Cart />} />

          </Routes>

        </Router>

      </ShopContextProvider>
      
    </div>
  );
}

export default App;

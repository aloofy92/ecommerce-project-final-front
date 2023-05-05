import "./App.css";

import axios from "axios";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ShopContextProvider } from "./assess/shop-assess";

import { Navibar } from "./components/navibar";

import { Navibar2 } from "./components/navibar2";

import { Shop } from "./pages/shop/shop";

import { Shop2 } from "./pages/shop/shop2";

import { About } from "./pages/shop/about";

import { Cart } from "./pages/cart/cart";

import { Contact } from "./pages/contact";

import { useState, useEffect } from "react";

import { Product2 } from "./pages/shop/product2";





function App() {

  const [products, setProducts] = useState([]);

	const [shouldRefresh, setShouldRefresh] = useState(false);

	const url = "http://localhost:5001";

	//useEffect first argument, takes in an anonymous callback function. second argument, dependency array
	
  useEffect(() => {

		const fetchData = async () => {
			// fetch('url', { method: "POST"})
			//axios will parse the response from our backend back to us so we don't need response.json()
			const response = await axios.get(`${url}/products/all-products`);

			if (response.data.success) {

				setProducts(response.data.products);
			}
		};
		fetchData();

	}, [shouldRefresh]);
  return (

    <div className="App">

      <ShopContextProvider>

        <Router>

          <Navibar />

          <Navibar2 />

          <Routes>

            <Route path="/" element={<Shop />} />

            <Route path="/" element={<Shop2 />} />

            <Route path="/products" element={<Product2 />} />

            <Route path="/about" element={<About />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="/cart" element={<Cart />} />

          </Routes>

        </Router>

      </ShopContextProvider>
      
    </div>
  );
}

export default App;

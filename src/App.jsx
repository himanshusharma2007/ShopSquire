import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MyWishlist from "./pages/MyWishlist";
import Login from "./pages/Login";

import "./App.css";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";

const App = () => {
 
  const [wishedProducts, setWishedProducts] = useState([]);
  const [cartProducts, setcartProducts] = useState([]);
  const [product, setProduct] = useState({});
  var noOfCartItems = cartProducts.length;
  return (
    <div className="app ">
      {" "}
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                setProduct={setProduct}
                noOfCartItems={noOfCartItems}
                cartProducts={cartProducts}
                setcartProducts={setcartProducts}
                wishedProducts={wishedProducts}
                setWishedProducts={setWishedProducts}
              />
            }
          />
          <Route
            path="/mywishlist"
            element={
              <MyWishlist
                setProduct={setProduct}
                noOfCartItems={noOfCartItems}
                cartProducts={cartProducts}
                setcartProducts={setcartProducts}
                wishedProducts={wishedProducts}
                setWishedProducts={setWishedProducts}
              />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/cart"
            element={
              <Cart
                setProduct={setProduct}
                noOfCartItems={noOfCartItems}
                cartProducts={cartProducts}
                setcartProducts={setcartProducts}
              />
            }
          />
          <Route
            path="/product-details"
            element={
              <ProductDetails
                product={product}
                cartProducts={cartProducts}
                setcartProducts={setcartProducts}
                wishedProducts={wishedProducts}
                setWishedProducts={setWishedProducts}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

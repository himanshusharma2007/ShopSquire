import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MyWishlist from "./pages/MyWishlist";
import Login from "./pages/Login";

import "./App.css";
import Cart from "./pages/Cart";

const App = () => {
 
  const [wishedProducts, setWishedProducts] = useState([]);
  const [cartProducts, setcartProducts] = useState([]);
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
                noOfCartItems={noOfCartItems}
                cartProducts={cartProducts}
                setcartProducts={setcartProducts}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

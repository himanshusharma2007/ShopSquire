import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MyWishlist from "./pages/MyWishlist";
import Login from "./pages/Login";

import "./App.css";
import Cart from "./pages/Cart";

const App = () => {
  // const testobj = {
  //   id: 1,
  //   title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  //   price: 109.95,
  //   description:
  //     "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  //   category: "men's clothing",
  //   image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  //   rating: {
  //     rate: 3.9,
  //     count: 120,
  //   },
  // };

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

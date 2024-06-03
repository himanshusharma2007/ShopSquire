import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MyWishlist from "./pages/MyWishlist";
import Login from "./pages/Login";

import "./App.css";
import Cart from "./pages/Cart";

const App = () => {
  

    const [wishedProducts, setWishedProducts] = useState([]);
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              wishedProducts={wishedProducts}
              setWishedProducts={setWishedProducts}
            />
          }
        />
        <Route
          path="/mywishlist"
          element={
            <MyWishlist
              wishedProducts={wishedProducts}
              setWishedProducts={setWishedProducts}
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;

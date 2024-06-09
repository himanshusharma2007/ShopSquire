import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MyWishlist from "./pages/MyWishlist";
import Login from "./pages/Login";
import "./App.css";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import Signup from "./pages/Signup";
import Modal from "./components/Modal";
import { AuthProvider, useAuth } from "./hooks/UseAuth.jsx";

const App = () => {
  const [wishedProducts, setWishedProducts] = useState([]);
  const [cartProducts, setcartProducts] = useState([]);
  const [product, setProduct] = useState({});

  const [modelText, setModelText] = useState("");
  const [showModel, setShowModel] = useState(false);

  var noOfCartItems = cartProducts.length;

  return (
    <AuthProvider>
      <div className="app ">
        <Router>
          {showModel && (
            <Modal
              modelText={modelText}
              isOpen={showModel}
              onClose={() => setShowModel(false)}
            />
          )}
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Home
                  setModelText={setModelText}
                  setShowModel={setShowModel}
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
            <Route
              path="/login"
              element={
                <Login
                  setWishedProducts={setWishedProducts}
                  setcartProducts={setcartProducts}
                />
              }
            />
            <Route path="/signup" element={<Signup />} />
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
    </AuthProvider>
  );
};

export default App;

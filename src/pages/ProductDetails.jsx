import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { FaStar } from "react-icons/fa";
import BackBtn from "../components/BackBtn";
import { Link } from "react-router-dom";

const ProductDetails = ({
  product,
  setWishedProducts,
  wishedProducts,
  cartProducts,
  setcartProducts,
}) => {
  const { title, price, description, category, image, rating } = product;
  const [like, setLike] = useState(false);
  const [inCart, setInCart] = useState(false);
  useEffect(() => {
    const isLiked = 
      wishedProducts.some((p) => p.id === product.id);
    
    if (isLiked) {
      setLike(true);
    }
    const isIncart = cartProducts.some((p) => p.id === product.id);
  
    if (isIncart) {
      setInCart(true);
    }
  }, [like, inCart]);
  const handleAddtoWishlist = () => {
    setLike(true);
    setWishedProducts([...wishedProducts, product]);
  };
  const handleAddtoCart = () => {
    setInCart(true);
    setcartProducts([...cartProducts, product]);
    // console.log("in   handelAddCart:>> ", cartProducts);
  };
  return (
    <Layout pageHeading="Product Details  ">
      <div className=" relative mt-[25vh] md:mt-[20vh] device-screen mx-auto flex flex-col md:flex-row items-center  w-full">
        <div className="back absolute top-5 left-5 ">
          <BackBtn path="/" />
        </div>
        <div className="md:w-1/2 p-4  flex justify-center items-center ">
          <img
            src={image}
            alt={title}
            className="w-auto md:w-[30vw] h-[50vh] rounded-lg object-contain"
          />
        </div>
        <div className="md:w-1/2 p-4 md:pr-20 Lora">
          <h1 className="text-2xl font-medium mb-2 Ubuntu">{title}</h1>
          <p className="text-gray-600 mb-4">{category}</p>
          {rating && (
            <div className="flex items-center mb-4">
              <div className="flex items-center mr-2">
                <span className={"text-yellow-500"}>
                  <FaStar />
                </span>
              </div>
              <span className="text-gray-600">{rating.rate}</span>
            </div>
          )}
          <p className="text-gray-800 mb-4">{description}</p>
          <p className="text-2xl font-bold mb-4">${price}</p>
          <div className="flex space-x-2">
            {inCart ? (
              <Link to="/cart">
                <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300">
                  Go to Cart
                </button>
              </Link>
            ) : (
              <button
                onClick={handleAddtoCart}
                className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition duration-300"
              >
                Add to Cart
              </button>
            )}
            {like ? (
              <Link to="/mywishlist">
                <button className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition duration-300">
                  View in Wishlist
                </button>
              </Link>
            ) : (
              <button
                onClick={handleAddtoWishlist}
                className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition duration-300"
              >
                Add to Wishlist
              </button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;

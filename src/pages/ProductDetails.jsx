import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { FaStar } from "react-icons/fa";
import BackBtn from "../components/BackBtn";
import { Link } from "react-router-dom";
import useProductData from "../hooks/useProductData";
import NotFoundComp from "../components/Notfound";
import notfoundgif from "../assets/not-found-4064375-3363936.webp";
import { RiShareForward2Fill } from "react-icons/ri";
import { GiHeartPlus } from "react-icons/gi";
const ProductDetails = ({
  setWishedProducts,
  wishedProducts,
  cartProducts,
  setcartProducts,
}) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [like, setLike] = useState(false);
  const [inCart, setInCart] = useState(false);
  const { data, loading, error } = useProductData();

  useEffect(() => {
    if (data) {
      const selectedProduct = data.find((p) => p.id === parseInt(id));
      setProduct(selectedProduct || null);
    }
  }, [data, id]);

  useEffect(() => {
    if (product) {
      const isLiked = wishedProducts.some((p) => p.id === product.id);
      setLike(isLiked);
      const isInCart = cartProducts.some((p) => p.id === product.id);
      setInCart(isInCart);
    }
  }, [product, wishedProducts, cartProducts]);

  const handleAddtoWishlist = () => {
    if (product) {
      setLike(true);
      setWishedProducts([...wishedProducts, product]);
    }
  };

  const handleAddtoCart = () => {
    if (product) {
      setInCart(true);
      setcartProducts([...cartProducts, product]);
    }
  };
  const handleShare = () => {
    const shareUrl = `${window.location.origin}/product-details/${product.id}`;
    if (navigator.share) {
      navigator
        .share({
          title: product.title,
          url: shareUrl,
        })
        .then(() => console.log("Successful share"))
        .catch((error) => {
          console.error("Error sharing:", error);
          alert("Sharing failed. Please try again later.");
        });
    } else {
      navigator.clipboard
        .writeText(shareUrl)
        .then(() => alert("URL copied to clipboard"))
        .catch((error) => {
          console.error("Error copying to clipboard:", error);
          alert("Failed to copy URL to clipboard. Please try again.");
        });
    }
  };
  if (loading) {
    console.log("loading :>> ", loading);
    return (
      <Layout pageHeading="Product Details">
        <div
          role="status"
          className="mt-[25vh] md:mt-[20vh] device-screen flex justify-center items-center py-4"
        >
          <div className="w-12 h-12 border-4 border-blue-500 rounded-full border-r-transparent animate-spin"></div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!product && !loading) {
    return (
      <Layout pageHeading="Product Details">
        <NotFoundComp image={notfoundgif} caption="Product not found!" />
      </Layout>
    );
  }

  const { title, price, description, category, image, rating } = product;

  return (
    <Layout pageHeading="Product Details">
      <div className="relative mt-[25vh] md:mt-[20vh] device-screen mx-auto flex flex-col md:flex-row items-center w-full">
        <div className="back absolute top-5 left-5">
          <BackBtn path="/" />
        </div>
        <div className="md:w-1/2 p-4 flex justify-center items-center">
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
                className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition duration-300"
              >
                Add to Cart
              </button>
            )}
            {like ? (
              <Link to="/mywishlist">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                  View in Wishlist
                </button>
              </Link>
            ) : (
              <button
                onClick={handleAddtoWishlist}
                className="bg-pink-500 flex  text-white px-4 py-2 rounded-md hover:bg-pink-600 transition duration-300"
              >
                <GiHeartPlus />    Add to Wishlist
              </button>
            )}
            <button
              onClick={handleShare}
              className="bg-orange-500 flex  items-center  text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300"
            >
              <div className="mr-1">Share</div> <RiShareForward2Fill />
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;

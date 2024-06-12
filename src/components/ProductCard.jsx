import React, { useEffect, useState, useRef } from "react";
import { FaStar, FaEye, FaShareAlt } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { PiHeartStraightFill, PiHeartStraightThin, PiShareFatLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { LuShare2 } from "react-icons/lu";
import { SlShare } from "react-icons/sl";

const ProductCard = ({
  product,
  setWishedProducts,
  wishedProducts,
  close,
  cartProducts,
  setcartProducts,
  setProduct,
  setShowModel,
  isLoggedIn,
  setModelText,
}) => {
  const [like, setLike] = useState(false);
  const [inCart, setInCart] = useState(false);
  const navigate = useNavigate();
  const imgRef = useRef(null);

  useEffect(() => {
    var iswished = wishedProducts.some((p) => p.id === product.id);
    if (iswished) {
      setLike(true);
    }

    const iscart =
      cartProducts && cartProducts.some((p) => p.id === product.id);

    if (iscart) {
      setInCart(true);
    }
  }, [product]);

  const handelLikeCLick = () => {
    if (!isLoggedIn) {
      setModelText("To add items in your wishlist you have to login first ");
      setShowModel(true);
      return;
    }
    setLike(!like);
    if (!like) {
      setWishedProducts([...wishedProducts, product]);
    } else {
      setWishedProducts(wishedProducts.filter((p) => p.id !== product.id));
    }
  };
const handleProductCLick = () => {
  navigate(`/product-details/${product.id}`);
};

  const handelclose = () => {
    setWishedProducts(wishedProducts.filter((p) => p.id !== product.id));
  };

  const handelAddCart = () => {
    if (!isLoggedIn) {
      setModelText("To add items in your cart you have to login first ");
      setShowModel(true);
      return;
    }
    setInCart(true);
    setcartProducts([...cartProducts, product]);
    console.log("in   handelAddCart:>> ", cartProducts);
  };

  const handleMouseEnter = () => {
    gsap.to(imgRef.current.nextElementSibling.firstElementChild, {
      opacity: 1,
      duration: 0.1,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(imgRef.current.nextElementSibling.firstElementChild, {
      opacity: 0,
      duration: 0.1,
    });
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


  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer  Lora">
      <div className="relative  w-full h-[40vh] flex justify-center">
        <div ref={imgRef} className="product-image h-[40vh] w-fit p-2 ">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain"
          />
        </div>
        <div
          className="absolute top-0 left-0 w-full h-full flex justify-center items-center overflow-hidden"
          onClick={handleProductCLick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="bg-black bg-opacity-50 w-full h-full flex Lora flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <FaEye className="text-white text-3xl" />
            <div className="text-lg text-gray-300">View Details</div>
          </div>
        </div>
        <div className="top-right-card absolute top-2 right-2 flex flex-col justify-end space-y-2 items-center w-fit h-fit  ">
          {close ? (
            <button
              onClick={handelclose}
              className="like   rounded-full p-2"
            >
              <GrClose fontSize="28px" fontWeight="200" />
            </button>
          ) : (
            <button onClick={handelLikeCLick} className="like  ">
              {like ? (
                <PiHeartStraightFill
                  className="text-red-500 text-3xl"
                  fontSize="37px"
                />
              ) : (
                <PiHeartStraightThin fontSize="32px" fontWeight="200" />
              )}
            </button>
          )}
          <button onClick={handleShare} className=" text-black">
            <SlShare  fontSize="22px" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1 h-[77px]  overflow-y-hidden">
          {product.title}
        </h3>
        <div className="flex justify-between items-center mb-3 ">
          <p className="text-gray-600 ">{product.category}</p>
          <div className=" flex justify-center items-center text-green-600 px-2 py-1 rounded-full">
            <FaStar className=" text-lg mr-1" />
            {Math.round(product.rating.rate)}
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between">
          <span className="text-lg font-bold text-gray-800">
            ${product.price}
          </span>
          {inCart ? (
            <button
              onClick={() => navigate("/cart")}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
            >
              Go to Cart
            </button>
          ) : (
            <button
              onClick={handelAddCart}
              className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition duration-300"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

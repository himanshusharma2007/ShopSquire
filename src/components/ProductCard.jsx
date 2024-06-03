import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { PiHeartStraightFill, PiHeartStraightThin } from "react-icons/pi";

const ProductCard = ({ product, setWishedProducts, wishedProducts, close }) => {
  const [like, setLike] = useState(false);
  useEffect(() => {
    var iswished = wishedProducts.some((p) => p.id === product.id);
    if (iswished) {
      setLike(true);
    }
  }, [product]);
  const handelLikeCLick = () => {
    setLike(!like);
    if (!like) {
      setWishedProducts([...wishedProducts, product]);
    } else {
      setWishedProducts(wishedProducts.filter((p) => p.id !== product.id));
    }
  };
  const handelclose = () => {
    setWishedProducts(wishedProducts.filter((p) => p.id !== product.id));
  };
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer  Lora">
      <div className="relative w-full h-[40vh]">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain"
        />
        {close ? (
          <button
            onClick={handelclose}
            className="like absolute top-2 right-2 bg-white  rounded-full p-2"
          >
            <GrClose fontSize="28px" fontWeight="200" />
          </button>
        ) : (
          <button
            onClick={handelLikeCLick}
            className="like absolute top-2 right-2 "
          >
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
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1 h-[77px]  overflow-y-hidden">
          {product.title}
        </h3>
        <div className="flex justify-between items-center mb-3">
          <p className="text-gray-600 mb-2">{product.category}</p>
          <div className=" flex justify-center items-center text-green-600 px-2 py-1 rounded-full">
            <FaStar className=" text-lg mr-1" />
            {Math.round(product.rating.rate)}
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between">
          <span className="text-lg font-bold text-gray-800">
            ${product.price}
          </span>
          <button className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

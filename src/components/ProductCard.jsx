import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { PiHeartStraightFill, PiHeartStraightThin } from "react-icons/pi";

const ProductCard = ({ product }) => {
  const [like, setLike] = useState(false);
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer  Lora">
      <div className="relative h-80">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain"
        />
        <button
          onClick={() => setLike(!like)}
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
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 h-[77px]  overflow-y-hidden">
          {product.title}
        </h3>
        <div className="flex justify-between items-center my-2">
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

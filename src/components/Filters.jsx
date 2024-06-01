import React from 'react'

const Filters = ({FilterProducts}) => {
  return (
    <div className="bg-gray-200 ">
      <div className=" mx-auto py-3 flex flex-wrap items-center justify-center space-x-2 space-y-3 sm:space-y-0 sm:space-x-4 Ubuntu">
        <button
          onClick={() => FilterProducts("all")}
          className="px-4 py-2 rounded-full bg-white text-gray-600 hover:bg-gray-100 mt-3 sm:mt-0"
        >
          All Products
        </button>
        <button
          onClick={() => FilterProducts("electronics")}
          className="px-4 py-2 rounded-full bg-white text-gray-600 hover:bg-gray-100"
        >
          Electonics
        </button>
        <button
          onClick={() => FilterProducts("men's clothing")}
          className="px-4 py-2 rounded-full bg-white text-gray-600 hover:bg-gray-100"
        >
          Men's
        </button>
        <button
          onClick={() => FilterProducts("women's clothing")}
          className="px-4 py-2 rounded-full bg-white text-gray-600 hover:bg-gray-100"
        >
          Women's
        </button>
        <button
          onClick={() => FilterProducts("jewelery")}
          className="px-4 py-2 rounded-full bg-white text-gray-600 hover:bg-gray-100"
        >
          Jewelery
        </button>

        {/* Add more filter options as needed */}
      </div>
    </div>
  );
};

export default Filters

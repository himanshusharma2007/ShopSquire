import React from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

const Filters = ({ FilterProducts }) => {
  const [selectedCategory, setSelectedCategory] = React.useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    FilterProducts(event.target.value.toLowerCase());
  };

  return (
    <div className="bg-gray-200">
      {/* Large screen filters */}
      <div className="mx-auto py-3 hidden md:flex flex-wrap items-center justify-center space-x-2 space-y-3 sm:space-y-0 sm:space-x-4 Ubuntu ">
        <button
          onClick={() => FilterProducts("")}
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
      </div>

      {/* Small screen filters (dropdown) */}
      <div className="mx-auto py-3 md:hidden px-4 bg-white">
        <FormControl fullWidth>
          <InputLabel id="category-select-label">Category</InputLabel>
          <Select
            labelId="category-select-label"
            id="category-select"
            value={selectedCategory}
            onChange={handleCategoryChange}
            label="Category"
          >
            <MenuItem value="">All Products</MenuItem>
            <MenuItem value="electronics">Electronics</MenuItem>
            <MenuItem value="men's clothing">Men's</MenuItem>
            <MenuItem value="women's clothing">Women's</MenuItem>
            <MenuItem value="jewelery">Jewelery</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default Filters;

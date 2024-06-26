import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import {
  FaBars,
  FaSearch,
  FaUser,
  FaHeart,
  FaHome,
  FaShoppingCart,
} from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { GrClose } from "react-icons/gr";
import Filters from "./Filters";
import { Link } from "react-router-dom";

const Header = ({
  FilterProducts,
  searchTerm,
  setSearchTerm,
  noOfCartItems,
  pageHeading,
  hide,
  wishedProducts = [],
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const heartIconRef = useRef(null);
  const prevWishedProductsLength = useRef(0);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  useEffect(() => {
    if (
      heartIconRef.current &&
      Array.isArray(wishedProducts) &&
      wishedProducts.length > (prevWishedProductsLength.current || 0)
    ) {
      gsap.fromTo(
        heartIconRef.current,
        { scale: 1, color: "#6B7280" },
        {
          scale: 1.3,
          color: "red",
          duration: 0.3,
          yoyo: true,
          repeat: 1,
        }
      );
    }
    prevWishedProductsLength.current = wishedProducts?.length || 0;
  }, [wishedProducts]);
  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-10 max-h-[35vh] overflow-y-hidden">
      <div className="mx-auto flex items-center justify-between px-4 py-2">
        <div className="flex items-center">
          <button className="md:hidden mr-3" onClick={toggleDrawer}>
            <FaBars className="text-gray-600 text-xl" />
          </button>
          <Link to="/">
            <h1 className="Lobster text-3xl font-bold text-gray-800">
              ShopSquire
            </h1>
          </Link>
        </div>
        {!hide && (
          <div className="large-screen-search hidden md:flex items-center w-[40vw] ml-[155px]">
            <div className="relative mx-2 w-full">
              <input
                type="text"
                placeholder="Search..."
                className="border border-gray-300 w-full rounded-full px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  FilterProducts(e.target.value);
                }}
              />
              <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        )}

        <div className="flex items-center space-x-2 sm:space-x-4">
          <Link to="/">
            <button className="flex justify-center items-center space-x-1 text-gray-600 hover:text-gray-800">
              <FaHome className="text-xl" />
              <p className="hidden md:block Ubuntu">Home</p>
            </button>
          </Link>
          <Link to="/login">
            <button className="flex justify-center items-center space-x-1 text-gray-600 hover:text-gray-800">
              <FaUser className="text-xl" />
              <p className="hidden md:block Ubuntu">Login</p>
            </button>
          </Link>
          <Link to="/cart">
            <button className="flex justify-center items-center space-x-1 text-gray-600 hover:text-gray-800">
              <div className="cart-icon relative">
                <FaShoppingCart className="text-xl" />
                {noOfCartItems > 0 && (
                  <div className="items-in-cart absolute -top-2 -right-2 flex justify-center items-center w-4 h-4 bg-red-500 text-white rounded-full text-[14px]">
                    {noOfCartItems}
                  </div>
                )}
              </div>
              <p className="hidden md:block Ubuntu">Cart</p>
            </button>
          </Link>
          <Link to="/mywishlist">
            <button className="flex justify-center items-center space-x-1 text-gray-600 hover:text-gray-800">
              <div ref={heartIconRef}>
                <FaHeart className="text-xl" />
              </div>
              <p className="hidden md:block Ubuntu">Wishlist</p>
            </button>
          </Link>
        </div>
      </div>
      {!hide && (
        <div className="flex md:hidden items-center w-full">
          <div className="relative mx-4 my-1 w-full">
            <input
              type="text"
              placeholder="Search..."
              className="small-screen-search border w-full Ubuntu border-gray-300 rounded-sm px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                FilterProducts(e.target.value);
              }}
            />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      )}
      {!hide &&
        (pageHeading ? (
          <div className="bg-gray-200 flex justify-center items-center w-full py-3">
            <div className="heading tracking-wider text-3xl font-bold Lobster text-gray-600">
              {pageHeading}
            </div>
          </div>
        ) : (
          <Filters
            FilterProducts={FilterProducts}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        ))}

      <Drawer
        open={isDrawerOpen}
        onClose={toggleDrawer}
        anchor="left"
        PaperProps={{ style: { width: 256 } }}
        sx={{ backgroundColor: "white" }}
      >
        <button onClick={toggleDrawer} className="absolute top-4 z-40 right-4">
          <GrClose fontSize="20px" />
        </button>
        <div className="wraper pt-14">
          <List>
            <ListItem button component={Link} to="/">
              <ListItemIcon>
                <FaHome />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>

            <ListItem button component={Link} to="/cart">
              <ListItemIcon>
                <FiShoppingCart />
              </ListItemIcon>
              <ListItemText primary="My Cart" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <FaHeart />
              </ListItemIcon>
              <ListItemText primary="My Wishlist" />
            </ListItem>
            <ListItem button component={Link} to="/login">
              <ListItemIcon>
                <FaUser />
              </ListItemIcon>
              <ListItemText primary="Login" />
            </ListItem>
            {/* Add more drawer options as needed */}
          </List>
        </div>
      </Drawer>
    </header>
  );
};

export default Header;

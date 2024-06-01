import React, { useState } from "react";
import { FaBars, FaSearch, FaUser, FaHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { GrClose } from "react-icons/gr";
import Filters from "./Filters";

const Header = ({ FilterProducts }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-10 max-h-[35vh]  overflow-y-hidden">
      <div className=" mx-auto flex items-center justify-between px-4 py-2">
        <div className="flex items-center">
          <button className="md:hidden mr-4" onClick={toggleDrawer}>
            <FaBars className="text-gray-600 text-xl" />
          </button>
          <a
            href="/"
            className="website-name text-3xl  font-bold text-gray-800"
          >
            ShopSquire
          </a>
        </div>
        <div className="hidden  md:flex  items-center  w-[40vw] ml-[110px]">
          <div className="relative mx-2 w-full">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 w-full rounded-full px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-6 ">
          <button className=" flex justify-center items-center space-x-1 text-gray-600 hover:text-gray-800">
            <FaUser className="text-xl" />
            <p className="hidden md:block Ubuntu">Login</p>
          </button>
          <button className="  flex justify-center items-center space-x-1  text-gray-600 hover:text-gray-800">
            <FiShoppingCart className="text-xl" />
            <p className="hidden md:block Ubuntu">Cart</p>
          </button>
          <button className=" flex justify-center items-center space-x-1  text-gray-600 hover:text-gray-800">
            <FaHeart className="text-xl" />
            <p className="hidden md:block Ubuntu">Wishlist</p>
          </button>
        </div>
      </div>
      <div className="flex  md:hidden  items-center w-full ">
        <div className="relative mx-4 my-1 w-full">
          <input
            type="text"
            placeholder="Search..."
            className="border w-full Ubuntu border-gray-300 rounded-sm px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>
      <Filters FilterProducts={FilterProducts} />
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
        <div className="wraper py-6">
          <List>
            <ListItem button>
              <ListItemIcon>
                <FaSearch />
              </ListItemIcon>
              <ListItemText primary="Search" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <FaUser />
              </ListItemIcon>
              <ListItemText primary="Login" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <FiShoppingCart />
              </ListItemIcon>
              <ListItemText primary="Cart" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <FaHeart />
              </ListItemIcon>
              <ListItemText primary="Wishlist" />
            </ListItem>
            {/* Add more drawer options as needed */}
          </List>
        </div>
      </Drawer>
    </header>
  );
};

export default Header;

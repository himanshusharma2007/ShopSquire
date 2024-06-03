import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10  px-3">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Important Links</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Contact
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Privacy Policy
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h3>
          <form>
            <div className="flex flex-wrap">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow py-2 px-4 bg-gray-700 text-white rounded-l-md focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r-md"
              >
                Subscribe
              </button>
            </div>
          </form>
          <div className="mt-4">
            <h3 className="text-xl font-bold mb-2">Accepted Payment Methods</h3>
            <div className="flex space-x-4">
              <FaCcVisa size={24} />
              <FaCcMastercard size={24} />
              <FaCcPaypal size={24} />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 text-center">
        <p>
          &copy; {new Date().getFullYear()} ShopSquire. All rights
          reserved. This website made by Himanshu Sharma.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

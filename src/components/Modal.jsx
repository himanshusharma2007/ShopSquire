// src/components/Modal.js
import React from "react";
import { Link } from "react-router-dom";

const Modal = ({ isOpen, onClose ,modelText }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black bg-opacity-50">
      <div className="relative w-full max-w-lg p-8 mx-4 bg-white rounded-lg shadow-lg md:mx-0">
        <button
          className="absolute top-0 right-1 px-2  text-gray-600 hover:text-gray-900 text-4xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="text-center">
          <h2 className="mb-4 text-2xl font-semibold">Please Login</h2>
          <p className="mb-6">{modelText}</p>
          <Link to="/login">
            <button
              className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600"
               onClick={onClose}
            >
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;

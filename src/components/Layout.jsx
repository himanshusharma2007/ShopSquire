import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({
  children,
  FilterProducts,
  searchTerm,
  setSearchTerm,
  noOfCartItems,
  pageHeading,
  wishedProducts,
}) => {
  return (
    <>
      <Header
        wishedProducts={wishedProducts}
        pageHeading={pageHeading}
        noOfCartItems={noOfCartItems}
        FilterProducts={FilterProducts}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {children}
      <Footer />
    </>
  );
};

export default Layout;

import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import notfoundgif from "../assets/not-found-4064375-3363936.webp";
import Layout from "../components/Layout";
import NotFoundComp from "../components/Notfound";
import { useAuth } from "../hooks/UseAuth";

const Home = ({
  setWishedProducts,
  wishedProducts,
  cartProducts,
  setcartProducts,
  noOfCartItems,
  setProduct,
  setShowModel,
  setModelText,
  data,
  loading,
  error,
}) => {
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [NotFound, setNotFound] = useState(false);
  const { isLoggedIn } = useAuth();

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const FilterProducts = (type) => {
    if (type === "" && searchTerm.trim() === "") {
      setFilteredData(data);
      return;
    } else if (type.trim() !== "" && searchTerm.trim() === "") {
      const filteredData = data.filter(
        (product) => product.category.toLowerCase() === type.toLowerCase()
      );
      setFilteredData(filteredData);
    } else {
      const filteredData = data.filter(
        (product) =>
          product.category.toLowerCase().includes(type.toLowerCase()) ||
          product.title
            .toLowerCase()
            .includes(searchTerm.trim().toLowerCase()) ||
          product.category
            .toLowerCase()
            .includes(searchTerm.trim().toLowerCase())
      );
      setFilteredData(filteredData);
      if (Object.keys(filteredData).length === 0) setNotFound(true);
      else {
        setNotFound(false);
      }
    }
  };

  return (
    <Layout
      wishedProducts={wishedProducts}
      noOfCartItems={noOfCartItems}
      FilterProducts={FilterProducts}
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
    >
      {loading ? (
        <div
          role="status"
          className="mt-[25vh] md:mt-[20vh] device-screen flex justify-center items-center py-4"
        >
          <div className="w-12 h-12 border-4 border-blue-500 rounded-full border-r-transparent animate-spin"></div>
        </div>
      ) : (
        <>
          {NotFound ? (
            <NotFoundComp
              image={notfoundgif}
              caption="Sorry search results not found!"
            />
          ) : (
            <div className="main mt-[25vh] md:mt-[20vh] device-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 px-4 py-5">
              {filteredData &&
                filteredData.map((product) => {
                  return (
                    <ProductCard
                      isLoggedIn={isLoggedIn}
                      setModelText={setModelText}
                      setShowModel={setShowModel}
                      setProduct={setProduct}
                      cartProducts={cartProducts || []}
                      setcartProducts={setcartProducts}
                      key={product.id}
                      product={product}
                      wishedProducts={wishedProducts || []}
                      setWishedProducts={setWishedProducts}
                    />
                  );
                })}
            </div>
          )}
        </>
      )}
    </Layout>
  );
};

export default Home;

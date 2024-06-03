import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import notfoundgif from "../assets/not-found-4064375-3363936.webp";
import Layout from "../components/Layout";
import NotFoundComp from "../components/Notfound";
const Home = ({ setWishedProducts, wishedProducts }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [NotFound, setNotFound] = useState(false);
  console.log(NotFound);

  console.log(searchTerm);
  useEffect(() => {
    const fetchData = async () => {
      const url = "https://fakestoreapi.com/products";
      try {
        setLoading(true);
        const response = await fetch(url);
        const result = await response.json();
        setLoading(false);
        setData(result);
        setFilteredData(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
 
  const FilterProducts = (type) => {
    if (type === "" && searchTerm.trim() === "") {
      console.log("check1");
      setFilteredData(data);
      return;
    } else if (type.trim() !== "" && searchTerm.trim() === "") {
      console.log("check2");
      const filteredData = data.filter(
        (product) => product.category.toLowerCase() === type.toLowerCase()
      );

      setFilteredData(filteredData);
    } else {
      console.log("check3");
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
      FilterProducts={FilterProducts}
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
    >
      {loading ? (
        <div
          role="status"
          className=" mt-[35vh] sm:mt-[30vh] md:mt-[20vh] device-screen flex justify-center items-center"
        >
          <svg
            aria-hidden="true"
            className="w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-blue-700"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <>
          {NotFound ? (
            <NotFoundComp image={notfoundgif} caption="Sorry search results not found!"/>
          ) : (
            <div className="main mt-[35vh] sm:mt-[30vh] md:mt-[20vh]  device-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 px-4 py-5 ">
              {filteredData &&
                filteredData.map((product) => {
                  return (
                    <ProductCard
                      key={product.id}
                      product={product}
                      wishedProducts={wishedProducts}
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
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import NotFoundComp from "../components/Notfound";
import image from "../assets/6028969.jpg";
const MyWishlist = ({
  setWishedProducts,
  wishedProducts,
  cartProducts,
  setcartProducts,
  noOfCartItems
}) => {
  const [notFound, setNotFound] = useState(false);
  useEffect(() => {
    if (Object.keys(wishedProducts).length === 0) setNotFound(true);
    else {
      setNotFound(false);
    }
  }, [wishedProducts]);

  return (
    <Layout noOfCartItems={noOfCartItems} pageHeading="My Wishlist">
      {notFound ? (
        <NotFoundComp image={image} caption="Your wishlist is empty yet!" />
      ) : (
        <div className="mt-[35vh] sm:mt-[30vh] md:mt-[20vh]  device-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-20 px-4 py-5">
          {wishedProducts &&
            wishedProducts.map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  product={product}
                  cartProducts={cartProducts}
                  setcartProducts={setcartProducts}
                  wishedProducts={wishedProducts}
                  setWishedProducts={setWishedProducts}
                  close
                />
              );
            })}
        </div>
      )}
    </Layout>
  );
};

export default MyWishlist;

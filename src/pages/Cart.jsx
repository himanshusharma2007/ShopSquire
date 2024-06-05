import React, { useState } from "react";
import Layout from "../components/Layout";
import NotFoundComp from "../components/Notfound";
import image from "../assets/6028969.jpg";
import { GrClose } from "react-icons/gr";

const Cart = ({ cartProducts, setcartProducts, noOfCartItems }) => {
  const [productQuantities, setProductQuantities] = useState(
    cartProducts.reduce((acc, product) => {
      acc[product.id] = 1;
      return acc;
    }, {})
  );

  // Calculate total price and total items
  let totalPrice = 0;
  let totalItems = 0;
  for (const product of cartProducts) {
    const quantity = productQuantities[product.id] || 0;
    const roundedPrice = Math.round(product.price * 100) / 100; // Round price to two decimal places
    totalPrice += roundedPrice * quantity;
    totalItems += quantity;
  }

  // Remove product from cart
  const removeProduct = (productId) => {
    setcartProducts((prevCartProducts) =>
      prevCartProducts.filter((product) => product.id !== productId)
    );
    setProductQuantities((prevProductQuantities) => {
      const updatedQuantities = { ...prevProductQuantities };
      delete updatedQuantities[productId];
      return updatedQuantities;
    });
  };

  return (
    <Layout noOfCartItems={noOfCartItems} pageHeading="My Cart">
      {cartProducts.length === 0 ? (
        <NotFoundComp
          image={image}
          caption="You don't add items to cart yet!"
        />
      ) : (
        <div className="mt-[25vh] md:mt-[20vh] device-screen w-full px-4 py-3">
          {/* Table for large devices */}
          <div className="hidden md:block">
            <div className="lg:min-h-[63vh]">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="Ubuntu">
                    <th className="border px-4 py-2">Product</th>
                    <th className="border px-4 py-2">Title</th>
                    <th className="border px-4 py-2">Price</th>
                    <th className="border px-4 py-2">Quantity</th>
                    <th className="border px-4 py-2">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cartProducts.map((product) => (
                    <tr key={product.id} className="Lora text-center">
                      <td className="border px-4 py-2 flex justify-center items-center">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-[70px] h-[70px]"
                        />
                      </td>
                      <td className="border px-4 py-2">{product.title}</td>
                      <td className="border px-4 py-2">
                        ${product.price.toFixed(2)}
                      </td>
                      <td className="border px-4 py-2 ">
                        <div className="wraper flex space-x-3 justify-center items-center">
                          <button
                            onClick={() =>
                              setProductQuantities((prevState) => ({
                                ...prevState,
                                [product.id]: prevState[product.id] + 1,
                              }))
                            }
                            className="w-6 h-6 border-2 border-black flex justify-center items-center"
                          >
                            +
                          </button>
                          <div>{productQuantities[product.id]}</div>
                          <button
                            onClick={() =>
                              setProductQuantities((prevState) => ({
                                ...prevState,
                                [product.id]:
                                  prevState[product.id] > 1
                                    ? prevState[product.id] - 1
                                    : 1,
                              }))
                            }
                            className="w-6 h-6 border-2 border-black flex justify-center items-center"
                          >
                            -
                          </button>
                        </div>
                      </td>
                      <td className="border px-4 py-2">
                        <button
                          onClick={() => removeProduct(product.id)}
                          className="px-3 py-2 text-white bg-red-500 rounded-md"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Responsive design for smaller devices */}
          <div className="md:hidden grid grid-cols-1 sm:grid-cols-2   gap-20 px-2 sm:px-4 py-3">
            {cartProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer  Lora  sm:mx-8 w-full"
              >
                <div className="flex flex-col items-center justify-start relative w-full py-4 ">
                  <div className="relative image p-1 w-full h-[30vh] ">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full   object-contain"
                    />
                    <button
                      onClick={() => removeProduct(product.id)}
                      className="like absolute top-0 right-2 bg-white  rounded-full p-2"
                    >
                      <GrClose fontSize="28px" fontWeight="200" />
                    </button>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1 h-[77px]  overflow-y-hidden">
                      {product.title}
                    </h3>
                  </div>
                  <div className="flex justify-between items-center mb-3 w-full px-4">
                    <p className="text-gray-600">${product.price.toFixed(2)}</p>
                    <div className="child-wraper flex space-x-3 items-center">
                      <button
                        onClick={() =>
                          setProductQuantities((prevState) => ({
                            ...prevState,
                            [product.id]: prevState[product.id] + 1,
                          }))
                        }
                        className="w-6 h-6 border-2 border-black flex justify-center items-center"
                      >
                        +
                      </button>
                      <div>{productQuantities[product.id]}</div>
                      <button
                        onClick={() =>
                          setProductQuantities((prevState) => ({
                            ...prevState,
                            [product.id]:
                              prevState[product.id] > 1
                                ? prevState[product.id] - 1
                                : 1,
                          }))
                        }
                        className="w-6 h-6 border-2 border-black flex justify-center items-center"
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className=" w-full  flex flex-col justify-center sm:items-end pr-2 Ubuntu text-2xl mt-3 ">
            <div className="wraper">
              <div className="list1">
                <h1>Total Items : {totalItems}</h1>
              </div>
              <div className="list1">
                <h1>Total Amount : ${totalPrice.toFixed(2)}</h1>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Cart;

import React, { useState } from "react";
import Layout from "../components/Layout";

const Cart = () => {
  const testobj = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  };

  const [cartProducts, setCartProducts] = useState([testobj]);
  const [quantity, setQuantity] = useState(1);
  var totalPrice=0;
  var noOfProducts=0;
  return (
    <Layout>
      <div className="mt-[35vh] sm:mt-[30vh] md:mt-[20vh] device-screen w-full px-4 py-3">
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
                  <td className="border px-4 py-2">${product.price}</td>
                  <td className="border px-4 py-2">{quantity}</td>
                  <td className="border px-4 py-2">
                    <button className="px-3 py-2 text-white bg-red-500 rounded-md">
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className=" w-full  flex flex-col justify-center items-end pr-2 Ubuntu text-2xl mt-3 ">
          <div>
            {cartProducts.map((product) => {
              totalPrice += product.price;
              noOfProducts++;
            })}
            <div className="list1">
              <h1>Total Items : {noOfProducts}</h1>
            </div>
            <div className="list1">
              <h1>Total Price : {totalPrice}</h1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;

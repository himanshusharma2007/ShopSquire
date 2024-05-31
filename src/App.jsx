import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const getData = async () => {
      const url = "https://fakestoreapi.com/products";

      try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);
  return <div>Hello There</div>;
};

export default App;

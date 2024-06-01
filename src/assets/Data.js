import React, { useState, useEffect } from "react";

// Declare ApiData outside of the component to make it available for export
let ApiData = [];

const Data = () => {
        console.log("loaded data");

  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const url = "https://fakestoreapi.com/products";

      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
        ApiData = result; // Set ApiData to the fetched result
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

};

// Named export of ApiData
export { ApiData };
export default Data;

import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const DataContext = createContext(null);

export const DataProvider = (props) => {
  const API_URL = "https://fakestoreapi.com/products";

  const [ProductList, setProductList] = useState([]);
  const [checkProduct, setCheckProduct] = useState(0);
  const [cart, setCart] = useState([]);
  const [flag, setFlag] = useState(0);

  useEffect(() => {
    const getProductListFromAPI = async () => {
      try {
        const res = await axios.get(`${API_URL}`);
        if (res.status === 200) setProductList(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getProductListFromAPI();
  }, []);

  return (
    <DataContext.Provider
      value={{ ProductList, checkProduct, setCheckProduct, cart, setCart, flag, setFlag }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

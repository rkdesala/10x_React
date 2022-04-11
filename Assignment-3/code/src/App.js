import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Customer_info from "./components/Customer_info/Custmer_info";
import Order_name from "./components/Order_name/Order_name";
import Product_list from "./components/product_list/Product_list";
function App() {
  return (
    <div className="site-container">
      <div className="main_container">
        <Header />
        <Customer_info />
        <Order_name />
        <Product_list />
      </div>
    </div>
  );
}

export default App;

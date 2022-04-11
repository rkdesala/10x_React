import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Postview from "./Postview";
import Landingpage from "./Landingpage";

const Routing = function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />}></Route>
        <Route path="/Postview" element={<Postview />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Routing;

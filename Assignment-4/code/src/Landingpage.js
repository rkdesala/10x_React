import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Postview from "./Postview";
import "./Landingpage.css";
import "./Postview.css";
import Routing from "./Routing";

const Landingpage = function () {
  return (
    <div id="Home_container">
      <div className="main_container">
        <div className="enter_page">
          <div id="enterpage_image_left">
            <img
              id="image"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_PtKquDMiTXV1rAuQl_8UQ2indEvcbrrbSw&usqp=CAU"
            ></img>
          </div>
          <div className="enterpage_image_right">
            <h2 id="enter_page_logo">Instagram</h2>

            <button id="enter_link">
              <Link id="enter_link" to="/Postview">
                Enter
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Landingpage;

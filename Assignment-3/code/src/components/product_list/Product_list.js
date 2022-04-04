import React from "react";
import "./Product_list.css";
class Product_list extends React.Component {
  constructor() {
    super();
    this.state = {
      label: ">",
      profimage: "https://www.w3schools.com/howto/img_avatar.png",
    };
  }
  render() {
    return (
      <div className="product-list">
        <div className="check_box">
          <input type={"checkbox"} id="product_list_checkbox" />
        </div>
        <div className="profimage">
          <img src={this.state.profimage} id="product_list_image" />
        </div>
        <div className="product_list_info">
          <p id="product_list_text_style">
            Boltaart Bosbessen
            <br />
            <label id="producr_list_style_datails">
              Overheerlijke Boltart met Bosbessen
            </label>
          </p>
        </div>
        <div class className="product_list_info_mark">
          <p id="product_list_mark">{this.state.label}</p>
        </div>
      </div>
    );
  }
}
export default Product_list;

import React from "react";
import "./Customer_info.css";
const d = new Date();
class Customer_info extends React.Component {
  constructor() {
    super();
    this.state = {
      Appointment: `${d}`,
      Email: "alan.form@email.nl",
      Phone: "+31123456789",
    };
  }
  render() {
    return (
      <div className="customer-info">
        <p id="customer_info_text_style">
          Appointment:
          <label id="customer_info_text_style_datails">
            {this.state.Appointment}
          </label>
        </p>
        <p id="customer_info_text_style">
          Email:
          <label id="customer_info_text_style_datails">
            {this.state.Email}
          </label>
        </p>
        <p id="customer_info_text_style">
          Phone
          <label id="customer_info_text_style_datails">
            {this.state.Phone}
          </label>
        </p>
      </div>
    );
  }
}
export default Customer_info;

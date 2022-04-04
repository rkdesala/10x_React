import React from "react";
import "./Order_name.css";
var t = new Date();
class Order_name extends React.Component {
  constructor() {
    super();
    this.state = {
      Appointment: `${t}`,
      status: "In Progress",
    };
  }
  updatetime = () => {
    setInterval(() => {
      t = new Date();
      this.setState({ Appointment: (this.state.Appointment = t) });
      console.log("zxzx");
    }, 1000);
  };
  render() {
    return (
      <div className="order-name">
        <div id="order-name-elements">
          <p id="order_name_text_style">
            Status
            <br />
            <label id="order_name_text_style_datails">
              <ul>
                <li>⚫{this.state.status}</li>
              </ul>
            </label>
          </p>
        </div>
        <div id="order-name-elements">
          <p id="order_name_text_style">
            Door
            <br />
            <label id="order_name_text_style_datails">Mark</label>
          </p>
        </div>
        <div id="order-name-elements">
          <p id="order_name_text_style">
            Time
            <br />
            <label id="order_name_text_style_datails">
              {this.state.Appointment}
            </label>
          </p>
        </div>
      </div>
    );
  }
}
export default Order_name;

import React from "react";
import "./Header.css";
class Header extends React.Component {
  constructor() {
    super();
    this.state = { label: "<", name: "Alan Ford", EmployeeID: "00005152" };
  }

  render() {
    return (
      <header className="header">
        <p id="header_mark">{this.state.label}</p>
        <div className="name_id">
          <h3 id="Name">{this.state.name}</h3>
          <p id="id_number">{this.state.EmployeeID}</p>
        </div>
        <button id="print_button">Print</button>
      </header>
    );
  }
}
export default Header;

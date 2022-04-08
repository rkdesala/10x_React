import React from "react";
import "./Homepage.css";

class Homepage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <header className="main_header">
        <h2 id="header_heading">Instaclone</h2>
        <p id="header_camera">📷</p>
      </header>
    );
  }
}
export default Homepage;

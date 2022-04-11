import React from "react";
import { Link } from "react-router-dom";
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
        <h2 id="back_to_home">
          <Link id="back_to_home" to="/">
            Home
          </Link>
        </h2>
        <p id="header_camera">📷</p>
      </header>
    );
  }
}
export default Homepage;

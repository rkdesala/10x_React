import React, { Component } from "react";
import axios from "axios";
import "./Postview.css";
import Posts from "./components/Posts/Posts";
import Homepage from "./components/Homepage/Homepage";

class Postview extends React.Component {
  constructor() {
    super();
    this.state = {
      data: ["rama"],
    };
  }

  Bringdata() {
    axios.get("http://localhost:3400/user").then((res) => {
      var data = res.data;
      //console.log(data);
      this.setState({ data: data });
      //console.log(this.state.data);
    });
  }

  componentDidMount() {
    this.Bringdata();
  }
  render() {
    return (
      <div className="main_container">
        <Homepage />
        <>
          {this.state.data.map((d) => (
            <div>
              <Posts
                namee={d.name}
                imagee={d.PostImage}
                location={d.location}
                Likes={d.likes}
                postinfo={d.description}
                date={new Date().toDateString()}
              />
            </div>
          ))}
        </>
      </div>
    );
  }
}
export default Postview;

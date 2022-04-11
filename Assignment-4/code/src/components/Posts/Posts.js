import React from "react";
import Postview from "../../Postview";
import "./Post.css";

class Posts extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Post_main_container">
        <header className="header_post">
          <div className="name_location">
            <p id="post_owner">{this.props.namee}</p>
            <p id="owner_location">{this.props.location}</p>
          </div>
          <p id="dot_menu">⋯</p>
        </header>
        <div className="image_container">
          <img id="post_image" src={this.props.imagee} />
        </div>
        <div className="message_date_container">
          <div class="like_message_container">
            <p id="like_emoji">🤍</p>
            <span id="message_emoji">💬</span>
          </div>
          <p id="time_display">{this.props.date}</p>
        </div>
        <div class="likes">
          <p id="likes_count">{this.props.Likes} likes</p>
        </div>
        <div>
          <p id="post_informtion">{this.props.postinfo}</p>
        </div>
      </div>
    );
  }
}
export default Posts;

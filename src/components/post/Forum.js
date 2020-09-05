import React, { Component } from "react";
import Post from "./Post.js";
import { PostBox, ForumWrapper } from "./style.js";

class Forum extends Component {
  render() {
    return (
      <ForumWrapper>
        <PostBox>
          <Post />;
        </PostBox>
      </ForumWrapper>
    );
  }
}
export default Forum;

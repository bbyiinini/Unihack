import React, { Component } from "react";
import "antd/dist/antd.css";
import { Comment, Avatar, Form, Input, Button } from "antd";
import { NewPostWrapper, Close, CreatePost } from "./style";

const { TextArea } = Input;

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.togglePost = this.togglePost.bind(this);
  }

  togglePost = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  };

  render() {
    if (this.state.show) {
      return (
        <NewPostWrapper>
          <Close onClick={this.togglePost}>
            <img
              src="https://image.flaticon.com/icons/svg/545/545676.svg"
              alt="close"
            ></img>
          </Close>
          <Comment
            avatar={
              <Avatar src="https://avatars1.githubusercontent.com/u/59108397?s=60&v=4" />
            }
            content={
              <div>
                <Form.Item>
                  <TextArea
                    rows={4}
                    // value={this.state.inputValue}
                    // onChange={this.handleInputChange.bind(this)}
                  />
                </Form.Item>
                <Form.Item>
                  <Button
                    // onClick={this.addNewComment.bind(this)}
                    type="primary"
                  >
                    Create a Post
                  </Button>
                </Form.Item>
              </div>
            }
          />
        </NewPostWrapper>
      );
    } else {
      return (
        <CreatePost onClick={this.togglePost}>
          <Button type="primary" shape="round" size="large">
            Create New Post
          </Button>
        </CreatePost>
      );
    }
  }
}
export default NewPost;

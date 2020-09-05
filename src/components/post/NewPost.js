import React, { Component } from "react";
import "antd/dist/antd.css";
import { Comment, Avatar, Form, Input, Button } from "antd";
import { NewPostWrapper, Close, CreatePost } from "./style";

const { TextArea } = Input;

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      inputValue: ""
    };
    this.togglePost = this.togglePost.bind(this);
  }

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
          <h2>Write a Post to Share Your Mind or Ask a Question 🤩</h2>
          <Comment
            avatar={
              <Avatar src="https://png.pngitem.com/pimgs/s/128-1280822_check-mark-box-clip-art-blue-admin-icon.png" />
            }
            content={
              <div>
                <Form.Item>
                  <TextArea
                    rows={4}
                    value={this.state.inputValue}
                    onChange={this.handleInputChange.bind(this)}
                  />
                </Form.Item>
                <Form.Item>
                  <Button onClick={this.addNewPost.bind(this)} type="danger">
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
          <Button type="danger" shape="round" size="large">
            Create New Post ✎
          </Button>
        </CreatePost>
      );
    }
  }
  togglePost = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  };

  handleInputChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  addNewPost() {
    this.props.handleNewPostData(this.state.inputValue);
    this.setState({ show: !this.state.show });
  }
}
export default NewPost;

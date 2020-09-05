import React, { Component } from "react";
import { Comment, Avatar, Form, Input, Button, Divider, Tooltip } from "antd";
import "antd/dist/antd.css";
import { PostWrapper } from "./style";
import moment from "moment";
import ReactTooltip from "react-tooltip";
import NewPost from "./NewPost";

const { TextArea } = Input;

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      user: {
        name: "User",
        image: "https://avatars1.githubusercontent.com/u/59108397?s=60&v=4"
      },
      posts: [
        {
          id: 1,
          author: "Shirley Fang",
          info: {
            class: "cs101",
            number: "111-111-1111"
          },
          authorImage:
            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
          content:
            "Anyone wants to do Leetcode practice together? DM me if you are currently on campus. Phone#111-111-111 ",
          comment: []
        },
        {
          id: 2,
          author: "Tom Smith",
          info: {
            class: "cs329e",
            number: "111-111-1111"
          },
          authorImage:
            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
          content:
            "CCS329E looking for a partner to work on the final project.",
          comment: []
        }
      ]
    };
  }

  render() {
    const postarr = this.state.posts;
    console.log(postarr);
    if (postarr.length === 0) {
      return null;
    } else {
      return (
        <div>
          {postarr.map((item, index) => {
            return (
              <div>
                <NewPost />
                <PostWrapper>
                  <Comment
                    key={index}
                    author={item.author}
                    avatar={<Avatar src={item.authorImage} />}
                    content={item.content}
                    datetime={
                      <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
                        <span>{moment().fromNow()}</span>
                      </Tooltip>
                    }
                    data-tip
                    data-for="info"
                  />
                  <ReactTooltip id="info" place="top" effect="solid">
                    <div>class: {item.info.class}</div>
                    <div>number: {item.info.number}</div>
                  </ReactTooltip>
                  <Divider orientation="left" plain>
                    Comments
                  </Divider>
                  <ul>
                    {item.comment.map((item2, index2) => {
                      return (
                        <Comment
                          key={index2}
                          author={this.state.user.name}
                          avatar={<Avatar src={this.state.user.image} />}
                          content={item2}
                          datetime={
                            <Tooltip
                              title={moment().format("YYYY-MM-DD HH:mm:ss")}
                            >
                              <span>{moment().fromNow()}</span>
                            </Tooltip>
                          }
                        />
                      );
                    })}
                  </ul>
                  <Comment
                    avatar={<Avatar src={this.state.user.image} />}
                    content={
                      <div>
                        <Form.Item>
                          <TextArea
                            rows={3}
                            value={item.inputValue}
                            onChange={this.handleInputChange.bind(this)}
                          />
                        </Form.Item>
                        <Form.Item>
                          <Button
                            onClick={this.addNewComment.bind(this, index)}
                            type="primary"
                          >
                            Add Comment
                          </Button>
                        </Form.Item>
                      </div>
                    }
                  />
                </PostWrapper>
              </div>
            );
          })}
        </div>
      );
    }
  }
  handleInputChange(event) {
    const value = event.target.value;
    this.setState(() => ({
      inputValue: value
    }));
  }
  addNewComment(index) {
    let comment = this.state.posts[index].comment;
    let newPost = this.state.posts[index];
    newPost.comment = [...comment, this.state.inputValue];
    this.setState(() => ({
      inputValue: ""
    }));
    console.log("**", this.state.posts[index]);
  }
}
export default Post;

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
        image:
          "https://png.pngitem.com/pimgs/s/128-1280822_check-mark-box-clip-art-blue-admin-icon.png",
        info: {
          class: "cs303",
          number: "737-202-1111"
        }
      },
      posts: [
        {
          id: 1,
          author: "Dinesh Chugtai",
          info: {
            class: "cs101",
            number: "111-111-1111"
          },
          authorImage:
            "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-silicon-valley-kumail-nanjiani.jpg",
          content:
            "Anyone wants to do Leetcode practice together? We are starting an online Leetcode Study Group to keep each other accountable for tech interview preparation. Is a Telegram group to share your own progress and get motivated by seeing how many problems other people did today. DM me if you are interested. ",
          comment: []
        },
        {
          id: 2,
          author: "Richard Hendricks",
          info: {
            class: "cs329e",
            number: "111-111-1111"
          },
          authorImage:
            "http://siliconvalleyism.com/characters/richard-small.jpg",
          content:
            "CCS329E looking for a partner to work on the final project.",
          comment: []
        }
      ]
    };
  }

  render() {
    const postarr = this.state.posts;
    if (postarr.length === 0) {
      return null;
    } else {
      return (
        <div>
          <NewPost handleNewPostData={this.handleNewPostData.bind(this)} />
          {postarr.map((item, index) => {
            return (
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
                          type="danger"
                        >
                          Add Comment
                        </Button>
                      </Form.Item>
                    </div>
                  }
                />
              </PostWrapper>
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
  }
  handleNewPostData(val) {
    let newPost = {
      id: 3,
      author: this.state.user.name,
      info: this.state.user.info,
      authorImage: this.state.user.image,
      content: val,
      comment: []
    };
    console.log(newPost);
    console.log(this.state.posts);
    this.setState(() => ({
      posts: [...this.state.posts, newPost]
    }));
  }
}
export default Post;

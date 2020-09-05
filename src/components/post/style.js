import styled from "styled-components";
export const PostWrapper = styled.div`
  margin: 20px 40px;
  padding: 30px;
  box-shadow: 0 4px 8px 0 rgba(0.1, 0, 0, 0.2);
  text-align: left;
  background-color: #ffffff;
  font-size: 20px;
`;
export const NewPostWrapper = styled.div`
  margin: 70px 30px;
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(0.1, 0, 0, 0.2);
  text-align: left;
  background-color: #ffffff;
`;

export const Close = styled.div`
  display: block;
  text-align: right;
  height: 20px;
  margin: 10px;
  img {
    height: 20px;
  }
`;

export const CreatePost = styled.div`
  margin: 40px 5px;
  text-align: left;
`;

export const PostBox = styled.div`
  margin-top: 80px;
`;

export const ForumWrapper = styled.div`
  background: #50a3a2;
  background: -webkit-linear-gradient(top left, #ec5752 0%, #e43a5f 50%);
  background: -moz-linear-gradient(top left, #ec5752 0%, #e43a5f 50%);
  background: -o-linear-gradient(top left, #ec5752 0%, #e43a5f 50%);
  background: linear-gradient(to bottom right, #ec5752 0%, #e43a5f 50%);
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: scroll;
`;

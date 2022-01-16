import React from "react";

import "./PostRightBar.css";
import PostRightBarFriendsSug from "./PostRightBarFriendsSug";
import PostRightBarFriendsBirth from "./PostRightBarFriendsBirth";
const PostRightBar = () => {
  return (
    <div>
      <PostRightBarFriendsSug />
      <PostRightBarFriendsBirth/>
    </div>
  );
};

export default PostRightBar;

import React from "react";


import PostRightBarFriendsSugItem from "./PostRightBarFriendsSugItem";

import "./PostRightBarFriendsSug.css";

import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";

const PostRightBarFriendsSug = () => {
  return (
    <div className="FriendssuggestionMain">
      <div className="FriendssuggestionHead">
        <p className="FriendssuggestionText">FRIENDS SUGGESTION</p>
        <GroupAddIcon fontSize="medium" className="FriendssuggestionIcon" />
      </div>

      <div className="FriendssuggestionList">
        {/* 1 */}
        <div class="PostRight_Friends_Sugg_Scrollbar" id="style-4">
          <div class="PostRight_Friends_Sugg_Srollforce-overflow">
            <PostRightBarFriendsSugItem />
            <PostRightBarFriendsSugItem />
            <PostRightBarFriendsSugItem />
            <PostRightBarFriendsSugItem />
            <PostRightBarFriendsSugItem />
            <PostRightBarFriendsSugItem />
            <PostRightBarFriendsSugItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostRightBarFriendsSug;

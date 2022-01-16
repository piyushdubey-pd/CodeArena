import React from "react";

import PostRightBarBirthItem from "./PostRightBarBirthItem";

import img1 from "../../../PostFeed/components/Feed/FeedPeopleImages/4.jpg";


import "./PostRightBarFriendsBirth.css";
import CakeIcon from "@mui/icons-material/Cake";
const PostRightBarFriendsSug = () => {
  return (
    <div className="FriendsBirthdaysMain">
      <div className="FriendsBirthdaysHead">
        <p className="FriendsBirthdaysText">BIRTHDAYS</p>
        <CakeIcon fontSize="medium" className="FriendsBirthdaysIcon" />
      </div>

      <div className="FriendsBirthdaysList">
        <div class="PostRight_Friends_Birth_Scrollbar" id="style-4">
          <div class="PostRight_Friends_Birth_Srollforce-overflow">
            <PostRightBarBirthItem />
            <PostRightBarBirthItem />
            <PostRightBarBirthItem />
            <PostRightBarBirthItem />
            <PostRightBarBirthItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostRightBarFriendsSug;

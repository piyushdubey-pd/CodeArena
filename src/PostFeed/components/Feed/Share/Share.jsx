import "./Share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";
import { Search } from "@mui/icons-material";
import { useAuth } from "../../../../contexts/AuthContext";
import img1 from "../FeedPeopleImages/4.jpg"
import {db} from "../../../../firebase";
import React from "react";
export default function Share() {
  const { currentUser } = useAuth();
  
  var message="Whats on your mind "+currentUser.uid+"?";
  return (
    <React.Fragment>
    
      <div className="searchBar ">
        <Search className="searchIcon" />
        <input
          placeholder="Search for Posts"
          className="searchInput"
        />
      </div>

      <div className="share">
        <div className="shareWrapper">

          <div className="shareTop">
            <div className="shareProfileImg">
              <img src={img1} alt="" />
            </div>
            <div className="shareInput">
              <input placeholder={message} />
            </div>
          </div>
          <hr className="shareHr" />
          <div className="shareBottom">
            <div className="shareOptions">
              <div className="shareOption">
                <PermMedia htmlColor="tomato" className="shareIcon" />
                <span className="shareOptionText">Photo or Video</span>
              </div>
              <div className="shareOption">
                <Label htmlColor="blue" className="shareIcon" />
                <span className="shareOptionText">Tag</span>
              </div>
              <div className="shareOption">
                <Room htmlColor="green" className="shareIcon" />
                <span className="shareOptionText">Location</span>
              </div>
              <div className="shareOption">
                <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
                <span className="shareOptionText">Feelings</span>
              </div>
            </div>
            <button className="shareButton">Share</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

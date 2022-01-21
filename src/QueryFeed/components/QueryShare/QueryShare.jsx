import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";
import { Search } from "@mui/icons-material";
import React, { useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import QueryAskModal from "./QueryAsk/QueryAskModal";
import QueryPost from "../QueryShare/QueryPost/QueryPost"
import QueryAddAnswerModal from "../QueryShare/QueryAddAnswer/QueryAddAnswerModal";

import "./QueryShare.css";
export default function QueryShare() {
  const { currentUser } = useAuth();
  const [isAsk, AsksetOpen] = useState(false);

  const handleOpen = (event) => {
    event.preventDefault();
    AsksetOpen(true);
  };

  const handleClose = () => {
    AsksetOpen(false);
  };

  console.log(currentUser.uid);


  return (
    <React.Fragment>
      <QueryAskModal open={isAsk} Close={handleClose} />

      {/* Search and ASK button */}
      <div className="QueryshareTop">
        <div className="QuerysearchBar ">
          <Search className="QsearchIcon" />
          <input placeholder="Search for Queries" className="QsearchInput" />
        </div>

        <div class="Qwrapper">
          <div class="Qlink_wrapper">
            <a href="/" onClick={handleOpen}>
              ASK
            </a>
          </div>
        </div>
      </div>

      {/* <div className="QueryPost">

      </div> */}

      <QueryPost />
      <QueryPost />
      <QueryPost />
      <QueryPost />
      <QueryPost />
    </React.Fragment>
  );
}

/* <div className="share">
          <div className="shareWrapper">
            <div className="shareTop">
              <div className="shareProfileImg">
                <img alt="" />
              </div>
              <div className="shareInput">
                <input placeholder="What's in your mind Akash?" />
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
        </div> */

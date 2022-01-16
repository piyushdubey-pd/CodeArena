import "./Post.css";

import React from "react";
import { MoreVert, PinDropSharp } from "@mui/icons-material";

import img1 from "../FeedPeopleImages/1.jpg";

export default function Post(props) {
  return (
    <React.Fragment>
      <div className="MainPost">
        <div className="PostHead">
          {/* <div className="shareWrapper"> */}
          <div className="shareTop">
            <div className="shareProfileImg">
              <img src={img1} alt="" />
            </div>
            <div className="shareInput">
              <p className="MainTitle">Sherlock Holmes</p>
              {/* <span className="SubTitle">5 min ago</span> */}
            </div>
          </div>
          {/* </div> */}
        </div>

        <div className="PostBody">
          <div className="PostBodyImg" >
            <img src={props.PostImage} alt="" />
          </div>
        </div>

        <div className="PostFoot">
          <div className="PostLikeCmt">
            <div className="PostLike">
              <i class="fas fa-2x fa-heart"></i>
              <p className="PostLikeText">Liked By Rocky and 59,645 others</p>
            </div>
            <div className="PostCmt">
              <i class="fas fa-2x fa-comment"></i>
              <p className="PostCmtTxt">Comments</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

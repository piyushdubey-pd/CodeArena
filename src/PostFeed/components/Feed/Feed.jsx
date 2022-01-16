import * as React from "react";
import "./Feed.css";

import Share from "./Share/Share";
import Post from "./Post/Post";

import img2 from "../../../home/GridImages/p10.jpg";
import img3 from "../../../home/GridImages/p16.jpg";
import img4 from "../../../home/GridImages/p9.jpg";

import PostRightBar from "../RightBar/PostRightBar";
import QueryLeftBar from "../../../QueryFeed/components/QueryLeftShare/QueryLeftBar";

function Feed() {
  return (
    <div class="MainSideBar">
      {/* LEFTBAR */}
      <div class="SideBar">
        <QueryLeftBar/>
      </div>

      {/* CENTER FEED */}

      <div class="SideBar2">
        <Share />
        <Post PostImage={img2} />
        <Post PostImage={img3} />
        <Post PostImage={img4} />
      </div>

      {/* RIGHTBAR */}
      <div class="RightBar">
        <PostRightBar />
      </div>
    </div>
  );
}
export default Feed;

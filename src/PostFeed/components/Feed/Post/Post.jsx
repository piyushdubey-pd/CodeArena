import "./Post.css";

import React, { useState,useEffect } from "react";
import { MoreVert, PinDropSharp, PowerOffSharp } from "@mui/icons-material";
import {db} from "../../../../firebase";
import img1 from "../FeedPeopleImages/1.jpg";
import { get,ref } from "firebase/database";


export default function Post(props) {
  const [name, setName] = useState("");
  useEffect(() => {
    const reff = ref(db,"/login_details/"+props.post.post_user);
    get(reff).then((snapshot) => {
      if (snapshot.exists()){
        var user=snapshot.val().name;
        setName(user);
      }
    }).catch((error) => {
      console.error(error);
    });
  }, []);
  console.log(props.post);
  // console.log(props.posts.id);
  console.log(props);
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
              <p className="MainTitle">{name}</p>
              {/* <span className="SubTitle">5 min ago</span> */}
            </div>
          </div>
          {/* </div> */}
        </div>

        <div className="PostBody">
          <div className="PostBodyImg" >
          <h3>{props.post.post_time}</h3>
            <p>
              {props.post.post_location}
              {props.post.post_details}
            </p>
            <img src={props.post.post_multi} alt="" />
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

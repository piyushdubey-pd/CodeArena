import "./UserPosts.css";

import React, {useState, useEffect} from "react";
import { MoreVert, PinDropSharp } from "@mui/icons-material";

import img1 from "../../PostFeed/components/Feed/FeedPeopleImages/1.jpg";
import {db} from "../../firebase";
import {get, ref} from "firebase/database";
export default function UserPost(props) {

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

  return (
    <React.Fragment>
      <div className="UserPostMain">
        <div className="UserPostHead">
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

        <div className="UserPostBody">
          <div className="UserPostBodyImg">
            <p>
              <div>{props.post.post_details}</div>
            {/* likes: 0
post_details: "Nothing much HOw ara you?"
post_location: "22.7987206,86.2631281"
post_multi: ""
post_time: ""
post_user: "cOxPjTjuNNe7JFjakdnTiSsOwHx2" */}
            <div>{props.post.post_location}</div>
            <div>{props.post_time}</div>
            </p>
            <img src={props.post.post_multi} alt="" />
          </div>
        </div>

        <div className="UserPostFoot">
          <div className="PostLikeCmt">
            <div className="PostLike">
              <i class="fas fa-2x fa-heart"></i>
              <p className="PostLikeText">{props.post.likes}</p>
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

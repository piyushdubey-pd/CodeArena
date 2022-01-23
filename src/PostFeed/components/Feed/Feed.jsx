import React, {useState, useEffect} from "react";
import "./Feed.css";
import {db} from "../../../firebase";
import {get,ref} from  "firebase/database";
import Share from "./Share/Share";
import Post from "./Post/Post";

import img2 from "../../../home/GridImages/p10.jpg";
import img3 from "../../../home/GridImages/p16.jpg";
import img4 from "../../../home/GridImages/p9.jpg";

import PostRightBar from "../RightBar/PostRightBar";
import QueryLeftBar from "../../../QueryFeed/components/QueryLeftShare/QueryLeftBar";
import {useAuth} from "../../../contexts/AuthContext";

function Feed() {
  const {user} = useAuth();
  const [posts_list, setPosts] = useState([]);
  useEffect(() => {
    var reff=ref(db, "posts/");
    var temp=[];
    get(reff).then(function(snapshot) {
      var data = snapshot.val();
      for (var x in data) {
        data[x]["id"]=x;
        temp.push(data[x]);
      }
      setPosts(temp);
    }).catch((errorObject) => {
      console.log('The read failed: ' + errorObject.name);
      });
    // console.log(posts_list);
    // id: "-MtvhoKmf_mocbwBg-Az"
    // likes: 0
    // post_details: "Nothing much"
    // post_location: "22.7987415,86.2632035"
    // post_multi: "https://firebasestorage.googleapis.com/v0/b/proj1-8a95b.appspot.com/o/multimedia%2FCapture.JPG?alt=media&token=58a93b98-1ed0-4d16-9da8-adfab6e46338"
    // post_time: "1/21/2022, 1:45:51 PM"
    // post_user: "FFkzrE4rb8XSEgG63uo2VZ6wJWY2"
  },[]);

  return (
    <div class="MainSideBar">
      {/* LEFTBAR */}
      <div class="SideBar">
        <QueryLeftBar/>
      </div>

      {/* CENTER FEED */}

      <div class="SideBar2">
        <Share />
        {/* <Post PostImage={img2} /> */}
        {/* <Post PostImage={img3} /> */}
        {posts_list && posts_list.map(function(post){
          // console.log(post);
        return <Post post={post}/>
        })}
      </div>

      {/* RIGHTBAR */}
      <div class="RightBar">
        <PostRightBar />
      </div>
    </div>
  );
}
export default Feed;
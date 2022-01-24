import React, { useState, useEffect } from "react";
import UserNavigation from "../Shared/components/UserNavigation";

import QueryPost from "../QueryFeed/components/QueryShare/QueryPost/QueryPost";
import Post from "../PostFeed/components/Feed/Post/Post";
import UserQueryPosts from "./UserQueryPosts/UserQueryPosts";
import UserPost from "./UserPosts/UserPosts";
import UserContributions from "./UserContributions/UserContributions";
import "./UserProfile.css";
import img1 from "../PostFeed/components/Feed/FeedPeopleImages/1.jpg";

import {db} from "../firebase";
import {get, ref} from "firebase/database";
import {useAuth} from "../contexts/AuthContext";

const UserProfile = () => {
  const {currentUser} = useAuth();
  const [userP, setP] = useState([]);
  const [userQ, setQ] = useState([]);
  const [userC, setC] = useState([]);
  useEffect(() => {
    
    const queryRef=ref(db,"queries");
    var userQuery=[];
    
    get(queryRef).then((snapshot)=>{
      if(snapshot.exists())
      {
        var queries=snapshot.val();
        for (var x in queries)
        {
          if(queries[x].userid==currentUser.uid)
          userQuery.push(queries[x]);
        }
        console.log(userQuery);
        setQ(userQuery);
      }
      else
      {
        console.log("no query");
      }
    }).catch((error)=>{
      console.log(error);
    });


  }, []);
  const [isQuery, SetIsQuery] = useState(true);
  const [isPost, SetIsPost] = useState(false);
  const [isContri, SetIsContri] = useState(false);

  const ChangeToQuery = (event) => {
    SetIsQuery(true);
    SetIsPost(false);
    SetIsContri(false);
  };
  const ChangeToPost = (event) => {
    SetIsQuery(false);
    SetIsPost(true);
    SetIsContri(false);

    const postRef= ref(db,"posts");
    var userPost=[];
    get(postRef).then((snapshot)=>{
      if(snapshot.exists())
      {
        var posts=snapshot.val();
        for (var x in posts)
        {
          if(posts[x].post_user==currentUser.uid)
          userPost.push(posts[x]);
        }
        console.log(userPost);
        setP(userPost);
      }
      else
      {
        console.log("no posts");
      }
    }).catch((error)=>{
      console.log(error);
    });
  };
  const ChangeToContri = (event) => {
    SetIsQuery(false);
    SetIsPost(false);
    SetIsContri(true);


    const queryRef=ref(db,"queries");
    var userContri=[];
    get(queryRef).then((snapshot)=>{
      if(snapshot.exists())
      {
        var queries=snapshot.val();
        for (var x in queries)
        {
          for(var y in queries[x].answers)
          {
            if(queries[x].answers[y].userid==currentUser.uid)
            userContri.push(queries[x]);
          }
        }
        console.log(userContri);
        setC(userContri);
      }
      else
      {
        console.log("no query");
      }
    }).catch((error)=>{
      console.log(error);
    });


    
  };
  console.log(currentUser);
  return (
    <React.Fragment>
      <UserNavigation />
      <div className="UserProfileMain">
        <div className="UserProfileContainer">
          <p className="UserProfileHeadText">Know Yourself !</p>

          <div className="UserProfile_1_Content">
            <div className="UserProfileDetails">
              <ul className="UserProfileDetailsList">
                <li>{currentUser.displayName}</li>
                <li>{currentUser.phoneNumber}</li>
                {/* <li>BMS college of Enginneering</li> */}
                <li>{currentUser.email}</li>
              </ul>
            </div>

            <div className="UserProfileImage">
              <img className="UserProfileImageStyle" src={img1} alt="" />
            </div>
          </div>

          <div className="UserProfile_2_Content">
            <div
              className={
                isQuery
                  ? "UserProfile_2_Content_Col_1_ON "
                  : "UserProfile_2_Content_Col_1"
              }
            >
              <p onClick={ChangeToQuery} name="query">
                QUERIES
              </p>
            </div>
            <div
              className={
                isPost
                  ? "UserProfile_2_Content_Col_2_ON "
                  : "UserProfile_2_Content_Col_2"
              }
            >
              <p onClick={ChangeToPost} name="post">
                POSTS
              </p>
            </div>
            <div
              className={
                isContri
                  ? "UserProfile_2_Content_Col_3_ON "
                  : "UserProfile_2_Content_Col_3"
              }
            >
              <p onClick={ChangeToContri} name="contribution">
                CONTRIBUTIONS
              </p>
            </div>
          </div>

          <div className="UserProfile_3_Content">
            <div
              className={
                isQuery
                  ? "QueryDisplayMain"
                  : "QueryDisplayMain UserProfile_3_Content_Visibility"
              }
            >
              {userQ.map(function (query) {
                return (
                  <UserQueryPosts query={query}/>
                  );
                }
              )
                }
              
              {/* // <UserQueryPosts />
              // <UserQueryPosts />
              // <UserQueryPosts />
              // <UserQueryPosts /> */}
            </div>

            <div
              className={
                isPost
                  ? "PostDisplayMain"
                  : " PostDisplayMain UserProfile_3_Content_Visibility"
              }
            >
              {userP.map(function (post) {
                return (
                  <UserPost post={post}/>
                  );
                }
              )}
              {/* <UserPost />
              <UserPost />
              <UserPost />
              <UserPost />
              <UserPost />
              <UserPost /> */}
            </div>

            <div
              className={
                isContri
                  ? "ContriDisplayMain"
                  : "ContriDisplayMain UserProfile_3_Content_Visibility"
              }
            >
              {userC.map(function (contri) {
                return (
                  <UserContributions contri={contri} />
                  );
                }
              )}
              
              {/* <UserContributions />
              <UserContributions />
              <UserContributions />
              <UserContributions />
              <UserContributions /> */}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserProfile;

import React, { useState } from "react";
import UserNavigation from "../Shared/components/UserNavigation";

import QueryPost from "../QueryFeed/components/QueryShare/QueryPost/QueryPost";
import Post from "../PostFeed/components/Feed/Post/Post";
import UserQueryPosts from "./UserQueryPosts/UserQueryPosts";
import UserPost from "./UserPosts/UserPosts";
import UserContributions from "./UserContributions/UserContributions";
import "./UserProfile.css";
import img1 from "../PostFeed/components/Feed/FeedPeopleImages/1.jpg";

const UserProfile = () => {
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
  };
  const ChangeToContri = (event) => {
    SetIsQuery(false);
    SetIsPost(false);
    SetIsContri(true);
  };

  return (
    <React.Fragment>
      <UserNavigation />
      <div className="UserProfileMain">
        <div className="UserProfileContainer">
          <p className="UserProfileHeadText">Know Yourself !</p>

          <div className="UserProfile_1_Content">
            <div className="UserProfileDetails">
              <ul className="UserProfileDetailsList">
                <li>Sherlock Holmes</li>
                <li>9686425259</li>
                {/* <li>BMS college of Enginneering</li> */}
                <li>SherlockHolmes221BBakerStreet@Nomail.com</li>
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
              <UserQueryPosts />
              <UserQueryPosts />
              <UserQueryPosts />
              <UserQueryPosts />
              <UserQueryPosts />
            </div>

            <div
              className={
                isPost
                  ? "PostDisplayMain"
                  : " PostDisplayMain UserProfile_3_Content_Visibility"
              }
            >
              <UserPost />
              <UserPost />
              <UserPost />
              <UserPost />
              <UserPost />
              <UserPost />
            </div>

            <div
              className={
                isContri
                  ? "ContriDisplayMain"
                  : "ContriDisplayMain UserProfile_3_Content_Visibility"
              }
            >
              <UserContributions />
              <UserContributions />
              <UserContributions />
              <UserContributions />
              <UserContributions />
              <UserContributions />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserProfile;

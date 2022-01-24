import "./UserQueryPosts.css";

import React, { useState, useEffect } from "react";
import { MoreVert, PinDropSharp } from "@mui/icons-material";

import img1 from "../../PostFeed/components/Feed/FeedPeopleImages/1.jpg";
import QueryAddAnswerModal from "../../QueryFeed/components/QueryShare/QueryAddAnswer/QueryAddAnswerModal";
import QueryAnswersModal from "../../QueryFeed/components/QueryShare/QueryAnswers/QueryAnswersModal";
import { db } from "../../firebase";
import {get, ref} from "firebase/database"
export default function UserQueryPost(props) {
  // ADD_Answer
  const [name, setName] = useState("");
  useEffect(() => {
    const reff = ref(db,"/login_details/"+props.query.userid);
    get(reff).then((snapshot) => {
      if (snapshot.exists()){
        var user=snapshot.val().name;
        setName(user);
      }
    }).catch((error) => {
      console.error(error);
    });
  }, []);

  const [isAddAns, SetisAddAns] = useState(false);
  const handleAddAnswerOpen = (event) => {
    event.preventDefault();
    SetisAddAns(true);
  };

  const handleAddAnswerClose = () => {
    SetisAddAns(false);
  };

  // SHOW_Answer
  const [showAnswer, AnswerSetOpen] = useState(false);

  const handleOpen = (event) => {
    event.preventDefault();
    AnswerSetOpen(true);
  };

  const handleClose = () => {
    AnswerSetOpen(false);
  };

  return (
    <React.Fragment>
      <QueryAddAnswerModal open={isAddAns} Close={handleAddAnswerClose} />

      <QueryAnswersModal open={showAnswer} Close={handleClose} />
      
      <div className="UserQueryMainPost">
        <div className="UserQueryPostHead">
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

        <div className="UserQueryPostBody">
          <div className="UserQueryQuestion">
            <div class="QueryQuestionScrollbar" id="style-4">
              <div class="QueryQuestionForce-overflow">
                <h2>{props.query.question}</h2>
                <p>
                 {props.query.description}
                 <div>{props.query.code}</div>
                 <div>{props.query.time}</div>
                 {/* code: "printf(\"No idea\\n\");"
description: "THere are 2 orders"
id: "-Mu0dvK4JX3tlUlXohPT"
liked_users: {FFkzrE4rb8XSEgG63uo2VZ6wJWY2: 'FFkzrE4rb8XSEgG63uo2VZ6wJWY2'}
likes: 1
question: "How do I watch Marvel movies in order?"
time: "1/22/2022, 5:28:51 PM"
userid: "FFkzrE4rb8XSEgG63uo2VZ6wJWY2" */}
                </p>
              </div>
            </div>

            <div className="UserQueryReadMore">
              <a href="/" onClick={handleAddAnswerOpen}>
                Wanna Answer ?
              </a>
            </div>
          </div>
        </div>

        <div className="UserQueryPostFoot">
          <div className="UserQueryPostLikeCmt">
            <div className="UserQueryPostLike">
              <i class="fas fa-2x fa-heart"></i>
              <p className="UserQueryPostLikeText">{props.likes}</p>
            </div>

            <div className="UserQueryPostAns">
              <i class="fas fa-2x fa-pen-square" onClick={handleOpen}></i>
              <p className="UserQueryPostAnsText">849 Answers</p>
            </div>

            {/* <div className="QueryPostCmt">
              <i class="fas fa-2x fa-comment"></i>
              <p className="QueryPostCmtText">Comments</p>
            </div> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

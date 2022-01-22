import "./QueryPost.css";

import React, { useState } from "react";
import { MoreVert, PinDropSharp } from "@mui/icons-material";
import {useAuth} from "../../../../contexts/AuthContext";
import {db} from "../../../../firebase";
import {get, onValue, ref,remove,set} from "firebase/database";
import img1 from "../../../../PostFeed/components/Feed/FeedPeopleImages/1.jpg";
import QueryAnswersModal from "../QueryAnswers/QueryAnswersModal";
import QueryAddAnswerModal from "../QueryAddAnswer/QueryAddAnswerModal";
export default function QueryPost(props) {
  const {currentUser} = useAuth();
  const [liked, upliked]=useState(false);
  const [likes, updateLikes] = useState(props.likes);
  
  // // ADD_Answer
  // onValue(reff, (snapshot) => {
  //   var likes=snapshot.val();
  //   updateLikes(likes);
  // }, (errorObject) => {
  //   console.log('The read failed: ' + errorObject.name);
  // });

 

  const handleLike = () => {
    const reff=ref(db,'queries/'+props.id+'/liked_users/'+currentUser.uid);
    const likesRef=ref(db,'queries/'+props.id+'/likes');
    onValue(reff,(snapshot) => {
      if (snapshot.exists()){
        upliked(true);
      }
      else{
        upliked(false);
      }
    }, (errorObject) => {
      console.log('The read failed: ' + errorObject.name);
    });
    if(!liked)
    {
      upliked(true);
      updateLikes(likes+1);
      set(likesRef,likes+1);
      set(reff,currentUser.uid);
    }
    else
    {
      upliked(false);
      updateLikes(likes-1);
      set(likesRef,likes-1);
      remove(reff);
    }
  }

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

      <div className="QueryMainPost">
        <div className="QueryPostHead">
          {/* <div className="shareWrapper"> */}
          <div className="shareTop">
            <div className="shareProfileImg">
              <img src={img1} alt="" />
            </div>
            <div className="shareInput">
              <p className="MainTitle">{props.userid}</p>
              {/* <span className="SubTitle">5 min ago</span> */}
            </div>
          </div>

          {/* </div> */}
        </div>

        <div className="QueryPostBody">
          <div className="QueryQuestion">
            <div class="QueryQuestionScrollbar" id="style-4">
              <div class="QueryQuestionForce-overflow">
                <h4>{props.question}</h4>
                <p>
                  <div>{props.description}</div>
                  <div>{props.time}</div>
                  <div>{props.code}</div>
                </p>
              </div>
            </div>

            <div className="QueryReadMore">
              <a href="/" onClick={handleAddAnswerOpen}>
                Wanna Answer ?
              </a>
            </div>
          </div>
        </div>

        <div className="QueryPostFoot">
          <div className="QueryPostLikeCmt">
            <div className="QueryPostLike" onClick={handleLike}>
              <i class="fas fa-2x fa-heart"></i>
              <p className="QueryPostLikeText">{likes}</p>
            </div>

            <div className="QueryPostAns">
              <i class="fas fa-2x fa-pen-square" onClick={handleOpen}></i>
              <p className="QueryPostAnsText">849 Answers</p>
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

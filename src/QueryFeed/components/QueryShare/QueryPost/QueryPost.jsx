import "./QueryPost.css";

import React, { useState } from "react";
import { MoreVert, PinDropSharp } from "@mui/icons-material";

import img1 from "../../../../PostFeed/components/Feed/FeedPeopleImages/1.jpg";
import QueryAnswersModal from "../QueryAnswers/QueryAnswersModal";
import QueryAddAnswerModal from "../QueryAddAnswer/QueryAddAnswerModal";

export default function QueryPost(props) {
  // ADD_Answer
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
              <p className="MainTitle">Sherlock Holmes</p>
              {/* <span className="SubTitle">5 min ago</span> */}
            </div>
          </div>

          {/* </div> */}
        </div>

        <div className="QueryPostBody">
          <div className="QueryQuestion">
            <div class="QueryQuestionScrollbar" id="style-4">
              <div class="QueryQuestionForce-overflow">
                <p>
                  What is the most minimal way to add federated logins to an AWS
                  SAM app? How is that encorporated in the code ? What is the
                  most minimal way to add federated logins to an AWS SAM app?
                  How is that encorporated in the code ? What is the most
                  minimal way to add federated logins to an AWS SAM app? How is
                  that encorporated in the code ? What is the most minimal way
                  to add federated logins to an AWS SAM app? How is that
                  encorporated in the code ?
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
            <div className="QueryPostLike">
              <i class="fas fa-2x fa-heart"></i>
              <p className="QueryPostLikeText">5,684 Likes</p>
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

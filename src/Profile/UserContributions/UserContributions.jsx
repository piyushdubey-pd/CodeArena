import "./UserContributions.css";

import React, { useState } from "react";
import { MoreVert, PinDropSharp } from "@mui/icons-material";

import img1 from "../../PostFeed/components/Feed/FeedPeopleImages/1.jpg";
// import QueryAnswersModal from "../QueryAnswers/QueryAnswersModal";
// import QueryAddAnswerModal from "../QueryAddAnswer/QueryAddAnswerModal";

export default function UserContributions(props) {
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
      {/* <QueryAddAnswerModal open={isAddAns} Close={handleAddAnswerClose} /> */}

      {/* <QueryAnswersModal open={showAnswer} Close={handleClose} /> */}

      <div className="UserContriMainPost">
        <div className="UserContriPostHead">
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

        {/* Body */}
        <div className="UserContriPostBody">
          <div className="UserQueryQuestion">
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

            <div className="AnswerAndReadOptions">
              {/* <div className="UserContriReadYourAnswer">
                <a href="/" onClick={handleAddAnswerOpen}>
                  Read Your Answer !
                </a>
              </div> */}

              <div className="UserContriReadMore">
                <a href="/" onClick={handleAddAnswerOpen}>
                  Wanna Answer ?
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ReadAnswer */}

        {/* <div className="UserReadTheAnswerMain">

        </div> */}

        <div className="UserContriPostFoot">
          <div className="UserQueryPostLikeCmt">
            <div className="UserQueryPostLike">
              <i class="fas fa-2x fa-heart"></i>
              <p className="UserQueryPostLikeText">5,684 Likes</p>
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

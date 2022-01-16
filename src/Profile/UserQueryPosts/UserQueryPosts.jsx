import "./UserQueryPosts.css";

import React, { useState } from "react";
import { MoreVert, PinDropSharp } from "@mui/icons-material";

import img1 from "../../PostFeed/components/Feed/FeedPeopleImages/1.jpg";
import QueryAddAnswerModal from "../../QueryFeed/components/QueryShare/QueryAddAnswer/QueryAddAnswerModal";
import QueryAnswersModal from "../../QueryFeed/components/QueryShare/QueryAnswers/QueryAnswersModal";
export default function UserQueryPost(props) {
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

      <div className="UserQueryMainPost">
        <div className="UserQueryPostHead">
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

        <div className="UserQueryPostBody">
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

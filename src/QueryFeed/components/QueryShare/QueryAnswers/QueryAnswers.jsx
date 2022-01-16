import React from "react";

import "./QueryAnswers.css";

import img1 from "../../../../PostFeed/components/Feed/FeedPeopleImages/4.jpg";

import QueryAnswersListItems from "./QueryAnswersListItems/QueryAnswersListItem"
const QueryAnswers = () => {
  return (
    <div className="ShowAnwersMain">
      <div className="MainQuestion">
        <div className="AnswerPostHead">
          {/* <div className="shareWrapper"> */}
          <div className="shareTop">
            <div className="shareProfileImg">
              <img src={img1} alt="" />
            </div>
            <div className="shareInput">
              <p className="MainTitle">
                What is the most minimal way to add federated logins to an AWS
                SAM app?What is the most minimal way to add federated logins to
                an AWS SAM app?
              </p>
              {/* <span className="SubTitle">5 min ago</span> */}
            </div>
          </div>

          {/* </div> */}
        </div>
      </div>

      <div className="MainQuestionDescreption">
        <div class="AnswerDescScrollbar" id="style-4">
          <div class="AnswerDescSrollforce-overflow">
            <p className="AnswerDescStyle">
              What is the most minimal way to add federated logins to an AWS SAM
              app?What is the most minimal way to add federated logins to an AWS
              SAM app? What is the most minimal way to add federated logins to
              an AWS SAM app?What is the most minimal way to add federated
              logins to an AWS SAM app? What is the most minimal way to add
              federated logins to an AWS SAM app?What is the most minimal way to
              add federated logins to an AWS SAM app? What is the most minimal
              way to add federated logins to an AWS SAM app?What is the most
              minimal way to add federated logins to an AWS SAM app? What is the
              most minimal way to add federated logins to an AWS SAM app?What is
              the most minimal way to add federated logins to an AWS SAM app?
            </p>
          </div>
        </div>
      </div>

      <div className="AnsHeading">
        <p>ANSWERS ...</p>
      </div>

      {/* <hr className="AnswersBelowLine" /> */}

      <div className="MainAllAnswers">
        <div class="AnswerListScrollbar" id="style-4">
          <div class="AnswerListSrollforce-overflow">
            <QueryAnswersListItems />
            <QueryAnswersListItems />
            <QueryAnswersListItems />
            <QueryAnswersListItems />
            <QueryAnswersListItems />
            <QueryAnswersListItems />
            <QueryAnswersListItems />
            <QueryAnswersListItems />
            <QueryAnswersListItems />
            <QueryAnswersListItems />
            <QueryAnswersListItems />
            <QueryAnswersListItems />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueryAnswers;

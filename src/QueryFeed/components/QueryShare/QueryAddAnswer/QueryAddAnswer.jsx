import React from "react";

import "./QueryAddAnswer.css";

import img1 from "../../../../PostFeed/components/Feed/FeedPeopleImages/4.jpg";

const QueryAddAnswer = () => {
  return (
    <div className="AddAnswerMain">
      <div className="AddAnswerPostHead">
        {/* <div className="shareWrapper"> */}
        <div className="shareTop">
          <div className="shareProfileImg">
            <img src={img1} alt="" />
          </div>
          <div className="shareInput">
            <p className="MainTitle">Sherlock Holmes</p>
            {/* <span className="SubTitle">5 min ago</span> */}
          </div>
          {/* </div> */}
        </div>
      </div>

      <div className="AddAnswer_ANS">
        {/* <div class="AddAnswer_ANS_Scrollbar" id="style-4">
          <div class="AddAnswer_ANS_Srollforce-overflow"> */}
        <textarea
          className="AddAnswer_ANS_Text"
          placeholder="Answer Here ..."
          cols="80"
        />

        {/* </div>
        </div> */}
      </div>

      <div className="AddAnswer_Code">
        {/* <div class="AddAnswer_ANS_Scrollbar" id="style-4">
          <div class="AddAnswer_ANS_Srollforce-overflow"> */}
        <textarea
          className="AddAnswer_Code_Text"
          placeholder="Code Here ..."
          cols="80"
        />

        {/* </div>
        </div> */}
      </div>

      <div class="AddAnswerwrapper">
        <div class="AddAnswerlink_wrapper ">
          <a href="/">POST</a>
        </div>
      </div>
    </div>
  );
};

export default QueryAddAnswer;

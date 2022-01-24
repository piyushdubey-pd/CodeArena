import "./UserContributions.css";

import React, { useState, useEffect } from "react";
import { MoreVert, PinDropSharp } from "@mui/icons-material";
import { db } from "../../firebase";
import { get, ref } from "firebase/database";

import img1 from "../../PostFeed/components/Feed/FeedPeopleImages/1.jpg";
// import QueryAnswersModal from "../QueryAnswers/QueryAnswersModal";
// import QueryAddAnswerModal from "../QueryAddAnswer/QueryAddAnswerModal";

export default function UserContributions(props) {
  // ADD_Answer

  const [name, setName] = useState("");
  useEffect(() => {
    const reff = ref(db,"/login_details/"+props.contri.userid);
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
              <p className="MainTitle">{name}</p>
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
              <h2>{props.contri.question}</h2>
                <p>
                {props.contri.description}
                 <div>{props.contri.code}</div>
                 <div>{props.contri.time}</div>
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
              <p className="UserQueryPostLikeText">{props.contri.likes}</p>
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

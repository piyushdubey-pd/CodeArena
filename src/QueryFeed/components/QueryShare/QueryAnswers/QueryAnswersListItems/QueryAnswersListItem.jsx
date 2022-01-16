import React from "react";


import QueryIndividualAnswersModal from "./QueryIndividualAnswers/QueryIndividualAnswersModal";
import QueryAnswersModal from "../QueryAnswersModal";

import "../../../../../login/pages/Login.css";


import "./QueryAnswersListItem.css"
import img1 from "../../../../../PostFeed/components/Feed/FeedPeopleImages/4.jpg"
import FavoriteIcon from "@mui/icons-material/Favorite";
import RateReviewIcon from "@mui/icons-material/RateReview";


const QueryAnswersListItems = () => {

    const [ShowIndividualAns, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <React.Fragment>

      <QueryIndividualAnswersModal
        open={ShowIndividualAns}
        Close={handleClose}
      />
      {/* <QueryAnswersModal open={ShowIndividualAns} Close={handleClose} /> */}

      <div>
        <div className="MainAnswersList">
          {/* AnswerPost Breif */}

          <div className="BreifAnswerMain">
            <div className="BreifAnswerPostHead">
              {/* <div className="shareWrapper"> */}
              <div className="shareTop">
                <div className="shareProfileImg">
                  <img src={img1} alt="" />
                </div>
                <div className="shareInput">
                  <p className="MainTitle">Sherlock Holmes </p>

                  <div className="AnswerBreifIcons">
                    <div className="AnswerBreifIconsLikes">
                      {/* <i class="fas fa-1x fa-heart"></i> */}
                      <FavoriteIcon fontSize="medium" />
                      <p className="AnswersLikeText">5,684 Likes</p>
                    </div>

                    <div className="AnswerBreifIconsReadAns">
                      {/* <i class="fas fa-1x fa-heart"></i> */}
                      <RateReviewIcon fontSize="medium" />
                      <div className="AnswersReadText">
                        <p onClick={handleOpen}>Read Answer</p>
                      </div>
                    </div>
                  </div>

                  {/* <span className="SubTitle">5 min ago</span> */}
                </div>
              </div>

              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default QueryAnswersListItems;
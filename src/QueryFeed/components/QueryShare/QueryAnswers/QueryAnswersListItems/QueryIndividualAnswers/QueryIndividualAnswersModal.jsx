import * as React from "react";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

// import QueryIndividualAnswers from "../QueryIndividualAnswers/QueryIndividualAnswersModal";
// import Login from "../../../../../../login/pages/Login";

import img1 from "../../../../../../PostFeed/components/Feed/FeedPeopleImages/4.jpg";

import "./QueryIndividualAnswers.css";

const style = {
  position: "absolute",
  top: "1%",
  left: "55%",
  // "z-index":2,
  // transform: "translate(-50%, -50%)",
  // width: 500,
  // bgcolor: "background.paper",
  // border: "2px solid #000",
  // boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  //   const [open, setOpen] = React.useState(false);
  //   const handleOpen = () => setOpen(true);
  //   const handleClose = () => setOpen(false);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={props.open}
        onClose={props.Close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <QueryIndividualAnswers /> */}
          {/* <Login/> */}

          <div className="IndividualAnswersMain">
            {/* 1 */}
            <div className="IndividualNameSec">
              {/* <div className="shareWrapper"> */}
              <div className="shareTop">
                <div className="shareProfileImg">
                  <img src={img1} alt="" />
                </div>
                <div className="shareInput">
                  <p className="MainTitle">{props.username}</p>
                  {/* <span className="SubTitle">5 min ago</span> */}
                </div>
              </div>

              {/* </div> */}
            </div>

            {/* 2 */}
            <div className="IndividualAnswerSec">
              <div class="IndividualAnswerScrollbar" id="style-4">
                <div class="IndividualAnswerSrollforce-overflow">
                  <p className="IndividualAnswerText">
                    {props.answer.answer}
                    {props.answer.time}
                  </p>
                </div>
              </div>
            </div>

            {/* 3 */}
            <div className="IndividualCodeSec">
              <div class="IndividualCodeScrollbar" id="style-4">
                <div class="IndividualCodeSrollforce-overflow">
                  <p className="IndividualCodeText">
                    {props.answer.code}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

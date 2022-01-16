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
                  <p className="MainTitle">Sherlock Holmes</p>
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
                    Sherlock Holmes is a 2009 period mystery action film based
                    on the character of the same name created by Sir Arthur
                    Conan Doyle. The film was directed by Guy Ritchie and
                    produced by Joel Silver, Lionel Wigram, Susan Downey, and
                    Dan LinSherlock Holmes is a 2009 period mystery action film
                    based on the character of the same name created by Sir
                    Arthur Conan Doyle. The film was directed by Guy Ritchie and
                    produced by Joel Silver, Lionel Wigram, Susan Downey, and
                    Dan Lin
                  </p>
                </div>
              </div>
            </div>

            {/* 3 */}
            <div className="IndividualCodeSec">
              <div class="IndividualCodeScrollbar" id="style-4">
                <div class="IndividualCodeSrollforce-overflow">
                  <p className="IndividualCodeText">
                    app.get("/Signup" ,
                    function(req,res)res.render("Signup",title"
                    Sign-Up",NameValue:"" , UsnValue:"" , EmailValue:"" ,
                    PasswordValue:"" , BranchValue:"" , ContactValue:"" ,
                    YearValue:"", Errortext :"" , loginName:"ADMIN LOGIN" ,
                    loginAddress: "adminLogin");); app.get("/Signup" ,
                    function(req,res)res.render("Signup",title"
                    Sign-Up",NameValue:"" , UsnValue:"" , EmailValue:"" ,
                    PasswordValue:"" , BranchValue:"" , ContactValue:"" ,
                    YearValue:"", Errortext :"" , loginName:"ADMIN LOGIN" ,
                    app.get("/Signup" ,
                    function(req,res)res.render("Signup",title"
                    Sign-Up",NameValue:"" , UsnValue:"" , EmailValue:"" ,
                    PasswordValue:"" , BranchValue:"" , ContactValue:"" ,
                    YearValue:"", Errortext :"" , loginName:"ADMIN LOGIN" ,
                    loginAddress: "adminLogin");); loginAddress:
                    "adminLogin");); font-weight: 900; color:; padding-left:
                    20px; padding-right: 20px; padding-bottom: 0px;
                    letter-spacing: 1px; line-height: 22px; font-size: 15px;
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

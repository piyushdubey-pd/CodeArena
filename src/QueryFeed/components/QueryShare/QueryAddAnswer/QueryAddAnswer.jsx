import React, {useState} from "react";
import "./QueryAddAnswer.css";
import {useAuth} from "../../../../contexts/AuthContext";
import img1 from "../../../../PostFeed/components/Feed/FeedPeopleImages/4.jpg";
import {db} from "../../../../firebase";
import {ref,set,push} from "firebase/database";
const QueryAddAnswer = (props) => {
  console.log(props.postid);
  const {currentUser} = useAuth();
  console.log(currentUser);

  const [answer, setAnswer] = useState({
    answer: "",
    code: "",
    userid: currentUser.uid,
    time: new Date().toLocaleString(),
    querryid: props.queryid,
    likes: 0,
  });
  let name, value;
  const getDetails = (e) => {
    name=e.target.name;
    value=e.target.value;
    setAnswer({ ... answer, [name]: value });
  }
  const addAnswer = () => {
    console.log(answer);
    var reffd = ref(db, 'queries/'+props.queryid+'/answers');
    var newref=push(reffd);
    set(newref,answer);
    alert("Your answer was added successfully");
  }

  return (
    <div className="AddAnswerMain">
      <div className="AddAnswerPostHead">
        {/* <div className="shareWrapper"> */}
        <div className="shareTop">
          <div className="shareProfileImg">
            <img src={img1} alt="" />
          </div>
          <div className="shareInput">
         { currentUser.displayName && <p className="MainTitle">{currentUser.displayName}</p> }
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
          name="answer"
          value={answer.answer}
          onChange={getDetails}
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
          name="code"
          value={answer.code}
          onChange={getDetails}
        />

        {/* </div>
        </div> */}
      </div>

      <div class="AddAnswerwrapper">
        <div class="AddAnswerlink_wrapper ">
          <a href="#" onClick={addAnswer}>POST</a>
        </div>
      </div>
    </div>
  );
};

export default QueryAddAnswer;

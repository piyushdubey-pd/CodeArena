import React, { useEffect, useState } from "react";
import { db } from "../../../../firebase";
import {ref,get,child} from "firebase/database"
import "./QueryAnswers.css";
import { useAuth } from "../../../../contexts/AuthContext";

import img1 from "../../../../PostFeed/components/Feed/FeedPeopleImages/4.jpg";

import QueryAnswersListItems from "./QueryAnswersListItems/QueryAnswersListItem"
const QueryAnswers = (props) => {
  const {currentUser} = useAuth();
  const [answers_list, setAnswers] = useState([]);
  const [questiondet, setQuestion] = useState("");
  useEffect(() => {
    console.log(props.queryid);
    var reff=ref(db,'queries/'+props.queryid+'/answers/');
    var reff2=ref(db,'queries/'+props.queryid);
    get(reff2).then((snapshot) => {
      if (snapshot.exists()){
        setQuestion(snapshot.val());
        // var question=snapshot.val().question;
        // var description=snapshot.val().description;
        // var code=snapshot.val().code;
      }
      else{
        console.log("not found");
      }
    }).catch((errorObject) => {
      console.log('The read failed: ' + errorObject.name);
    });

    get(reff).then((snapshot) => {
      if (snapshot.exists()){
        var answers=snapshot.val();
        var temp=[];
        console.log(answers);
        for (var x in answers){
          answers[x]["id"]=x;
          temp.push(answers[x]);
        }
        setAnswers(temp);
        // setAnswers(answers);
      }
      else{
        console.log("not found");
      }
    }).catch((errorObject) => {
      console.log('The read failed: ' + errorObject.name);
    });
  }, []);

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
                {questiondet.question}
                {questiondet.time}
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
            {questiondet.description}
            {questiondet.code}
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
            {/* <QueryAnswersListItems /> */}
            {/* <QueryAnswersListItems /> */}
            {answers_list && answers_list.map(function(answer){
              return(
                <QueryAnswersListItems answer={answer}/>
              )
            })
          }
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueryAnswers;

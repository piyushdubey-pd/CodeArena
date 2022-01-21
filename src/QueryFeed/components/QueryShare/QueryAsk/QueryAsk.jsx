import React, { useState } from "react";
import {useAuth} from "../../../../contexts/AuthContext";
import {db} from "../../../../firebase";
import {get, ref, set, push, child} from "firebase/database"
// import { Button } from "@mui/material";
import "./QueryAsk.css";

const QueryAsk = () => {
  const [isText, Setistext] = useState(true);
  const {currentUser} = useAuth();
  const [query, setQuery] = useState({
    question: "",
    description: "",
    code: "",
    userid: currentUser.uid ,
    answers: [],
    time:"",
    likes: 0,
  });

  let name, value;
  const getDetails = (e) => {
    name=e.target.name;
    value=e.target.value;

    setQuery({ ... query, [name]: value });
  }

  const postQuery = () => {
    console.log("Post clicked");
    console.log(query);
    setQuery({ ... query, ["time"]: new Date().toLocaleString() });
    if (query["question"]!=""){
      const queryRef=ref(db,'queries/');
      const newQueryRef=push(queryRef);
      set(newQueryRef,query);
      alert("Query added successfully");
    }
    else
    {
      alert("Incomplete feild for posting");
    }
  }

  const ChangeToText = (event) => {
    event.preventDefault();
    Setistext(true);
  };

  const ChangeToCode = (event) => {
    event.preventDefault();
    Setistext(false);
  };
  

  return (
    <div className="MainQueryAsk">
      <div className="QueryHeader">
        <p>What's Your Query ?</p>
      </div>

      <div class="ASKwrapper">
        <div class="ASKlink_wrapper">
          <a href="/" onClick={ChangeToText}>
            TEXT
          </a>
        </div>

        <div class="ASKlink_wrapper CodeBTN">
          <a href="/" onClick={ChangeToCode}>
            CODE
          </a>
        </div>
      </div>

      <div className={isText ? "ChangeToCode CodeQuery" : "CodeQuery"}>
        <div className="QueryCodeBar">
          <textarea
            placeholder="CODE"
            className="QueryCodeInput"
            cols="70"
            name="code"
            value={query.code}
            onChange={getDetails}
          ></textarea>
        </div>
      </div>

      <div className={isText ? "TextQuery" : "ChangeToCode TextQuery"}>
      
        <div className="QueryQuestionBar">
          <textarea
            placeholder="QUESTION"
            className="QuerysearchInput"
            cols="70"
            name="question"
            value={query.question}
            onChange={getDetails}
          ></textarea>
        </div>

        <div className="DescQuerysearchBar">
          <textarea
            placeholder="DESCREPTION"
            className="DescQuerysearchInput"
            cols="70"
            name="description"
            value={query.description}
            onChange={getDetails}
          ></textarea>
        </div>
      </div>

      <div class="Postwrapper">
        <div class="Postlink_wrapper ">
          <a href="#" onClick={postQuery}>
            POST
          </a>
        </div>
      </div>

      {/* <button onClick={ChangeToCode}>click me</button> */}
    </div>
  );
};

export default QueryAsk;

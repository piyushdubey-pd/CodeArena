import React, { useState } from "react";

// import { Button } from "@mui/material";
import "./QueryAsk.css";

const QueryAsk = () => {
  const [isText, Setistext] = useState(true);

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
          ></textarea>
        </div>
      </div>

      <div className={isText ? "TextQuery" : "ChangeToCode TextQuery"}>
      
        <div className="QueryQuestionBar">
          <textarea
            placeholder="QUESTION"
            className="QuerysearchInput"
            cols="70"
          ></textarea>
        </div>

        <div className="DescQuerysearchBar">
          <textarea
            placeholder="DESCREPTION"
            className="DescQuerysearchInput"
            cols="70"
          ></textarea>
        </div>
      </div>

      <div class="Postwrapper">
        <div class="Postlink_wrapper ">
          <a href="/" onClick={ChangeToText}>
            POST
          </a>
        </div>
      </div>

      {/* <button onClick={ChangeToCode}>click me</button> */}
    </div>
  );
};

export default QueryAsk;

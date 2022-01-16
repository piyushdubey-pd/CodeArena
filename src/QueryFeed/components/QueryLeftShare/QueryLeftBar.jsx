import React from "react";


import QueryLeftBarListItems from "./QueryLeftBarListItems";

import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import "./QueryLeftBar.css";

const QueryLeftBar = () => {
  return (
    <div className="LeftBarMain">
      <div className="LeftBarHead">
        <p className="LeftBarHeadText">
          TOP QUERIES
          <div className="LeftBarHeadIcon">
            <LocalFireDepartmentIcon fontSize="medium" />
          </div>
        </p>
      </div>

      <div className="LeftBarList">
        <div class="LeftBarListItemsScrollbar" id="style-4">
          <div class="LeftBarListItemsSrollforce-overflow">
            <QueryLeftBarListItems ListItemText="How to connect to AWS services ? " />
            <QueryLeftBarListItems ListItemText="Node Express Server Not running!"/>
            <QueryLeftBarListItems ListItemText="How to connect React with Node Exrpress Server ?"/>
            <QueryLeftBarListItems ListItemText="How to send data using ejs ?"/>
            <QueryLeftBarListItems ListItemText="Are Java and JavaScript Same ?"/>
            <QueryLeftBarListItems ListItemText="Django not working!"/>
            <QueryLeftBarListItems ListItemText="How to connect Api with backend ?"/>
            <QueryLeftBarListItems ListItemText="React npm start not working !"/>
            <QueryLeftBarListItems ListItemText="How to connect to AWS services!"/>
            <QueryLeftBarListItems ListItemText="How to connect to AWS services!"/>
            <QueryLeftBarListItems ListItemText="How to connect to AWS services!"/>
            <QueryLeftBarListItems ListItemText="How to connect to AWS services!"/>
            <QueryLeftBarListItems ListItemText="How to connect to AWS services!"/>
            <QueryLeftBarListItems ListItemText="How to connect to AWS services!"/>
            <QueryLeftBarListItems ListItemText="How to connect to AWS services!"/>
            <QueryLeftBarListItems ListItemText="How to connect to AWS services!"/>
            <QueryLeftBarListItems ListItemText="How to connect to AWS services!"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueryLeftBar;

import React from "react";

import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";

import "./QueryRightTopContributors.css";

import QueryRightTopContributorsItem from "./QueryRightTopContributorsItem";
const QueryRightTopContributors = () => {
  return (
    <div className="TopContributorsMain">
      <div className="TopContributorsHead">
        <p className="TopContributorsText">TOP CONTRIBUTORS</p>
        <MilitaryTechIcon fontSize="large" />
      </div>

      <div className="TopContributorsList">
        <div class="TopContributorsList_Scrollbar" id="style-4">
          <div class="TopContributorsList_Srollforce-overflow">
            <QueryRightTopContributorsItem />
            <QueryRightTopContributorsItem />
            <QueryRightTopContributorsItem />
            <QueryRightTopContributorsItem />
            <QueryRightTopContributorsItem />
            <QueryRightTopContributorsItem />
            <QueryRightTopContributorsItem />
            <QueryRightTopContributorsItem />
            <QueryRightTopContributorsItem />
            <QueryRightTopContributorsItem />
            <QueryRightTopContributorsItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueryRightTopContributors;

import React from "react";

import UserNavigation from "../../Shared/components/UserNavigation";

import "./QueryFeed.css";

import QueryShare from "../components/QueryShare/QueryShare";
import QueryLeftBar from "../components/QueryLeftShare/QueryLeftBar";
import QueryRightShare from "../components/QueryRightShare/QueryRightShare";
const QueryFeed = () => {
  return (
    <React.Fragment>
      <UserNavigation />

      <div class="QueryFeed">
        {/* LEFTBAR */}
        <div class="QuerySideBar">
          <QueryLeftBar />
        </div>

        {/* CENTER FEED */}
        <div class="QueryMidFeed">
          <QueryShare />
        </div>

        {/* RIGHTBAR */}
        <div class="QueryRightBar">
          <QueryRightShare/>
        </div>
      </div>
    </React.Fragment>
  );
};

export default QueryFeed;

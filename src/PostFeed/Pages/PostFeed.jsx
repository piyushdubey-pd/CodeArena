import React from "react";


import Feed from "../components/Feed/Feed";
import UserNavigation from "../../Shared/components/UserNavigation"
import BackParticles from "../../Shared/components/background";
const PostFeed = () => {
    return (
      <React.Fragment>
        {/* <BackParticles/> */}
        <UserNavigation />
        <Feed />
      </React.Fragment>
    );
};

export default PostFeed;
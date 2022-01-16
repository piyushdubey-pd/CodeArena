import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import {Link, useHistory} from "react-router-dom";


// import Home from "./home/pages/Home.jsx";
import Feed from "../components/Feed/Feed";
import UserNavigation from "../../Shared/components/UserNavigation"
import BackParticles from "../../Shared/components/background";
const PostFeed = () => {
  const { currentUser } = useAuth();
  // const history = useHistory();
    return (
      <React.Fragment>
        {/* <BackParticles/> */}
        <UserNavigation />
        <Feed />
      </React.Fragment>
    );
    
    
};

export default PostFeed;
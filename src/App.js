import React from "react";

import {BrowserRouter as Router , Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


import Home from "./home/pages/Home.jsx";
import PostFeed from "./PostFeed/Pages/PostFeed.jsx";
import QueryFeed from "./QueryFeed/Pages/QuereyFeed";
import UserProfile from "./Profile/UserProfile.jsx";
import { AuthProvider, useAuth } from "./contexts/AuthContext.js";
// import Login from "./login/pages/Login.jsx"
// import Signup from "./Signup/pages/Signup.jsx";
const App = () => {

  const user = useAuth();
  return (
    <AuthProvider>
    <Router>
      <Route path="/" exact>
         <Home /> 
      </Route>

      <Route path="/PostFeed">
        <PostFeed />
      </Route>

      <Route path="/QueryFeed">
        <QueryFeed />
      </Route>

      <Route path="/UserProfile">
        <UserProfile />
      </Route>

      {/* <Route path="/Login">
        <Login />
      </Route>

      <Route path="/Signup">
        <Signup />
      </Route> */}
    </Router>
    </AuthProvider>
  );
}

export default App;

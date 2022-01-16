import React, { useState } from "react";

import "./Login.css";

// import { Button } from "@mui/material";
const AdminLogin = () => {
//   const [toggle, SetToggle] = useState(false);

//   const ToggleHandler = (event) => {
//     event.preventDefault();
//     console.log("Over");
//     SetToggle((prev) => {
//       return !prev;
//     });
//   };

  return (
    <div className="LoginModalStyle">
      <div class="cont" style={{width:"700px"}}>
        <div class="form sign-in" style={{"margin-left":"50px"}}>
          <h2>
            <b>Welcome ADMIN</b>
          </h2>
          <label>
            <span className="FormLables">Email</span>
            <input className="LoginInputs Email" type="email" />
          </label>
          <label>
            <span className="FormLables">Password</span>
            <input className="LoginInputs" type="password" />
          </label>
          <p class="forgot-pass  FormLables">Forgot password?</p>
          <button type="button" class="submit">
            Sign In
          </button>
        </div>

        {/* <div class="sub-cont">
          <div class="img">
            <div class="img__text m--up">
              <p>Don't have an account? Please Sign up!</p>
            </div>
            <div class="img__text m--in">
              <p>If you already has an account, just sign in.</p>
            </div>

            <div class="SwitchStyle">
              <Button href="/" onClick={ToggleHandler} class="SwitchStyle">
                Sign Up
              </Button>
            </div>
          </div> */}

          {/* <div
            class="form sign-up"
            style={{ width: toggle ? "700px" : "700px" }}
          >
            <h2>
              <b>Create your Account</b>
            </h2>
            <label>
              <span className="FormLables">Name</span>
              <input className="LoginInputs" type="text" />
            </label>
            <label>
              <span className="FormLables">Email</span>
              <input className="LoginInputs" type="email" />
            </label>
            <label>
              <span className="FormLables">Password</span>
              <input className="LoginInputs" type="password" />
            </label>
            <label>
              <span className="FormLables">Phone</span>
              <input className="LoginInputs" type="text" />
            </label>
            <button type="button" class="submit">
              Sign Up
            </button>
          </div>
        {/* </div> */}
      </div> 
    </div>
  );
};

export default AdminLogin;

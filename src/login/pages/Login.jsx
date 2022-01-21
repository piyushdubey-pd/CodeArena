import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import {db} from "../../firebase";
import {ref, set} from "firebase/database"
import "./Login.css";

import { Button } from "@mui/material";
import { FaxRounded } from "@mui/icons-material";
const Login = () => {
  const [toggle, SetToggle] = useState(false);

  const ToggleHandler = (event) => {
    event.preventDefault();
    console.log("Over");
    SetToggle((prev) => {
      return !prev;
    });
  };
  const [user, setUser] = useState({
    name: "",
    email: "",
    passw: "", 
    phno: "",
  });

  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ... user, [name]: value });
  }

  const history = useHistory();
  const {signup} = useAuth();
  const postData = async (e) => {
    console.log("Submit clicked");
    e.preventDefault();

    const {name, email, passw, phno} = user;

    if (name && email && passw && phno) {
    
    const user_det=await signup(email,passw);
    // console.log(user_det.user.uid);
    var uid=user_det.user.uid;
    set(ref(db,"login_details/"+uid),{
      name:name,
      phno:phno
    });
  

    // const res = await fetch("https://proj1-8a95b-default-rtdb.firebaseio.com/login_details.json",
    // {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    // },
    // body: JSON.stringify({
    //     uid,
    //     name,
    //   phno,
    // }),
    // }
    // );

    // if (res){
      setUser({
        name: "",
        email: "",
        passw: "",
        phno: "",
      });

      alert("Data posted successfully");
      history.push("/QueryFeed");
    // }
  }
  else{
    alert("Please fill all the details");
  }
  };


  //Login
  const [error,setError] = useState("");
  const [loading,setLoading] = useState(false);
  const {login} = useAuth();
  
  const loginData = async (e) => {
    console.log("Submit login clicked");
    e.preventDefault();

    const {email,passw} = user;

    try {
        setError("");
        setLoading(true);
        var user_det=await login(email,passw);
        console.log(user_det.user.uid);
        alert("Login Successful");
        history.push("/QueryFeed")
    } catch (error) {
        setError("Failed to login");
        alert("Failed to login");
        
    }
    setLoading(false);

  };

  
  return (
    <div className="LoginModalStyle">
      <div class={toggle ? "cont s--signup" : "cont"}>
        <div class="form sign-in">
          <h2 className="LoginHeader">
            <p>WELCOME</p>
          </h2>
          <label className="Login_Email">
            <span className="FormLables">Email</span>
            <input className="LoginInputs Email" name="email" type="email" value={user.email} onChange={getUserData} required />
          </label>
          <label className="Login_Password">
            <span className="FormLables">Password</span>
            <input className="LoginInputs" name="passw" type="password" value={user.passw} onChange={getUserData} required />
          </label>
          <p class="forgot-pass  FormLables">Forgot password?</p>
          <div className="SignInBTN">
            <button type="button" class="submit" onClick={loginData} >
              Sign In
            </button>
          </div>
        </div>

        <div class="sub-cont">
          <div class="img">
            <div class="img__text m--up">
              <p>Don't have an account? Please Sign up!</p>
            </div>
            <div class="img__text m--in">
              <p>If you already have an account, just sign in.</p>
            </div>

            <div class="SwitchStyle">
              <Button href="/" onClick={ToggleHandler} class="SwitchStyle">
                {toggle ? "Sign In" : "Sign Up"}
              </Button>
            </div>
          </div>

          <div
            class="form sign-up"
            style={{ width: toggle ? "700px" : "700px" }}
          >
            <h2 className="SignUpHeader">
              <b>CREATE YOUR ACCOUNT</b>
            </h2>
            <label className="SignUp_Name">
              <span className="FormLables">Name</span>
              <input className="LoginInputs" name="name" type="text" value={user.name} onChange={getUserData} required/>
            </label>
            <label className="SignUp_Email">
              <span className="FormLables">Email</span>
              <input className="LoginInputs" name="email" type="email" value={user.email} onChange={getUserData} required />
            </label>
            <div className="Signup_Password_Phone">
              <label className="SignUp_Password">
                <span className="FormLables">Password</span>
                <input className="LoginInputs" name="passw" type="password" value={user.passw} onChange={getUserData} required />
              </label>
              <label className="SignUp_Phone">
                <span className="FormLables">Phone</span>
                <input className="LoginInputs" name="phno" type="number" value={user.phno} onChange={getUserData} required />
              </label>
            </div>
            <div className="SignUpBTN">
              <button type="button" class="submit" onClick={postData}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { useState, useRef } from "react";
import "./login.css";
import "boxicons/css/boxicons.min.css";
import { useAuthStore } from "../store/authStore.js";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

import axios from "axios";

function Login() {
  // backend connect
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  // const [name, setName] = useState("");
  const navigate = useNavigate();

  const { login, isLoading, error, signup } = useAuthStore();
  const handleSendOtp = async () => {
    try {
      const response = await axios.post("http://localhost:3000/otp/send-otp", {
        email,
      });

      console.log("good");
    } catch (error) {
      console.log("error occured");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(email, password);
    handleSendOtp();
    navigate("/otp", {
      state: { email },
    });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      await signup(email, password, cpassword);
    } catch (error) {
      console.log(error);
    }
  };

  const sliderRef = useRef(null);
  const formSectionRef = useRef(null);
  // login signup error
  const [loginEmailError, setLoginEmailError] = useState("");
  const [loginPasswordError, setLoginPasswordError] = useState("");
  const [signUpEmailError, setSignUpEmailError] = useState("");
  const [signUpPasswordError, setSignUpPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  //

  // slider
  const handleSignupClick = () => {
    if (sliderRef.current && formSectionRef.current) {
      sliderRef.current.classList.add("moveslider");
      formSectionRef.current.classList.add("form-section-move");
    }
  };

  const handleLoginClick = () => {
    if (sliderRef.current && formSectionRef.current) {
      sliderRef.current.classList.remove("moveslider");
      formSectionRef.current.classList.remove("form-section-move");
    }
  };

  // login signup error
  const validateEmail = (email) => {
    return email.includes("@");
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    return passwordRegex.test(password);
  };

  const handleLoginEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (value.trim() === "") {
      setLoginEmailError("");
    } else if (!validateEmail(value)) {
      setLoginEmailError("Please enter a valid email address.");
    } else {
      setLoginEmailError("");
    }
    // (e) => setEmail(e.target.value)
  };

  const handleLoginPasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (value.trim() === "") {
      setLoginPasswordError("");
    } else if (!validatePassword(value)) {
      setLoginPasswordError(
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character."
      );
    } else {
      setLoginPasswordError("");
    }
    // (e) => setPassword(e.target.value)
  };

  const handleSignUpEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (value.trim() === "") {
      setSignUpEmailError("");
    } else if (!validateEmail(value)) {
      setSignUpEmailError("Please enter a valid email address.");
    } else {
      setSignUpEmailError("");
    }
    // (e) => setEmail(e.target.value)
  };

  const handleSignUpPasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (value.trim() === "") {
      setSignUpPasswordError("");
    } else if (!validatePassword(value)) {
      setSignUpPasswordError(
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character."
      );
    } else {
      setSignUpPasswordError("");
    }
    // (e) => setPassword(e.target.value)
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setCpassword(value);
    if (value.trim() === "") {
      setConfirmPasswordError("");
    } else if (value !== password) {
      setConfirmPasswordError("Passwords do not match.");
    } else {
      setConfirmPasswordError("");
    }
    // (e) => setCpassword(e.target.value)
  };

  //
  return (
    <>
      <div className="main">
        <div className="left">
          <div className="">
            <h2 className="text-5xl font-bold">Welcome</h2>
          </div>
          <div className="">
            <img src="./logo.png" alt="logo" />
          </div>
          <div className="text">
            <div className="text1">
              <h2 className="font-bold">
                <q>
                  {" "}
                  Explore Endless Destinations With <span className="text-orange-400">U</span>daariyaan,
                  Your Gateway To Unforgettable Travel Experience
                </q>
              </h2>
            </div>
            <div className="text2">
              <h4 className="text-lg font-semibold">Adventure Awaits You</h4>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="slider">
            <div className="btno">
              <button className="log" onClick={handleLoginClick}>
                Login
              </button>
              <button className="sig" onClick={handleSignupClick}>
                Sign-Up
              </button>
            </div>
            <div ref={formSectionRef} className="form-section">
              <div ref={sliderRef} className="login-box">
                <p className="in-up">Login</p>
                <div className="idpass">
                  <form onSubmit={handleLogin}>
                    <div className="mail">
                      <input
                        type="email"
                        className="input1"
                        placeholder="   E-mail"
                        value={email}
                        onChange={handleLoginEmailChange}
                        required
                      />
                      <i className="bx bx-user icon"></i>
                      {loginEmailError && (
                        <div className="error-message">{loginEmailError}</div>
                      )}
                    </div>
                    <br />
                    <div className="pass">
                      <input
                        type="password"
                        className="input1"
                        placeholder="   Password"
                        value={password}
                        onChange={handleLoginPasswordChange}
                        required
                      />
                      <i className="bx bx-lock-alt icon"></i>
                      {loginPasswordError && (
                        <div className="error-message">
                          {loginPasswordError}
                        </div>
                      )}
                    </div>
                    <div className="forgot">
                      <a
                        href="http://127.0.0.1:5500/login2.html"
                        target="_blank"
                      >
                        Forgot Password?{" "}
                      </a>
                    </div>
                    <br />
                    <div className="">
                      <button
                        type="submit"
                        className="w-full bg-blue-500 py-2 px-2 rounded-3xl text-center text-black font-bold text-xl mb-4 hover:bg-blue-600"
                      >
                        Login
                      </button>
                    </div>
                    {/* <pre>         or continue with</pre> */}
                    <div className="border-b border-black text-center font-semibold text-lg pb-4">
                      or continue with
                    </div>
                  </form>
                </div>
                <div className="flex gap-5">
                  <FaGoogle className="text-xl hover:cursor-pointer hover:scale-110" />
                  <FaFacebookF className="text-xl hover:cursor-pointer hover:scale-110" />
                  <FaApple className="text-2xl hover:cursor-pointer hover:scale-110" />
                </div>
              </div>
              <div className="signup-box">
                <p className="in-up">Sign-Up</p>
                <div className="idpass">
                  <form onSubmit={handleSignUp}>
                    <div className="mail">
                      <input
                        type="email"
                        className="input1"
                        placeholder="   E-mail"
                        value={email}
                        onChange={handleSignUpEmailChange}
                        required
                      />
                      <i className="bx bx-user icon"></i>
                      {signUpEmailError && (
                        <div className="error-message">{signUpEmailError}</div>
                      )}
                    </div>
                    <br />
                    <div className="pass">
                      <input
                        type="password"
                        className="input1"
                        placeholder="   Password"
                        value={password}
                        onChange={handleSignUpPasswordChange}
                        required
                      />
                      <i className="bx bx-lock-alt icon"></i>
                      {signUpPasswordError && (
                        <div className="error-message">
                          {signUpPasswordError}
                        </div>
                      )}
                    </div>
                    <br />
                    <div className="conpass">
                      <input
                        type="password"
                        className="input1"
                        placeholder="   Confirm Password"
                        value={cpassword}
                        onChange={handleConfirmPasswordChange}
                        required
                      />
                      <i className="bx bx-message-square-check"></i>
                      {confirmPasswordError && (
                        <div className="error-message">
                          {confirmPasswordError}
                        </div>
                      )}
                    </div>
                    <div className="forgot">
                      <a
                        href="http://127.0.0.1:5500/login2.html"
                        target="_blank"
                      >
                        Remember Password{" "}
                      </a>
                    </div>
                    <br />
                    <div className="">
                      <button
                        type="submit"
                        className="w-full bg-blue-500 py-2 px-2 rounded-3xl text-center text-black font-bold text-xl mb-4 hover:bg-blue-600"
                      >
                        Sign-up
                      </button>
                    </div>
                    {/* <pre> or continue with</pre> */}
                    <div className="border-b border-black text-center font-semibold text-lg pb-4">
                      or continue with
                    </div>
                  </form>
                </div>
                <div className="flex gap-5">
                  <FaGoogle className="text-xl hover:cursor-pointer hover:scale-110" />
                  <FaFacebookF className="text-xl hover:cursor-pointer hover:scale-110" />
                  <FaApple className="text-2xl hover:cursor-pointer hover:scale-110" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

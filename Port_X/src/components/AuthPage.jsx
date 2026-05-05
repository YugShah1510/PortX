import React, { useState } from "react";
import "./AuthPage.css";

import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiLock } from "react-icons/fi";

import logo from "../assets/portx-logo.jpg";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-wrapper">
      <div className="auth-box">

        {/* Logo */}
        <div className="logo-row">
          <img src={logo} alt="PortX Logo" className="logo-img" />
        </div>

        {/* Heading */}
        <h1>{isLogin ? "Welcome back" : "Create account"}</h1>
        <p className="subtitle">
          {isLogin
            ? "Sign in to save your portfolios across devices."
            : "Create your account to get started."}
        </p>

        {/* GitHub */}
        <button className="github-btn">
          <FaGithub className="icon" />
          {isLogin ? "Continue with GitHub" : "Sign up with GitHub"}
        </button>

        <div className="divider">OR</div>

        {/* Email */}
        <div className="input-box">
          <HiOutlineMail className="input-icon" />
          <input type="email" placeholder="Email" />
        </div>

        {/* Password */}
        <div className="input-box">
          <FiLock className="input-icon" />
          <input type="password" placeholder="Password" />
        </div>

        {/* Confirm Password (Signup only) */}
        {!isLogin && (
          <div className="input-box">
            <FiLock className="input-icon" />
            <input type="password" placeholder="Confirm Password" />
          </div>
        )}

        {/* Button */}
        <button className="primary-btn">
          {isLogin ? "Sign in" : "Create account"}
        </button>

        {/* Switch */}
        <p className="switch">
          {isLogin ? "New to PortX?" : "Already have an account?"}{" "}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Create account" : "Sign in"}
          </span>
        </p>

      </div>
    </div>
  );
}
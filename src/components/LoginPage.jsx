import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PasswordInput from "./PasswordInput";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-toastify";

import LogoImg from '../assets/logo.png'

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Retrieve user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    // Check if the user exists and credentials match
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      toast.success("Login successful!");
      navigate("/account");
    } else {
      toast.error("Email and password is wrong");
    }
  };

  return (
    <section className="vw-100 vh-100 bg-light">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          
          {/* Left Side Image */}
          <div className="col-md-8 col-lg-7 col-xl-6 text-center">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid"
              alt="Login illustration"
            />
          </div>

          {/* Login Form */}
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            
            {/* Logo Redirect to Home */}
            <div className="text-center mb-5">
              <img
                src={LogoImg}
                alt="Logo"
                className="img-fluid"
                style={{ width: "200px", cursor: "pointer" }}
                onClick={() => navigate("/")}
              />
            </div>

            <h2 className="text-center mb-4 fw-bold">Login</h2>

            <form onSubmit={handleLogin}>
              {/* Email Input */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Email address:</label>
                <input
                  type="email"
                  className="form-control form-control-lg border-2"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Password Input */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Password:</label>
                <PasswordInput
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-primary btn-lg w-100 fw-bold">
                Sign in
              </button>
            </form>

            {/* Register Link */}
            <p className="mt-3 text-center">
              Don't have an account?{" "}
              <button onClick={() => navigate("/register")} className="btn btn-link fw-bold">
                Register
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PasswordInput from "./PasswordInput";
import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import LogoImg from '../assets/logo.png'

const RegisterPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.warning("Passwords do not match!");
      return;
    }

    const user = { fullName, email, password };
    localStorage.setItem("user", JSON.stringify(user));

    toast.success("Registration successful!");
    navigate("/login");
  };

  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          {/* Image Section */}
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid"
              alt="Registration image"
            />
          </div>

          {/* Register Form Section */}
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            {/* Logo Redirect to Home */}
            <div className="text-center mb-3">
              <img
                src={LogoImg}
                alt="Logo"
                className="img-fluid"
                style={{ width: "200px", cursor: "pointer" }}
                onClick={() => navigate("/")}
              />
            </div>

            <h2 className="text-center mb-4">Register</h2>

            <form onSubmit={handleRegister}>
              {/* Full Name */}
              <div className="form-outline mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>

              {/* Email */}
              <div className="form-outline mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Password */}
              <div className="form-outline mb-3">
                <label className="form-label">Password</label>
                <input
                  value={password}
                  className="form-control form-control-lg"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {/* Confirm Password */}
              <div className="form-outline mb-4">
                <label className="form-label">Confirm Password</label>
                <PasswordInput
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-primary btn-lg btn-block w-100">
                Register
              </button>
            </form>

            {/* Already have an account */}
            <p className="mt-3 text-center">
              Already have an account?{" "}
              <button onClick={() => navigate("/login")} className="btn btn-link">
                Login
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;

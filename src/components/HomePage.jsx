import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = () => {
  const messages = [
    "Welcome to MyApp!",
    "Your journey starts here.",
    "Explore the best experience.",
    "Let's get started!",
  ];

  const [currentMessage, setCurrentMessage] = useState(messages[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => {
        const index = messages.indexOf(prev);
        return messages[(index + 1) % messages.length];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="vh-100 vw-100 bg-light d-flex flex-column">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">
            MyApp
          </Link>
          <div className="ms-auto">
            <Link to="/login" className="btn btn-outline-light me-2">
              Login
            </Link>
            <Link to="/register" className="btn btn-primary">
              Register
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section - Horizontally Centered */}
      <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-center flex-grow-1">
        {/* Image Section */}
        <div className="col-md-6 text-center">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            className="img-fluid"
            alt="Welcome"
          />
        </div>

        {/* Text and Button Section */}
        <div className="col-md-6 text-center">
          <h1 className="text-dark fw-bold">{currentMessage}</h1>
          <Link to="/register" className="btn btn-primary btn-lg mt-3">
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomePage;

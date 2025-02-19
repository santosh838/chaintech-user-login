import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-toastify";

const AccountPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setFullName(storedUser.fullName || "");
      setEmail(storedUser.email || "");
      setPhone(storedUser.phone || "");
      setPassword(storedUser.password || "");
    }
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedUser = { fullName, email, phone, password };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    toast.info("Account updated!");
  };

  const handleLogout = () => {
    toast.success("Logged out successfully!");
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 vw-100 bg-light">
      <div className="card p-4 shadow-lg bg-white text-dark" style={{ maxWidth: "420px", width: "100%", borderRadius: "12px" }}>
        
        {/* Logout Button */}
        <div className="text-end mb-3">
          <button onClick={handleLogout} className="btn btn-danger">
            Logout
          </button>
        </div>

        <h2 className="text-center fw-bold">Account Information</h2>
        <hr className="mb-3" />

        <form onSubmit={handleUpdate}>
          {/* Full Name */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Full Name:</label>
            <input
              type="text"
              className="form-control border-2"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Email:</label>
            <input
              type="email"
              className="form-control border-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Phone Number */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Phone Number:</label>
            <input
              type="tel"
              className="form-control border-2"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Password:</label>
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control border-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="btn btn-outline-dark"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-100 fw-bold">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default AccountPage;

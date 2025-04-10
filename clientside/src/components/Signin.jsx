import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// import "../css/index.css";
import "../components/login.css";

function Signin() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };
  console.log("data", data);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/api/", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const dataResponse = await response.json();

      if (dataResponse.error) {
        toast.error(dataResponse.message);
      }

      if (dataResponse.success) {
        toast.success(dataResponse.message);
        localStorage.setItem("token", dataResponse.token);
        navigate("/home");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      toast.error("An error occurred while processing your request.");
    }
  };

  const handleShowPasswordToggle = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="h-screen-center main">
      <div className="card-form">
        <div className="card-header">
          <div className="lock-icons">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              fill="currentColor"
            >
              <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
            </svg>{" "}
          </div>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-element">
            <label htmlFor="email">Email</label>
            <div className="input-container">
              <input
                type="email"
                placeholder="Enter your Email"
                value={data.email}
                name="email"
                disabled={loading}
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className="form-element">
            <label htmlFor="password">Password</label>
            <div className="input-container">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={data.password}
                disabled={loading}
                onChange={handleOnChange}
                className="form-control"
                placeholder="Enter your password"
              />
            </div>
          </div>
          <div>
            <input
              type="checkbox"
              id="showPassword"
              className="check"
              onChange={handleShowPasswordToggle}
            />
            <label htmlFor="showPassword" className="form-check-label">
              {" "}
              &nbsp; Show Password
            </label>
          </div>
          <button className="btn-sign">
            {loading ? "Loading..." : "Sign in"}
          </button>
          <p>
            Don't have an account?
            <NavLink to="/signup" className="link">
              {" "}
              Sign Up
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signin;

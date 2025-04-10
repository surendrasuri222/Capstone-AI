import React, { useEffect } from "react";
import Main from "./components/main/Main";
import { useNavigate } from "react-router-dom";

import Sidebar from "./components/sidebar/Sidebar";
import ContextProvider from "./context/Context";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Routes, Route } from "react-router-dom";

const App = () => {
  const token = localStorage.getItem("token");
  console.log(token);

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route
          path="/home"
          element={
            <>
              <Sidebar />
              <Main />
            </>
          }
        />

        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        {/* more routes */}
      </Routes>
    </>
  );
};

export default App;

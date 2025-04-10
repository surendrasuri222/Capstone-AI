import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
import "./Main.css";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  const {
    onSent,
    setInput,
    input,
    showResult,
    recentPrompt,
    resultData,
    loading,
  } = useContext(Context);
  const handleLogOut = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div className="main">
      <div className="nav">
        <p>ChatGPT</p>
        <div>
          <img src={assets.user_icon} alt="User Icon"></img>
          <button onClick={handleLogOut} className="logout-btn">
            Logout
          </button>
        </div>
      </div>

      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Dev</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} alt=""></img>
              </div>
              <div className="card">
                <p>Briefly summarize this concept: urban planning</p>
                <img src={assets.bulb_icon} alt=""></img>
              </div>
              <div className="card">
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt=""></img>
              </div>
              <div className="card">
                <p>Improve the readability of the following code segment</p>
                <img src={assets.code_icon} alt=""></img>
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />

              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            ></input>
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />

              {input ? (
                <img onClick={() => onSent()} src={assets.send_icon} alt="" />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            ChatGPT may display inaccurate info, including about people, so
            double-check responses. Your privacy and AI Apps copyrights
            <span>
              <strong> @venkatkunisetti@gmail.com</strong>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;

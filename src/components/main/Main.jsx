import React, { useContext } from "react";
import "./main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    loadPrompt
  } = useContext(Context);
  
  return (
    <>
      <div className="main">
        <div className="nav">
          <p onClick={()=>{window.location.reload()}}>Real Intelligence</p>
          <img src={assets.chad_icon} alt="" />
        </div>
        <div className="main-container">
          {!showResult ? (
            <>
              <div className="greet">
                <p>
                  <span>Hello, Chad.</span>
                </p>
                <p>How you doin'</p>
              </div>
              <div className="cards">
                <div onClick={()=>{loadPrompt("Suggest beautiful places for road trip.")}} className="card">
                  <p>Suggest beautiful places for road trip.</p>
                  <img src={assets.compass_icon} alt="" />
                </div>
                <div onClick={()=>{loadPrompt("Explain quantum computing in simple terms.")}} className="card">
                  <p>Explain quantum computing in simple terms.</p>
                  <img src={assets.bulb_icon} alt="" />
                </div>
                <div onClick={()=>{loadPrompt("Give tips for home workout, without  equipments.")}} className="card">
                  <p>Give tips for home workout, without  equipments.</p>
                  <img src={assets.message_icon} alt="" />
                </div>
                <div onClick={()=>{loadPrompt("Explain Floyd's cycle detection algorithm in linked list with code.")}} className="card">
                  <p>
                    Explain Floyd's cycle detection algorithm in linked list
                    with code.
                  </p>
                  <img src={assets.code_icon} alt="" />
                </div>
              </div>
            </>
          ) : (
            <div className="result">
              <div className="result-title">
                <img src={assets.chad_icon} alt="" />
                <p>{recentPrompt}</p>
              </div>
              <div className="result-data">
                {/* <img src={assets.communication} alt="" /> */}
                {loading ? (
                  <div className='loader'>
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
                type="text"
                placeholder="Enter prompt here..."
                onChange={(e) => setInput(e.target.value)}
                value={input}
                onKeyDown={(e)=>{if(e.key==="Enter") onSent()}}
              />
              <div>
                {/* <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" /> */}
                <img src={assets.send_icon} alt="" onClick={() =>onSent()} />
              </div>
            </div>
            <p className="bottom-info">
              This Intelligence is really intelligent... 
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;

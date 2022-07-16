import React from "react";
import "./Home.css";
import Background from "../../src/Assets/bghome.png";
function Home() {
  return (
    <div className="home">
      <img src={Background} alt="" className="mobile-bg" />
      <div className="fixed-bot">
        <div className="left-fixed">
          <div className="text-bot">
            <p>COMING SOON</p>
            <p>INK MEETS WEB3</p>
          </div>
        </div>
        <div className="right-fixed">
          <button>
            <a href="About">LEARN MORE <i className="fas fa-long-arrow-alt-right"></i></a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;

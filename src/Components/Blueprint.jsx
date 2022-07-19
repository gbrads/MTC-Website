import React from "react";
import "./Blueprint.css";
import img from "../../src/Assets/roadmap.svg";
import Matrix from "../Components/Matrix"

const Roadmap = () => (
  <section className="Blueprint" id="Blueprint">
    <div className="container">
      <div className="center">
        <h1 className="title">
          THE <span style={{ backgroundImage: "linear-gradient(to bottom right, #D4A137, #e4b652)"}}>DRAWING BOARD</span>
        </h1>
        <div className="fixed-bot-pages">
            <div className="right-fixed">
              <button>
              <a href="Artist">ARTIST <i className="fas fa-long-arrow-alt-right"></i></a>
              </button>
            </div>
          </div>
      </div>
      <img src={img} alt="" className="roadmap" />
    </div>
  </section>
);

export default Roadmap;

import React from "react";
import "./Artist.css";
import vid from "../../src/Assets/vid.mp4";

function Artist() {
  return (
    <section className="Artist" id="Artist">
      <div className="container">
        <div className="center">
          <h1>
            THE <span style={{ backgroundImage: "linear-gradient(to bottom right, #D4A137, #e4b652)"}}>MAN,</span>
          </h1>
          <h1>
            THE <span style={{ backgroundImage: "linear-gradient(to bottom right, #D4A137, #e4b652)"}}>MYTH,</span>
          </h1>
          <h1>
            THE <span style={{ backgroundImage: "linear-gradient(to bottom right, #D4A137, #e4b652)"}}>LEGEND.</span>
          </h1>
          <h3>Andreas Ishak</h3>
          <div className="row align-items-left">
            <div className="col-md-6 mt-5">
              <p style={{paddingBottom: 1 + 'em'}}>Meet our team member and world renown tattoo artist Andreas Ishak. With almost 2 decades of tattoo experience, Andreas is a master at his craft and is one of the best there is in the field. Andreas AKA Dre, is looking to take his knowledge and talent from the real world and apply this skill set in the metaverse so not only are people going to be pulling up looking correct IRL but in the virtual world as well.</p>
              <p style={{paddingBottom: 1 + 'em'}}>He is the owner of state of the art tattoo studio called Saints Touch in Gothenburg, Sweden and is known for his black, white and greyscale works. He has inked up A-List celebrities like <strong>Post Malone, Lewis Hamilton, Alesso, Tyga and Nyjah Huston,</strong> just to name a few and shares photos of his masterpieces to his over 50k followers.</p>
              <p>Not only does he have the most bumpin tattoo shop in Sweden but his tattoo shop is known all over the globe. On top of his raise to fame in the tattoo industry he also has his own apparel line as well under the name Saints Touch. Some lucky MTC minter may be able to get an even closer look at who Dre is, if ya know what we’re sayin'.</p>
              <div className="socials">
                <a href="https://www.instagram.com/ishakmeister/" target="_blank" className="nav-links social">
                  <p>INSTAGRAM</p>
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://twitter.com/ishakmeisterMTC" target="_blank" className="nav-links social">
                  <p>TWITTER</p>
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.youtube.com/channel/UCDy93G9G7tKOwzNXxRR0zPw" target="_blank" className="nav-links social">
                  <p>YOUTUBE</p>
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
            <div className="col-md-6 mt-5">
              <video loop autoPlay muted className="vid" src={vid}></video>
            </div>
          </div>
          <div className="fixed-bot-pages">
            <div className="right-fixed">
              <button>
              <a href="Giveaways">GIVEAWAYS <i className="fas fa-long-arrow-alt-right"></i></a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Artist;
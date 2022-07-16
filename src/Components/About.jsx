
import "./About.css";
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import team1 from "../../src/Assets/team5.png";
import team2 from "../../src/Assets/team4.png";
import team3 from "../../src/Assets/team1.png";


function About() {
  return (
    <section className="About" id="About">
      <div className="container">
        <div className="center">
          <h1>A LOOK <span style={{ backgroundImage: "linear-gradient(to bottom right, #D4A137, #e4b652)" }}>INSIDE</span></h1>
          <div className="row align-items-center">
            <div className="col-md-6 mt-5">
              <h3>The Logistics</h3>
              <p style={{marginBottom: 2 + 'em'}}>A collection of 10,000 steezy inked up gods making noise on the Solana blockchain. Some artists paint pictures, others create music, but we at MTC we like to use our bodies as the canvas for our art. This ones for the misfits, the rebels, the black sheep, the wild ones. There is always a place for you at Meta Tattoo Club.</p>
              <p style={{paddingBottom: 1 + 'em'}}>As Web3 & NFT's continues to evolve, so will our virtual avatars. With tattoos becoming a norm over the last decade, they are without a doubt going to come with us in to the virtual world of web3 and we want to be the ones that are in charge of this tattoo revolution that will happen in the metaverse.</p>
              <h3>Our Goal</h3>
              <p style={{paddingBottom: 1 + 'em'}}>Our goal is for everyone be able to express themselves through the art of tattooing. With our team of experts, we are certain that we will become THE Tattoo shop of Web3 and the IRL. Imagine a place where you could put on or take off your tattoo within seconds without going through the hassle of sitting in a chair for 8-10 hours, This is where we're headed.</p>
              <p style={{marginBottom: 2 + 'em'}}>Meta Tattoo Club is not just a PFP NFT project. Our intention is to change & better people’s lives by being the lottery/raffle of the real world all while contributing to the evolution and development of Web3 and the Solana Ecosystem as a whole. We seek to be much more than just another everyday NFT project, but rather a global lifestyle brand that will also test the technological limit of decentralized blockchain.</p>
              <h3>IRL & Web3 Development</h3>
              <p style={{marginBottom: 2 + 'em'}}>With already acquired land in The Sandbox, we will become the tattoo shop of Web3. In addition to the land in the metaverse, our team member and world renowned tattoo artist Andreas Ishak has his own tattoo shop in Sweden and we look to expand the chain and build high end tattoo shops all over the globe all under the name Meta Tattoo Club, with perks & benefits to all MTC NFT holders.</p>
              <h3>Utility Token</h3>
              <p style={{marginBottom: 2 + 'em'}}>With already acquired land in The Sandbox, we will become the tattoo shop of Web3. In addition to the land in the metaverse, our team member and world renowned tattoo artist Andreas Ishak has his own tattoo shop in Sweden and we look to expand the chain and build high end tattoo shops all over the globe all under the name Meta Tattoo Club, with perks & benefits to all MTC NFT holders.</p>
              <p style={{marginBottom: 2 + 'em'}}>With already acquired land in The Sandbox, we will become the tattoo shop of Web3. In addition to the land in the metaverse, our team member and world renowned tattoo artist Andreas Ishak has his own tattoo shop in Sweden and we look to expand the chain and build high end tattoo shops all over the globe all under the name Meta Tattoo Club, with perks & benefits to all MTC NFT holders.</p>
              <h3>Our Guiding Star</h3>
              <h6 style={{marginBottom: 2 + 'em'}}>Our guiding star is to have a community of like minded individuals, who can interact with one another in the real world and a virtual reality world, use our $STZ coin as a form of currency and get rewarded through our utilities.</h6>
            </div>
            <div className="col-md-6 mt-5">
              <div className="sticky">
                <Carousel>
                  <div>
                    <img src={team1} alt="" className="about-img" />
                  </div>
                  <div>
                    <img src={team2} alt="" className="about-img" />
                  </div>
                  <div>
                    <img src={team3} alt="" className="about-img" />
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
          <div className="fixed-bot-pages">
            <div className="right-fixed">
              <button>
                <a href="Blueprint">BLUEPRINT <i className="fas fa-long-arrow-alt-right"></i></a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
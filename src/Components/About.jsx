import React from "react";
import "./About.css";
import vid from "../../src/Assets/vid.mp4";

function About() {
  return (
    <section className="About" id="About">
      <div className="container">
        <div className="center">
          <h1>A LOOK <span style={{ backgroundImage: "linear-gradient(to bottom right, #D4A137, #e4b652)" }}>INSIDE</span></h1>
          <div className="row">
            <div className="col-md-6 mt-5">
              <h3>The Logistics</h3>
              <p style={{marginBottom: 2 + 'em'}}>A collection of 10,000 steezy inked up gods making noise on the Solana blockchain. Some artists paint pictures, others create music, but we at MTC we like to use our bodies as the canvas for our art. This ones for the misfits, the rebels, the black sheep, the wild ones. There is always a place for you at Meta Tattoo Club.</p>
              <p style={{paddingBottom: 1 + 'em'}}>As Web3 & NFT's continues to evolve, so will our virtual avatars. With tattoos becoming a norm over the last decade, they are without a doubt going to come with us in to the virtual world of web3 and we want to be the ones that are in charge of this tattoo revolution that will happen in the metaverse.</p>
              <h3>The Vision</h3>
              <p style={{paddingBottom: 1 + 'em'}}>We're here to make a fckn statement. Our vision with MTC is for everyone be able to express themselves through the art of tattoos. With our team of experts and professionals, we are certain that we will become <b>THE</b> Tattoo shop of Web3 and IRL. Imagine a world where you could put on or take off your tattoos within seconds; Without going through the hassle of sitting in a chair for 8-10 hours.</p>
              <p style={{marginBottom: 2 + 'em'}}>We're here to steeze our gang the fck up by being the lottery & raffle of the real world all while contributing to the evolution and development of Web3 and the Solana Ecosystem as a whole. We seek to be much more than just another everyday NFT project, but rather a global lifestyle brand that will also test the technological limit of decentralized blockchain.</p>
              <h3>Web3 Development</h3>
              <p style={{marginBottom: 2 + 'em'}}>With already acquired land in The Sandbox (Plot 27, -77), we will become the tattoo shop of Web3. We are currently in the process of building Meta Tattoo Club on this plot. It’ll be the hot spot for the freshest ink in The Sandbox Metaverse. In addition to the land in the metaverse, our team member and world renowned tattoo artist Andreas Ishak has his own tattoo shop in Sweden, Saints Touch. We look to expand and build our chain of high end tattoo shops all over the globe all under the name Meta Tattoo Club, with perks & benefits to all MTC NFT holders.</p>
              <h3>IRL Development</h3>
              <p style={{marginBottom: 2 + 'em'}}>Unlike most NFT projects with only minimal Web3 utility, we plan to bring some game changing IRL Utility as well. With an already established bumpin' Tattoo shop in Gothenburg Sweden with world renowned artist, Andreas Ishak, we will be building various new MTC studios around the globe in places like LA and Bali. Meta Tattoo Club NFT holders will be able to use their accumulated $STZ tokens in our IRL tattoo shops to get inked the fck up. Holders will also be able to purchase the steeziest merch & apparael in the NFT space, directly from our store available exclusively to MTC holders. As the MTC brand continues to grow so will the IRL utility for MTC NFT holders as we aim to be a revolution in the NFT space, merging Web3 and Tattoo culture for the first time ever.</p>
              <h3>Utility Token</h3>
              <p style={{marginBottom: 2 + 'em'}}>$STZ is the lifeblood of MTC. You either got it or you don’t. Within the first month after launch we will be introducing a staking protocol for our community members. You will be able to yield $STZ daily by simple staking your god. As you start to accumulate $STZ you start to accumulate in store dollars, that you can use to purchase Meta Tattoo Club merchandise. Our store will include all types of drip that’ll make the squad look on point.</p>
              <p style={{marginBottom: 2 + 'em'}}>Another key utility also includes monthly treasure chests that will hold all sorts of HIGH ticket grand prizes. These prizes will get the MTC gang fired up and help entice community members to hold their NFTs delisted. In order to open a treasure chest you must purchase a raffle ticket with $STZ and all participants will be entered into a draw to win the prizes. We will be holding monthly community votes, where our DAO will make the decision on whether they want several prizes that month to be distributed or simple one big bag of guap for one lucky winner, the choice will always be yours family.</p>
              <p style={{marginBottom: 2 + 'em'}}> Not only do we strive to have THE tattoo shop of web3 but we seek to become one of the most world renowned tattoo shops in the real world. A tattoo shop where our community members can come get inked up, using our $STZ token. With almost two decades of tattoo experience our team member Andreas Ishak is no stranger to building a high end tattoo studio.</p>
              <h3>Our Guiding Star</h3>
              <p style={{marginBottom: 2 + 'em'}}>Our guiding star is to have a community of like minded individuals, who can interact with one another in the real world and a virtual reality world, use our $STZ coin as a form of currency and get rewarded through our utilities.</p>
            </div>
            <div className="col-md-6 mt-5">
              <div className="sticky">
                <video loop autoPlay muted className="vid" src={vid}></video>
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
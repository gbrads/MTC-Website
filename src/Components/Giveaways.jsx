import React from "react";
import "./Giveaways.css";
import lambo from "../../src/Assets/lambo.png";
import rolex from "../../src/Assets/rolex.png";
import tattoo from "../../src/Assets/tattoo.png";

function Giveaway() {
  return (
    <section className="Giveaways" id="Giveaways">
      <div className="container">
        <div className="center">
          <h1 className="title">
            MINTING{" "} <span style={{backgroundImage: "linear-gradient(to bottom right, #D4A137, #e4b652)"}}>GIVEAWAYS</span>
          </h1>
          <div className="padding">
            <div class="standard-wrapper max-w-screen-xl  mt-24 md:mt-48 relative ">
              <div class="panel mx-auto mt-24 grid w-full grid-cols-1 gap-16 sm:gap-8 lg:mt-40 sm:grid-cols-2 lg:grid-cols-4 ">
                <div class="flex flex-col items-center">
                  <div class="text-center">
                    <h3 class="headline-4 text-center">5</h3>
                    <p className="body-copy-m mt-6">
                      <span style={{backgroundImage: "linear-gradient(to bottom right, #D4A137, #e4b652)"}}>Rolex Watches</span>
                    </p>
                  </div>
                  <ul class="grow body-copy-xs w-full text-center mt-4">
                    <li class="borders border-t-gray-dark py-2 px-5 md:px-2 min-h-[90px] flex items-center justify-center">
                      <div class="markdown line-break">
                        <p>5 / 10,000 Gods will be completely gold head to toe.</p>
                      </div>
                    </li>
                    <li class=" border-t-gray-dark py-2 px-5 md:px-2 min-h-[90px] flex items-center justify-center">
                      <div class="markdown line-break">
                        <p>
                          These 5 NFT minters will recieve a Rolex.
                        </p>
                      </div>
                    </li>
                  </ul>
                  <div>
                    <img src={rolex} alt="" className="prize" />
                  </div>
                </div>
                <div class="flex flex-col items-center">
                  <div class="text-center">
                    <h3 class="headline-4 text-center">5</h3>
                    <p class="body-copy-m mt-6">
                      <span style={{backgroundImage: "linear-gradient(to bottom right, #D4A137, #e4b652)"}}>Full Sleeve Tattoos</span>
                    </p>
                  </div>
                  <ul class="grow body-copy-xs w-full text-center mt-4">
                    <li class="borders border-t-gray-dark py-2 px-5 md:px-2 min-h-[90px] flex items-center justify-center">
                      <div class="markdown line-break">
                        <p>5 / 10,000 Gods will be Inked head to toe.</p>
                      </div>
                    </li>
                    <li class=" border-t-gray-dark py-2 px-5 md:px-2 min-h-[90px] flex items-center justify-center">
                      <div class="markdown line-break">
                        <p>
                          These 5 NFT minters will be flown out to Gothenburg Sweden to get a full sleeve done by our world renowned artist. Plus $2,000 spending cash.
                        </p>
                      </div>
                    </li>
                  </ul>
                  <div>
                    <img src={tattoo} alt="" className="prize" />
                  </div>
                </div>
                <div class="flex flex-col items-center">
                  <div class="text-center">
                    <h3 class="headline-4 ">1</h3>
                    <p class="body-copy-m mt-6">
                      <span style={{backgroundImage: "linear-gradient(to bottom right, #D4A137, #e4b652)"}}>Lamborghini Huracan</span>
                    </p>
                  </div>
                  <ul class="grow body-copy-xs w-full text-center mt-4">
                    <li class="borders border-t-gray-dark py-2 px-5 md:px-2 min-h-[90px] flex items-center justify-center">
                      <div class="markdown line-break">
                        <p>1 / 10,000 Gods will be randomly selected.</p>
                      </div>
                    </li>
                    <li class="border-t-gray-dark py-2 px-5 md:px-2 min-h-[90px] flex items-center justify-center">
                      <div class="markdown line-break">
                        <p>This NFT holder will recieve a Lamborghini Huracan delivered to you directly by the MTC crew.</p>
                      </div>
                    </li>
                  </ul>
                  <div>
                    <img src={lambo} alt="" className="prize" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed-bot-pages">
            <div className="right-fixed">
              <button>
                <a href="Team">TEAM <i className="fas fa-long-arrow-alt-right"></i></a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Giveaway;

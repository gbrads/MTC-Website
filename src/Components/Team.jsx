import React from "react";
import "./Team.css"
import team1 from "../../src/Assets/team1.png";
import team2 from "../../src/Assets/team2.png";
import team3 from "../../src/Assets/team3.png";
import team4 from "../../src/Assets/team4.png";
import team5 from "../../src/Assets/team5.png";
import team6 from "../../src/Assets/team6.png";

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => (entries[0].isIntersecting) && setVisible(true));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

function Team() {
  const [activeFaq, setActiveFaq] = React.useState();
  return (
    <section className="Team" id="Team">
      <div className="container">
        <div className="center">
        <FadeInSection>
            <h1 style={{marginBottom: 2 + 'em'}}>
            CORE <span style={{ backgroundImage: "linear-gradient(to bottom right, #D4A137, #e4b652)"}}>TEAM</span>
            </h1>
          </FadeInSection>
          <div className="row">
            <div className="col-md-2">
              <div className="cards">
                <FadeInSection>
                <img src={team4} className="img-fluid" />
                </FadeInSection>
                <FadeInSection>
                <h3>Tommy</h3>
                </FadeInSection>        
              </div>
              <FadeInSection>
              <p>Founder</p>
              </FadeInSection>
            </div>
            <div className="col-md-2">
              <div className="cards">
                <FadeInSection>
                <img src={team3} className="img-fluid" />
                </FadeInSection>
                <FadeInSection>
                <h3>Stefan</h3>
                </FadeInSection>        
              </div>
              <FadeInSection>
              <p>Co-Founder</p>
              </FadeInSection>
            </div>
            <div className="col-md-2">
              <div className="cards">
                <FadeInSection>
                <img src={team2} className="img-fluid" />
                </FadeInSection>
                <FadeInSection>
                <h3>Andreas</h3>
                </FadeInSection>        
              </div>
              <FadeInSection>
              <p>Tattoo Artist</p>
              </FadeInSection>
            </div>
            <div className="col-md-2">
              <div className="cards">
                <FadeInSection>
                <img src={team5} className="img-fluid" />
                </FadeInSection>
                <FadeInSection>
                <h3>Garret</h3>
                </FadeInSection>        
              </div>
              <FadeInSection>
              <p>Development Lead</p>
              </FadeInSection>
            </div>
            <div className="col-md-2">
              <div className="cards">
                <FadeInSection>
                <img src={team6} className="img-fluid" />
                </FadeInSection>
                <FadeInSection>
                <h3>Danyar</h3>
                </FadeInSection>        
              </div>
              <FadeInSection>
              <p>IRL Connection Lead</p>
              </FadeInSection>
            </div>
            <div className="col-md-2">
              <div className="cards">
                <FadeInSection>
                <img src={team1} className="img-fluid" />
                </FadeInSection>
                <FadeInSection>
                <h3>Trevor</h3>
                </FadeInSection>        
              </div>
              <FadeInSection>
              <p>Community Lead</p>
              </FadeInSection>
            </div>
            <div className="col-md-2">
              <div className="cards">
                <FadeInSection>
                <img src={team5} className="img-fluid" />
                </FadeInSection>
                <FadeInSection>
                <h3>MetaKnows</h3>
                </FadeInSection>        
              </div>
              <FadeInSection>
              <p>Marketing Lead</p>
              </FadeInSection>
            </div>
            <div className="col-md-2">
              <div className="cards">
                <FadeInSection>
                <img src={team4} className="img-fluid" />
                </FadeInSection>
                <FadeInSection>
                <h3>Michael</h3>
                </FadeInSection>        
              </div>
              <FadeInSection>
              <p>Social Media Lead</p>
              </FadeInSection>
            </div>
            <div className="col-md-2">
              <div className="cards">
                <FadeInSection>
                <img src={team3} className="img-fluid" />
                </FadeInSection>
                <FadeInSection>
                <h3>Scrumps</h3>
                </FadeInSection>        
              </div>
              <FadeInSection>
              <p>Operations Lead</p>
              </FadeInSection>
            </div>
            <div className="col-md-2">
              <div className="cards">
                <FadeInSection>
                <img src={team2} className="img-fluid" />
                </FadeInSection>
                <FadeInSection>
                <h3>Distu Choi</h3>
                </FadeInSection>        
              </div>
              <FadeInSection>
              <p>Collab Manager</p>
              </FadeInSection>
            </div>
            <div className="col-md-2">
              <div className="cards">
                <FadeInSection>
                <img src={team1} className="img-fluid" />
                </FadeInSection>
                <FadeInSection>
                <h3>Krishit</h3>
                </FadeInSection>        
              </div>
              <FadeInSection>
              <p>FrontEnd Dev Hand</p>
              </FadeInSection>
            </div>
            <div className="col-md-2">
              <div className="cards">
                <FadeInSection>
                <img src={team6} className="img-fluid" />
                </FadeInSection>
                <FadeInSection>
                <h3>Law</h3>
                </FadeInSection>        
              </div>
              <FadeInSection>
              <p>Tokenomics Expert</p>
              </FadeInSection>
            </div>
          </div>
          <div className="fixed-bot-pages">
            <div className="right-fixed">
              <button>
                <a href="FAQ">FAQ's <i className="fas fa-long-arrow-alt-right"></i></a>
              </button>
            </div>
          </div>
        </div>
        </div>
      </section>
  );
}

export default Team;

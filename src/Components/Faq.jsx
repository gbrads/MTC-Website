import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./Faq.css";


function Faq() {
    const [activeFaq, setActiveFaq] = React.useState();
    return (
        <section className="Faqs">
            <div className="container">
            <div className="center">
              <h1>
                THE <span style={{ backgroundImage: "linear-gradient(to bottom right, #D4A137, #e4b652)"}}>FAQ's</span>
              </h1>
                </div>
                    <div className="Freq">
                        <div className="col-md-8 mx-auto">
                            <Accordion>
                                <Accordion.Item
                                    eventKey="0"
                                    style={{ border: activeFaq === 0 ? "2px solid #d4af37" : "" }}
                                    onClick={() => setActiveFaq(0)}
                                >
                                    <Accordion.Header>What is MTC?</Accordion.Header>
                                    <Accordion.Body>
                                        Meta Tattoo Club is bringing tattoos to Web3.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item
                                    eventKey="1"
                                    style={{ border: activeFaq === 1 ? "2px solid #d4af37" : "" }}
                                    onClick={() => setActiveFaq(1)}
                                >
                                    <Accordion.Header>How do I Get Invovled?</Accordion.Header>
                                        <Accordion.Body>
                                            Yes. But not through discord grinding and generic WL spots..
                                        </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item
                        eventKey="2"
                        style={{ border: activeFaq === 2 ? "2px solid #d4af37" : "" }}
                        onClick={() => setActiveFaq(2)}
                        >
                        <Accordion.Header>What is the Mint Price?</Accordion.Header>
                        <Accordion.Body>
                            The official mint price is still TBD. This will be announced exclusively inside our Discord.
                        </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item
                        eventKey="3"
                        style={{ border: activeFaq === 3 ? "2px solid #d4af37" : "" }}
                        onClick={() => setActiveFaq(3)}
                        >
                        <Accordion.Header>When is the Official Launch Date?</Accordion.Header>
                        <Accordion.Body>
                            The launch date will be released upon firther notice inside our Discord.
                        </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item
                        eventKey="4"
                        style={{ border: activeFaq === 4 ? "2px solid #d4af37" : "" }}
                        onClick={() => setActiveFaq(4)}
                        >
                        <Accordion.Header>Will There Be a Whitelist?</Accordion.Header>
                        <Accordion.Body>
                            Yes. But not through discord grinding and generic WL spots..
                        </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    </div>
                    <div className="fixed-bot-pages">
            <div className="right-fixed">
              <button>
                <a href="https://meta-tattoo-club.gitbook.io/" target="_blank">
                    DOCS
                    <i className="fas fa-long-arrow-alt-right"></i>
                </a>
              </button>
            </div>
            </div>
            </div>
            </div>
        </section>
    )
}

export default Faq;
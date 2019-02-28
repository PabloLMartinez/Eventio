import React, { Component } from "react";

import Header from "../../main/containers/header.container";
import Nav from "../../main/components/nav.component";
import Footer from "../../main/components/footer.component";

import "../styles/dashboard.scss";

class DashboardComponent extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="dashboard-wrapper">
                <Header />
                <Nav />
                <section className="events-container">
                    <article className="event-box">
                        <span className="event-date">April 4, 2017 - 2:17 PM</span>
                        <h3>How to get angry</h3>
                        <span className="event-owner">Tom Watts</span>
                        <p className="event-description">I will show you how to get angry in a second</p>
                        <div className="event-footer">
                            <div className="counter"><i className="fas fa-user-alt"/> 9 of 31</div>
                            <button>Edit</button>
                        </div>
                    </article>
                    <article className="event-box">
                        <span className="event-date">April 4, 2017 - 2:17 PM</span>
                        <h3>How to get angry</h3>
                        <span className="event-owner">Tom Watts</span>
                        <p className="event-description">I will show you how to get angry in a second</p>
                        <div className="event-footer">
                            <div className="counter"><i className="fas fa-user-alt"/> 9 of 31</div>
                            <button>Edit</button>
                        </div>
                    </article>
                    <article className="event-box">
                        <span className="event-date">April 4, 2017 - 2:17 PM</span>
                        <h3>How to get angry</h3>
                        <span className="event-owner">Tom Watts</span>
                        <p className="event-description">I will show you how to get angry in a second</p>
                        <div className="event-footer">
                            <div className="counter"><i className="fas fa-user-alt"/> 9 of 31</div>
                            <button>Edit</button>
                        </div>
                    </article>
                    <article className="event-box">
                        <span className="event-date">April 4, 2017 - 2:17 PM</span>
                        <h3>How to get angry</h3>
                        <span className="event-owner">Tom Watts</span>
                        <p className="event-description">I will show you how to get angry in a second</p>
                        <div className="event-footer">
                            <div className="counter"><i className="fas fa-user-alt"/> 9 of 31</div>
                            <button>Edit</button>
                        </div>
                    </article>
                    <article className="event-box">
                        <span className="event-date">April 4, 2017 - 2:17 PM</span>
                        <h3>How to get angry</h3>
                        <span className="event-owner">Tom Watts</span>
                        <p className="event-description">I will show you how to get angry in a second</p>
                        <div className="event-footer">
                            <div className="counter"><i className="fas fa-user-alt"/> 9 of 31</div>
                            <button>Edit</button>
                        </div>
                    </article>
                    <article className="event-box">
                        <span className="event-date">April 4, 2017 - 2:17 PM</span>
                        <h3>How to get angry</h3>
                        <span className="event-owner">Tom Watts</span>
                        <p className="event-description">I will show you how to get angry in a second</p>
                        <div className="event-footer">
                            <div className="counter"><i className="fas fa-user-alt"/> 9 of 31</div>
                            <button>Edit</button>
                        </div>
                    </article>
                </section>
                <Footer />
            </div>
        );
    }
}

export default DashboardComponent;

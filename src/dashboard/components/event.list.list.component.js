import React, { Component } from "react";

import "../styles/event.list.list.scss";

class EventListListComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth
        };
    }

    render() {
        const { width } = this.state;
        const isMobile = width <= 500;

        if (isMobile) {
            return (
                <section className="events-container-list-mobile">
                    <article className="event-box">
                        <h3>How to get angry</h3>
                        <p className="event-description">I will show you how to get angr...</p>
                        <div>
                            <span className="event-date">April 4, 2017 - 2:17 PM</span>
                            <br />
                            <span className="counter">9 of 31</span>
                            <button>Edit</button>
                        </div>
                    </article>
                    <article className="event-box">
                        <h3>How to get angry</h3>
                        <p className="event-description">I will show you how to get angr...</p>
                        <div>
                            <span className="event-date">April 4, 2017 - 2:17 PM</span>
                            <br />
                            <span className="counter">9 of 31</span>
                            <button>Edit</button>
                        </div>
                    </article>
                    <article className="event-box">
                        <h3>How to get angry</h3>
                        <p className="event-description">I will show you how to get angr...</p>
                        <div>
                            <span className="event-date">April 4, 2017 - 2:17 PM</span>
                            <br />
                            <span className="counter">9 of 31</span>
                            <button>Edit</button>
                        </div>
                    </article>
                    <article className="event-box">
                        <h3>How to get angry</h3>
                        <p className="event-description">I will show you how to get angr...</p>
                        <div>
                            <span className="event-date">April 4, 2017 - 2:17 PM</span>
                            <br />
                            <span className="counter">9 of 31</span>
                            <button>Edit</button>
                        </div>
                    </article>
                    <article className="event-box">
                        <h3>How to get angry</h3>
                        <p className="event-description">I will show you how to get angr...</p>
                        <div>
                            <span className="event-date">April 4, 2017 - 2:17 PM</span>
                            <br />
                            <span className="counter">9 of 31</span>
                            <button>Edit</button>
                        </div>
                    </article>
                    <article className="event-box">
                        <h3>How to get angry</h3>
                        <p className="event-description">I will show you how to get angr...</p>
                        <div>
                            <span className="event-date">April 4, 2017 - 2:17 PM</span>
                            <br />
                            <span className="counter">9 of 31</span>
                            <button>Edit</button>
                        </div>
                    </article>
                </section>
            );
        } else {
            return (
                <section className="events-container-list-desktop">
                    <article className="event-box">
                        <h3>How to get angry</h3>
                        <p className="event-description">I will show you how to get angry in a second</p>
                        <span className="event-owner">Tom Watts</span>
                        <span className="event-date">April 4, 2017 - 2:17 PM</span>
                        <div className="counter">9 of 31</div>
                        <button>Edit</button>
                    </article>
                    <article className="event-box">
                        <h3>How to get angry</h3>
                        <p className="event-description">I will show you how to get angry in a second</p>
                        <span className="event-owner">Tom Watts</span>
                        <span className="event-date">April 4, 2017 - 2:17 PM</span>
                        <div className="counter">9 of 31</div>
                        <button>Edit</button>
                    </article>
                    <article className="event-box">
                        <h3>How to get angry</h3>
                        <p className="event-description">I will show you how to get angry in a second</p>
                        <span className="event-owner">Tom Watts</span>
                        <span className="event-date">April 4, 2017 - 2:17 PM</span>
                        <div className="counter">9 of 31</div>
                        <button>Edit</button>
                    </article>
                    <article className="event-box">
                        <h3>How to get angry</h3>
                        <p className="event-description">I will show you how to get angry in a second</p>
                        <span className="event-owner">Tom Watts</span>
                        <span className="event-date">April 4, 2017 - 2:17 PM</span>
                        <div className="counter">9 of 31</div>
                        <button>Edit</button>
                    </article>
                    <article className="event-box">
                        <h3>How to get angry</h3>
                        <p className="event-description">I will show you how to get angry in a second</p>
                        <span className="event-owner">Tom Watts</span>
                        <span className="event-date">April 4, 2017 - 2:17 PM</span>
                        <div className="counter">9 of 31</div>
                        <button>Edit</button>
                    </article>
                    <article className="event-box">
                        <h3>How to get angry</h3>
                        <p className="event-description">I will show you how to get angry in a second</p>
                        <span className="event-owner">Tom Watts</span>
                        <span className="event-date">April 4, 2017 - 2:17 PM</span>
                        <div className="counter">9 of 31</div>
                        <button>Edit</button>
                    </article>
                </section>
            );
        }
    }
}

export default EventListListComponent;

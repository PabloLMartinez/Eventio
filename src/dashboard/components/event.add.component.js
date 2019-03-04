import React, { Component } from "react";

import "../styles/event.add.scss";

class EventListListComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCloseButton = this.handleCloseButton.bind(this);
    }

    handleSubmit(e) {
        let startsAt = new Date(this.date.value + ' ' + this.time.value);
        let data = {
            title: this.title.value,
            description: this.description.value,
            startsAt: startsAt.toISOString(),
            capacity: this.capacity.value
        };
        this.props.saveEvent(data);
        e.preventDefault();
    }

    handleCloseButton(event) {
        this.props.goBack();
        event.preventDefault();
    }

    render() {
        const { width } = this.state;
        const isMobile = width <= 500;

        if (isMobile) {
            return (
                <div className="event-add-container-mobile">
                    <header className="header-mobile">
                        <div className="logo" />
                        <div className="close-button" onClick={this.handleCloseButton}/>
                    </header>

                    <div className="event-add-form">
                        <div className="form-header">
                            <h2>Create new event</h2>
                            <span>Enter details below.</span>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <div className="wrap-input">
                                <input type="text" required placeholder="Title" ref={(title) => this.title = title}/>
                            </div>
                            <div className="wrap-input">
                                <input type="text" required placeholder="Description" ref={(description) => this.description = description}/>
                            </div>
                            <div className="wrap-input">
                                <input type="date" required placeholder="Date" ref={(date) => this.date = date}/>
                            </div>
                            <div className="wrap-input">
                                <input type="time" placeholder="Time" ref={(time) => this.time = time}/>
                            </div>
                            <div className="wrap-input">
                                <input type="text" required placeholder="Capacity" ref={(capacity) => this.capacity = capacity}/>
                            </div>
                            <button className="create-event-button">CREATE NEW EVENT</button>
                        </form>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="event-add-container-desktop">
                    <header className="header-desktop">
                        <div className="logo" />
                        <div className="close-button" onClick={this.handleCloseButton}/>
                    </header>

                    <div className="event-add-form">
                        <div className="form-header">
                            <h2>Create new event</h2>
                            <span>Enter details below.</span>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <div className="wrap-input">
                                <input type="text" required placeholder="Title" ref={(title) => this.title = title}/>
                            </div>
                            <div className="wrap-input">
                                <input type="text" required placeholder="Description" ref={(description) => this.description = description}/>
                            </div>
                            <div className="wrap-input">
                                <input type="date" required placeholder="Date" ref={(date) => this.date = date}/>
                            </div>
                            <div className="wrap-input">
                                <input type="time" placeholder="Time" ref={(time) => this.time = time}/>
                            </div>
                            <div className="wrap-input">
                                <input type="text" required placeholder="Capacity" ref={(capacity) => this.capacity = capacity}/>
                            </div>
                            <button className="create-event-button">CREATE NEW EVENT</button>
                        </form>
                    </div>
                </div>
            );
        }
    }
}

export default EventListListComponent;

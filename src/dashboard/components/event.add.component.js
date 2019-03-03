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
        console.log(this.title.value);
        console.log(this.description.value);
        console.log(this.date.value);
        console.log(this.time.value);
        console.log(this.capacity.value);
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
                <div>
                    <header className="header-desktop">
                        <div className="logo" />
                    </header>
                </div>
            );
        } else {
            return (
                <div>
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
                                <input type="text" placeholder="Title" ref={(title) => this.title = title}/>
                            </div>
                            <div className="wrap-input">
                                <input type="text" placeholder="Description" ref={(description) => this.description = description}/>
                            </div>
                            <div className="wrap-input">
                                <input type="text" placeholder="Date" ref={(date) => this.date = date}/>
                            </div>
                            <div className="wrap-input">
                                <input type="text" placeholder="Time" ref={(time) => this.time = time}/>
                            </div>
                            <div className="wrap-input">
                                <input type="text" placeholder="Capacity" ref={(capacity) => this.capacity = capacity}/>
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

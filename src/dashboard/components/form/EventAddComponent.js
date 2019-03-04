import React, { Component } from "react";

import "../../styles/event.add.scss";

class EventListListComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
            fields: {},
            errors: {}
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCloseButton = this.handleCloseButton.bind(this);
    }

    // Validate all fields
    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        // Validate title empty
        if(!fields["title"]){
            formIsValid = false;
            errors["title"] = "Title has to be filled up";
        }

        // Validate description empty
        if(!fields["description"]){
            formIsValid = false;
            errors["description"] = "Description has to be filled up";
        }

        // Validate date empty
        if(!fields["date"]){
            formIsValid = false;
            errors["date"] = "Date has to be filled up";
        }

        // Validate title empty
        if(!fields["time"]){
            formIsValid = false;
            errors["time"] = "Time has to be filled up";
        }

        // Validate title empty
        if(!fields["capacity"]){
            formIsValid = false;
            errors["capacity"] = "Capacity has to be filled up";
        }

        this.setState({errors: errors});
        return formIsValid;
    }

    handleSubmit(e) {
        e.preventDefault();
        let fields = this.state.fields;
        if(this.handleValidation()){
            let startsAt = new Date(fields["date"] + ' ' + fields["time"]);
            let data = {
                title: fields["title"],
                description: fields["description"],
                startsAt: startsAt.toISOString(),
                capacity: fields["capacity"]
            };
            this.props.saveEvent(data);
        }
    }

    handleCloseButton(e) {
        this.props.goBack();
        e.preventDefault();
    }

    handleChange(field, e){
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({fields});
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
                                <input ref="title" type="text" placeholder="Title"
                                       onChange={this.handleChange.bind(this, "title")}
                                       value={this.state.fields["title"]}/>
                                <span className="error">{this.state.errors["title"]}</span>
                            </div>
                            <div className="wrap-input">
                                <input ref="description" type="text" placeholder="Description"
                                       onChange={this.handleChange.bind(this, "description")}
                                       value={this.state.fields["description"]}/>
                                <span className="error">{this.state.errors["description"]}</span>
                            </div>
                            <div className="wrap-input">
                                <input ref="date" type="date" placeholder="Date"
                                       onChange={this.handleChange.bind(this, "date")}
                                       value={this.state.fields["date"]}/>
                                <span className="error">{this.state.errors["date"]}</span>
                            </div>
                            <div className="wrap-input">
                                <input ref="time" type="time" placeholder="Time"
                                       onChange={this.handleChange.bind(this, "time")}
                                       value={this.state.fields["time"]}/>
                                <span className="error">{this.state.errors["time"]}</span>
                            </div>
                            <div className="wrap-input">
                                <input ref="capacity" type="capacity" placeholder="Capacity"
                                       onChange={this.handleChange.bind(this, "capacity")}
                                       value={this.state.fields["capacity"]}/>
                                <span className="error">{this.state.errors["capacity"]}</span>
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
                                <input ref="title" type="text" placeholder="Title"
                                       onChange={this.handleChange.bind(this, "title")}
                                       value={this.state.fields["title"]}/>
                                <span className="error">{this.state.errors["title"]}</span>
                            </div>
                            <div className="wrap-input">
                                <input ref="description" type="text" placeholder="Description"
                                       onChange={this.handleChange.bind(this, "description")}
                                       value={this.state.fields["description"]}/>
                                <span className="error">{this.state.errors["description"]}</span>
                            </div>
                            <div className="wrap-input">
                                <input ref="date" type="date" placeholder="Date"
                                       onChange={this.handleChange.bind(this, "date")}
                                       value={this.state.fields["date"]}/>
                                <span className="error">{this.state.errors["date"]}</span>
                            </div>
                            <div className="wrap-input">
                                <input ref="time" type="time" placeholder="Time"
                                       onChange={this.handleChange.bind(this, "time")}
                                       value={this.state.fields["time"]}/>
                                <span className="error">{this.state.errors["time"]}</span>
                            </div>
                            <div className="wrap-input">
                                <input ref="capacity" type="capacity" placeholder="Capacity"
                                       onChange={this.handleChange.bind(this, "capacity")}
                                       value={this.state.fields["capacity"]}/>
                                <span className="error">{this.state.errors["capacity"]}</span>
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

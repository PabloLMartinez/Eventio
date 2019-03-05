import React, { Component } from "react";

import "../../styles/event.list.panel.scss";

class EventListPanelComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
            activeFilter: 0,
            eventList: []
        };
        this.handleLeave = this.handleLeave.bind(this);
        this.handleJoin = this.handleJoin.bind(this);
    }

    componentDidMount() {
        this.setState({
            activeFilter: this.props.dashboardReducer.activeFilter.activeFilter,
            eventList: this.props.dashboardReducer.events.list.data
        });
    }
    // Check any updates from props (Filter)
    componentDidUpdate(prevProps) {
        if (this.props.dashboardReducer.activeFilter.activeFilter !== prevProps.dashboardReducer.activeFilter.activeFilter) {
            this.setState({ activeFilter: this.props.dashboardReducer.activeFilter.activeFilter });
        }

        if (this.props.dashboardReducer.events.list.data !== prevProps.dashboardReducer.events.list.data) {
            this.setState({ eventList: this.props.dashboardReducer.events.list.data });
        }
    }

    handleLeave(index, e) {
        e.preventDefault();
        let eventList = this.state.eventList;

        for (let i = 0; i < eventList.length; i++) {
            if (eventList[i]._id === index) {
                let attendees = eventList[i].attendees;

                for (let j = 0; j < attendees.length; j++) {
                    if (attendees[j]._id === this.props.profile._id) {
                        attendees.splice(j, 1);
                    }
                }
            }
        }

        this.setState({ eventList: eventList });
    }

    handleJoin(index, e) {
        e.preventDefault();
        let eventList = this.state.eventList;

        for (let i = 0; i < eventList.length; i++) {
            if (eventList[i]._id === index) {
                let attendees = eventList[i].attendees;

                attendees.push(this.props.profile);
            }
        }

        this.setState({ eventList: eventList });
    }

    render() {
        const { width, eventList } = this.state;
        const isMobile = width <= 500;

        let data = eventList || [];
        let today = new Date();

        if(this.state.activeFilter === 1) {
            // Return only future events
            data = data.filter((event) => {
                return new Date(event.startsAt) >= today;
            });
        } else if (this.state.activeFilter === 2) {
            // Return only past events
            data = data.filter((event) => {
                return new Date(event.startsAt) <= today;
            });
        }

        const monthNames = [
            "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
        ];

        const article = data.map( (event, key) => {
            let eventDate = new Date(event.startsAt);

            let buttonAction = "";

            let dateFull =
                monthNames[(eventDate.getMonth())] + ' ' +
                eventDate.getDate() + ', ' +
                eventDate.getFullYear() + ' - ' +
                eventDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

            // Check if logged user is an attendee
            let attendee = event.attendees.filter( (attendee) => {
                return this.props.profile._id === attendee._id;
            });

            if(this.props.profile._id === event.owner._id) {
                buttonAction = <button className="edit-button">EDIT</button>;
            } else if(attendee.length >= 1) {
                buttonAction = <button onClick={this.handleLeave.bind(this, event._id)} className="leave-button">LEAVE</button>;
            } else if(attendee.length <= 0) {
                buttonAction = <button onClick={this.handleJoin.bind(this, event._id)} className="join-button">JOIN</button>;
            }

            return <article className="event-box" key={key}>
                    <span className="event-date">{dateFull}</span>
                    <h3>{event.title}</h3>
                    <span className="event-owner">{event.owner.firstName + " " + event.owner.lastName}</span>
                    <p className="event-description">{event.description.substring(0,56)+"..."}</p>
                    <div className="event-footer">
                        <div className="counter"><i className="fas fa-user-alt"/>
                            {event.attendees.length + ' of ' + event.capacity}
                        </div>
                        {buttonAction}
                    </div>
                </article>;
        });

        if (isMobile) {
            return (
                <section className="events-container-panel-mobile">
                    {article}
                </section>
            );
        } else {
            return (
                <section className="events-container-panel-desktop">
                    {article}
                </section>
            );
        }

    }
}

export default EventListPanelComponent;

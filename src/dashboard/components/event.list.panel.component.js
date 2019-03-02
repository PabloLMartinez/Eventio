import React, { Component } from "react";

import "../styles/event.list.panel.scss";

class EventListPanelComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
            activeFilter: 0
        };
    }

    // Check any updates from props (Filter)
    componentDidUpdate(prevProps) {
        if (this.props.activeFilter.activeFilter !== prevProps.activeFilter.activeFilter) {
            this.setState({ activeFilter: this.props.activeFilter.activeFilter });
        }
    }

    render() {
        const { width } = this.state;
        const isMobile = width <= 500;

        let data = this.props.events.list.data || [];
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

            let dateFull =
                monthNames[(eventDate.getMonth())] + ' ' +
                eventDate.getDate() + ', ' +
                eventDate.getFullYear() + ' - ' +
                eventDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

            return <article className="event-box" key={key}>
                    <span className="event-date">{dateFull}</span>
                    <h3>{event.title}</h3>
                    <span className="event-owner">{event.owner.firstName + ' ' + event.owner.lastName}</span>
                    <p className="event-description">{event.description.substring(0,56)+"..."}</p>
                    <div className="event-footer">
                        <div className="counter"><i className="fas fa-user-alt"/>
                            {event.attendees.length + ' of ' + event.capacity}
                        </div>
                        <button>EDIT</button>
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

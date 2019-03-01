import React, { Component } from "react";

import "../styles/event.list.panel.scss";

class EventListPanelComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth
        };
    }

    render() {
        const { width } = this.state;
        const isMobile = width <= 500;

        const data = this.props.events.list.data || [];
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

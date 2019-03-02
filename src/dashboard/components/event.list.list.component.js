import React, { Component } from "react";

import "../styles/event.list.list.scss";

class EventListListComponent extends Component{
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

        const articleDesktop = data.map( (event, key) => {
            let eventDate = new Date(event.startsAt);

            let dateFull =
                monthNames[(eventDate.getMonth())] + ' ' +
                eventDate.getDate() + ', ' +
                eventDate.getFullYear() + ' - ' +
                eventDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

            return <article className="event-box" key={key}>
                <h3>{event.title}</h3>
                <p className="event-description">{event.description.substring(0,31)+"..."}</p>
                <span className="event-owner">{event.owner.firstName + ' ' + event.owner.lastName}</span>
                <span className="event-date">{dateFull}</span>
                <div className="counter">{event.attendees.length + ' of ' + event.capacity}</div>
                <button>EDIT</button>
            </article>;
        });

        const articleMobile = data.map( (event, key) => {
            let eventDate = new Date(event.startsAt);

            let dateFull =
                monthNames[(eventDate.getMonth())] + ' ' +
                eventDate.getDate() + ', ' +
                eventDate.getFullYear() + ' - ' +
                eventDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

            return <article className="event-box" key={key}>
                <h3>{event.title}</h3>
                <p className="event-description">{event.description.substring(0,31)+"..."}</p>
                <div>
                    <span className="event-date">{dateFull}</span>
                    <br />
                    <span className="counter">{event.attendees.length + ' of ' + event.capacity}</span>
                    <button>EDIT</button>
                </div>
            </article>;
        });

        if (isMobile) {
            return (
                <section className="events-container-list-mobile">
                    {articleMobile}
                </section>
            );
        } else {
            return (
                <section className="events-container-list-desktop">
                    {articleDesktop}
                </section>
            );
        }
    }
}

export default EventListListComponent;

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
                    <div className="event-box"/>
                    <div className="event-box"/>
                    <div className="event-box"/>
                    <div className="event-box"/>
                    <div className="event-box"/>
                    <div className="event-box"/>
                </section>
                <Footer />
            </div>
        );
    }
}

export default DashboardComponent;

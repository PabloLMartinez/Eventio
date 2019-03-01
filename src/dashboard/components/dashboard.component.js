import React, { Component } from "react";

import Header from "../../main/containers/header.container";
import Nav from "../../main/containers/nav.container";
import Footer from "../../main/components/footer.component";
import EventListPanel from "../containers/event.list.panel.container";
import EventListList from "../containers/event.list.list.container";

import "../styles/dashboard.scss";

class DashboardComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            viewListMode: "panel"
        };
    }

    componentDidMount() {
        this.props.requestAllEvents();
    }

    componentDidUpdate(prevProps) {
        if (this.props.listView.view !== prevProps.listView.view) {
            this.setState({ viewListMode: this.props.listView.view });
        }
    }

    render() {
        const { viewListMode } = this.state;

        console.log("all events:::   ", this.props.events);

        const viewListEvents = viewListMode === "panel" ? (
            <EventListPanel />
        ) : (
            <EventListList />
        );
        return (
            <div className="dashboard-wrapper">
                <Header />
                <Nav />
                {viewListEvents}
                <Footer />
            </div>
        );
    }
}

export default DashboardComponent;

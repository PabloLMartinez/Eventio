import React, { Component } from "react";

import Header from "../../main/containers/HeaderContainer";
import Nav from "../../main/containers/NavContainer";
import Footer from "../../main/containers/FooterContainer";
import EventListPanel from "../containers/list/EventListPanelContainer";
import EventListList from "../containers/list/EventListListContainer";

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

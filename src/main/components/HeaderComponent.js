import React, { Component } from "react";

import "../styles/header.scss";

class HeaderComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth
        };
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(event) {
        this.props.logout();
        event.preventDefault();
    }

    render() {
        const { width } = this.state;
        const isMobile = width <= 500;

        if (isMobile) {
            return (
                <header className="header-mobile">
                    <div className="logo" />
                    <div className="profile-settings">
                        <div className="avatar">
                            <span>TM</span>
                        </div>
                        <div className="username">
                            <span className="logout" onClick={this.handleLogout}>Logout</span>
                        </div>
                    </div>
                </header>
            );
        } else {
            return (
                <header className="header-desktop">
                    <div className="logo" />
                    <div className="profile-settings">
                        <div className="avatar">
                            <span>TM</span>
                        </div>
                        <div className="username">
                            <span className="user">Tom Watts</span>
                            <span className="logout" onClick={this.handleLogout}>Logout</span>
                        </div>
                    </div>
                </header>
            );
        }
    }
}

export default HeaderComponent;

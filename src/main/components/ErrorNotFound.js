import React, { Component } from "react";
import Slide from "./SlideComponent";

import "../styles/error.scss";

class ErrorNotFoundComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth
        };
        this.handleRefreshButton = this.handleRefreshButton.bind(this);
    }

    handleRefreshButton(e) {
        this.props.goBack();
        e.preventDefault();
    }

    render() {
        const { width } = this.state;
        const isMobile = width <= 500;

        if (isMobile) {
            return (
                <div className="error-page-wrapper-mobile">
                    <div className="error-message">
                        <div className="error-box">
                            <h2>404 Error - page not found</h2>
                            <p className="not-found-desc">
                                Seems like Darth Vader just hits our website and drops it down.
                                Please press the refresh button and everything should be fine again.
                            </p>
                            <button className="refresh-button" onClick={this.handleRefreshButton}>REFRESH</button>
                        </div>
                    </div>
                    <div className="sign-up">
                        <span>Don't have account?</span><a href="#">SIGN UP</a>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="error-page-wrapper-desktop">
                    <div className="slide">
                        <Slide/>
                    </div>
                    <div className="error-message">
                        <div className="trooper-helm" />
                        <div className="error-box">
                            <h2>404 Error - page not found</h2>
                            <p className="not-found-desc">
                                Seems like Darth Vader just hits our website and drops it down.
                                Please press the refresh button and everything should be fine again.
                            </p>
                            <button className="refresh-button" onClick={this.handleRefreshButton}>REFRESH</button>
                        </div>
                    </div>
                    <div className="sign-up">
                        <span>Don't have account?</span><a href="#">SIGN UP</a>
                    </div>
                </div>
            );
        }
    }
}

export default ErrorNotFoundComponent;

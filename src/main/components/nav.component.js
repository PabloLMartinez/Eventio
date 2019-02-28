import React, { Component } from "react";

import "../styles/nav.scss";

class NavComponent extends Component{
    constructor(props) {
        super(props);
        this.handleModeView = this.handleModeView.bind(this);
    }

    handleModeView(e) {
        e.stopPropagation();
        let className = e.target.className;
        let view = className.substr(0, className.indexOf('-'));
        this.props.changeView(view);
    }

    render() {
        return (
            <nav>
                <div className="navigator">
                    <ul>
                        <li className="active">ALL EVENTS</li>
                        <li>FUTURE EVENTS</li>
                        <li>PAST EVENTS</li>
                    </ul>
                </div>
                <div className="view-mode">
                    <span className="panel-icon" onClick={this.handleModeView}/>
                    <span className="list-icon" onClick={this.handleModeView}/>
                </div>
            </nav>
        );
    }
}

export default NavComponent;

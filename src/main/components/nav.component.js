import React, { Component } from "react";

import "../styles/nav.scss";

class NavComponent extends Component{
    constructor(props) {
        super(props);
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
                    <span className="panel-icon" />
                    <span className="list-icon" />
                </div>
            </nav>
        );
    }
}

export default NavComponent;

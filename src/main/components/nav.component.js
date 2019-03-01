import React, { Component } from "react";

import "../styles/nav.scss";

class NavComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            viewListMode: "panel"
        };
        this.handleModeView = this.handleModeView.bind(this);
    }

    handleModeView(e) {
        e.stopPropagation();
        let className = e.target.className;
        let view = className.substr(0, className.indexOf('-'));
        this.setState({ viewListMode: view });
        this.props.changeView(view);
    }

    render() {
        console.log("nav component  ", this.state.viewListMode);
        const { viewListMode } = this.state;

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
                    <span className={`${viewListMode === "panel" ? 'panel-icon-dark' : 'panel-icon-ligh'}`} onClick={this.handleModeView}/>
                    <span className={`${viewListMode === "list" ? 'list-icon-dark' : 'list-icon-light'}`} onClick={this.handleModeView}/>
                </div>
            </nav>
        );
    }
}

export default NavComponent;

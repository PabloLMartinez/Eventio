import React, { Component } from "react";

import "../styles/nav.scss";

class NavComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            viewListMode: "panel",
            width: window.innerWidth,
            activeFilter: 0
        };
        this.handleModeView = this.handleModeView.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
    }

    handleModeView(e) {
        e.stopPropagation();
        let className = e.target.className;
        let view = className.substr(0, className.indexOf('-'));
        this.setState({ viewListMode: view });
        this.props.changeView(view);
    }

    handleFilter(index, e) {
        e.stopPropagation();
        this.setState({ activeFilter: index });
        this.props.changeFilter(index);
    }

    render() {
        const { width, viewListMode } = this.state;
        const isMobile = width <= 500;

        if (isMobile) {
            return (
                <nav className="nav-mobile">
                    <div className="navigator">
                        <label>SHOW:</label>
                        <select className="select-view-mode">
                            <option>ALL EVENTS</option>
                        </select>
                    </div>
                    <div className="view-mode">
                        <span className={`${viewListMode === "panel" ? 'panel-icon-dark' : 'panel-icon-ligh'}`} onClick={this.handleModeView}/>
                        <span className={`${viewListMode === "list" ? 'list-icon-dark' : 'list-icon-light'}`} onClick={this.handleModeView}/>
                    </div>
                </nav>
            );
        } else {
            return (
                <nav className="nav-desktop">
                    <div className="navigator">
                        <ul>
                            <li className={this.state.activeFilter === 0 ? 'active': null} onClick={this.handleFilter.bind(this, 0)}>ALL EVENTS</li>
                            <li className={this.state.activeFilter === 1 ? 'active': null} onClick={this.handleFilter.bind(this, 1)}>FUTURE EVENTS</li>
                            <li className={this.state.activeFilter === 2 ? 'active': null} onClick={this.handleFilter.bind(this, 2)}>PAST EVENTS</li>
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
}

export default NavComponent;

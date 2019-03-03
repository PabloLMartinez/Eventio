import React, { Component } from "react";
import { Route } from "react-router-dom";

import Dashboard from "../../dashboard/containers/dashboard.container";
import EventAdd from "../../dashboard/containers/event.add.container";

class App extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/event/add" component={EventAdd}/>
            </div>
        );
    }
}

export default App;

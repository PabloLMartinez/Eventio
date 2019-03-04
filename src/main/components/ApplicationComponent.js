import React, { Component } from "react";
import { Route, Switch } from "react-router";

import Dashboard from "../../dashboard/containers/DashboardContainer";
import EventAdd from "../../dashboard/containers/form/EventAddContainer";
import ErrorNotFound from "../containers/ErrorNotFoundContainer";

class App extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/event/add" component={EventAdd}/>
                    <Route path="*" component={ErrorNotFound} />
                </Switch>
            </div>
        );
    }
}

export default App;

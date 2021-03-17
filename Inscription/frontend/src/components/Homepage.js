import React, { Component } from "react";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";

import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from "react-router-dom";

export default class HomePage extends Components {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/">
                        <p>This is the homepage</p>
                    </Route>
                    <Route path="/join" Component={RoomJoinPage} />
                    <Route path="/create" Component={CreateRoomPage} />
                </Switch>
            </Router>
        );
    }
}
import React from 'react';
import {hashHistory} from 'react-router';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Index from './Index';
import Login from './Login'

function Routejs() {
    return (
        <div style={{ color: "white" }}>
            <Router history={hashHistory}>
                <Switch>
                    <Route path="/" exact component={Login}></Route>
                    <Route path="/index" exact component={Index}></Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Routejs;

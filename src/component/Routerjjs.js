import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import {hashHistory} from 'react-router';
import Test from './Test';
import Testroute from './Testroute';



const Routerjjs = () => (
    <HashRouter history={hashHistory}>
        <Switch>
            <Route exact path="/" component={Test}/>
            <Route exact path="/detail" component={Testroute}/>
        </Switch>
    </HashRouter>
);


export default Routerjjs;
import React, { Component } from 'react';
import { Router, Switch, Route } from "react-router-dom";
import createHistory from 'history/createBrowserHistory';

import requireSignIn from './hoc/require-signin';

import DashBoard from './dash-board';
import Blogs from './blogs';

class App extends Component {
    render() {
        return (

            <Router history={createHistory()}>
                <div>
                    <Switch>
                        <Route exact path="/" component={DashBoard} />
                        <Route exact path="/blogs" component={requireSignIn(Blogs)} />
                    </Switch>
                </div>
            </Router>

        );
    }
}

export default App;

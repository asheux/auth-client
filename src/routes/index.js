import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import Home from '../components/Home';
import Signin from '../containers/Signin';
import Signup from '../containers/Signup';

const Routes = () => {
    return (
        <Router history={withRouter}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/login" component={Signin} />
            </Switch>
        </Router>
    )
}

export default Routes;

// React imports
import React from 'react';
// Third-party imports
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


// fs imports
import Home from './Home';
import Login from './admin/Login';
import Dashboard from './admin/Dashboard';
import PrivateRoute from '../routes/PrivateRoute';
import NotFound from './NotFound';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/admin/login" component={Login} />
                <PrivateRoute exact path="/admin/dashboard" component={Dashboard} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
}
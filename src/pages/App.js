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
import User from './admin/user/User';
import EditUser from './admin/user/EditUser';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <PrivateRoute exact path="/dashboard/user" component={User} />
                <PrivateRoute exact path="/dashboard/user/:id" component={EditUser} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
}
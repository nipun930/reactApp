import React, { Suspense } from 'react';
import './AuthHeader.scss'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Signup from "./Signup/Signup";
import Login from "./Login/Login";


export default class AuthHeder extends React.Component {
    componentDidMount() {
        this.toAdmin();
    }

    toAdmin() {
        console.log(this.context);

    }
    render() {
        return (
            <div>

                <Router>
                    <div className="auth-header">
                        <span className="title">Admin</span>
                        <div className="links">
                            <span>
                                <Link to="/login">
                                    Login
                                </Link>
                            </span>
                            <span>
                                <Link to="/signup">
                                    Signup
                                </Link>
                            </span>
                        </div>
                    </div>
                    <div>
                        <Switch>
                            <Route path="/signup">
                                <Signup />
                            </Route>
                            <Route path="/login">
                                <Login />
                            </Route>
                            <Route path="/">
                                <Login />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}
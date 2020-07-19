import React, { Suspense } from 'react'; //{ Suspense } 
import './AuthHeader.scss'
import { Switch, Route, Link } from "react-router-dom";

const Signup = React.lazy(() => import('./Signup/Signup'));
const Login = React.lazy(() => import('./Login/Login'));
// import Signup from ;
// import Login from "";


export default class AuthHeder extends React.Component {
    componentDidMount() { }

    render() {
        return (
            <div>

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
                <Suspense fallback={<div className="container-below-header">Loading...</div>}>
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
                </Suspense>
            </div>
        )
    }
}
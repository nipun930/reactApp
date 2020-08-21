import React, { Suspense } from 'react';
import './Admin-pages.scss'
import { Switch, Route, Link } from "react-router-dom";

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

const Dashboard = React.lazy(() => import('./Dashboard/Dashboard'));
const ViewMagazine = React.lazy(() => import('./View-magazines/View-magazines'));
const AddMagazines = React.lazy(() => import('./Add-magazines/Add-magazines'));

export default class AdminPages extends React.Component {

    logOut = () => {
        sessionStorage.clear();
    }

    render() {
        return (
            <div>
                <input type="checkbox" id="sidemenu" />
                <label htmlFor="sidemenu">
                    <span id="showbtn">S</span>
                    <span id="hidebtn">H</span>
                </label>
                <div className="sidebar">
                    <header>ADMIN</header>
                    <ul>
                        <li>
                            <Link to="/admin/dashboard">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/view">
                                View Magazines
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/add">
                                Add Magazines
                            </Link>
                        </li>
                        <li>
                            <Link to="" onClick={this.logOut}>
                                Logout
                            </Link>
                        </li>
                    </ul>

                </div>

                <div className="header">
                    <div className="profile-pic">
                        {/* <img /> */}
                    </div>
                </div>

                <Suspense fallback={<div>Loading...</div>}>
                    <div className="body-content">
                        <Switch>
                            <Route exact path="/admin/dashboard">
                                <ProtectedRoute path={`/admin/dashboard`} component={Dashboard}>
                                </ProtectedRoute >
                            </Route>
                            <Route exact path="/admin/view">
                                <ProtectedRoute path={`/admin/view`} component={ViewMagazine}>
                                </ProtectedRoute >
                            </Route>
                            <Route exact path="/admin/add">
                                <ProtectedRoute path={`/admin/view`} component={AddMagazines}>
                                </ProtectedRoute >
                            </Route>
                            <Route path="/">
                                <ProtectedRoute path={`/admin/view`} component={Dashboard}>
                                </ProtectedRoute >
                            </Route>
                        </Switch>
                    </div>
                </Suspense>
            </div>
        )
    }
}
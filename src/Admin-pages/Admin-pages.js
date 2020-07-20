import React, { Suspense } from 'react';
import './Admin-pages.scss'
import { Switch, Route, Link } from "react-router-dom";

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

const Dashboard = React.lazy(() => import('./Dashboard/Dashboard'));
const ViewMagazine = React.lazy(() => import('./View-magazines/View-magazines'));
const AddMagazines = React.lazy(() => import('./Add-magazines/Add-magazines'));

export default class AdminPages extends React.Component {
    render() {
        return (
            <div>

                <div className="admin-pages">
                    <span className="title"><span className="logo">G</span>eo Child</span>
                    <div className="links">
                        <span>
                            <Link to="/admin/dashboard">
                                Home
                                </Link>
                        </span>
                        <span>
                            <Link to="/admin/view">
                                View Magazines
                                </Link>
                        </span>
                        <span>
                            <Link to="/admin/add">
                                Add Magazines
                                </Link>
                        </span>
                    </div>
                </div>
                <Suspense fallback={<div>Loading...</div>}>
                    <div>
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
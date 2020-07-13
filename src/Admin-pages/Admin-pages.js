import React, { Suspense } from 'react';
import './Admin-pages.scss'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Dashboard = React.lazy(()=>import('./Dashboard/Dashboard'));
const ViewMagazine = React.lazy(()=>import('./View-magazines/View-magazines'));
const AddMagazines = React.lazy(()=>import('./Add-magazines/Add-magazines'));

export default class AdminPages extends React.Component {
    render() {
        return (
            <div>
                <Suspense fallback={<div>Loading...</div>}>
                <Router>
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
                    <div>
                        <Switch>
                            <Route exact path="/admin/dashboard">
                                <Dashboard />
                            </Route>
                            <Route exact path="/admin/view">
                                <ViewMagazine />
                            </Route>
                            <Route exact path="/admin/add">
                                <AddMagazines />
                            </Route>
                            <Route path="/admin/">
                                <Dashboard />
                            </Route>
                        </Switch>
                    </div>
                </Router>
                </Suspense>
            </div>
        )
    }
}
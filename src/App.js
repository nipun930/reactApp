import React, { Suspense } from 'react';
import './App.scss';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const AdminPages = React.lazy(() => import('./Admin-pages/Admin-pages'));
const AuthHeder = React.lazy(() => import('./Authentication/AuthHeader'));

export default class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <Router>
            <div>
              <Switch>
                <Route path="/admin">
                  <AdminPages />
                </Route>
                <Route path="/auth">
                  <AuthHeder />
                </Route>
                <Route path="/">
                  <AuthHeder />
                </Route>
              </Switch>
            </div>
          </Router>
        </Suspense>
      </div>
    );
  }
}

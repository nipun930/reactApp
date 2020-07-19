import React from 'react'; //react-navigation by jibreel
import './Login.scss'

import { Form, Button } from 'react-bootstrap';
import { Redirect, withRouter } from "react-router-dom";


export default class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            redirect: null,
            email: '',
            password: ''
        }
    }

    login() {
        sessionStorage.setItem('auth', true);
        this.setState({ redirect: "/admin" });
        // this.props.history.push('/admin')
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div>
                <div className="page-name">Login</div>
                <div className="login-container">
                    <Form autoComplete="off">
                        <Form.Group>
                            <Form.Label> Email Id  </Form.Label>
                            <Form.Control type="text" value={this.state.email} autoComplete="false" placeholder="Enter Email Id"
                                onChange={(e) => { this.setState({ email: e.target.value }) }} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label> Password </Form.Label>
                            <Form.Control type="password" value={this.state.password} autoComplete="false" placeholder="Enter Password"
                                onChange={(e) => { this.setState({ password: e.target.value }) }} />
                        </Form.Group>
                        <Button variant="primary" disabled={!(this.state.email !== '' && this.state.password !== '')}
                            onClick={() => { this.login(); }}>
                            Login
                        </Button>
                    </Form>
                </div>
            </div>
        )
    }
}
// export default withRouter(Login)
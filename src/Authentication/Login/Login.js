import React from 'react';
import { Form, Button } from 'react-bootstrap';

import './Login.scss'
import { environment } from '../../environment';




export default class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            // responsefromServer: 'waiting',
            userName: '',
            password: '',
        }
    }

    componentDidMount() {
        fetch(`${environment.baseUrl}/test`)
            .then(res => res.json())
            .then(response => {
                console.log('response from get api is =>', response);
                this.setState({
                    responsefromServer: response.message
                });
                console.log('response from get api is =>', this.state.responsefromServer);
            },
                (error) => {
                    console.log('error => ', error);
                });
    }

    render() {
        return (
            <div>
                <div className="page-name">Login</div>
                <div className="login-container">
                    <Form autoComplete="off">
                        <Form.Group>
                            <Form.Label> Email Id  </Form.Label>
                            <Form.Control type="text" value={this.state.userName} autoComplete="false" placeholder="Enter Email Id"
                                onChange={(e) => { this.setState({ email: e.target.value }) }} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label> Password </Form.Label>
                            <Form.Control type="password" value={this.state.password} autoComplete="false" placeholder="Enter Password"
                                onChange={(e) => { this.setState({ password: e.target.value }) }} />
                        </Form.Group>
                        <Button variant="primary" disabled={!(this.state.userName !== '' && this.state.password !== '')}
                            onClick={() => { console.log(this.state) }}>
                            Login
                    </Button>
                    </Form>
                </div>
            </div>
        )
    }
}
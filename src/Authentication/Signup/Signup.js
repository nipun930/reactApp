import React from 'react';
import { Form, Button } from 'react-bootstrap';

import './Signup.scss'


export default class Signup extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            fName: '',
            lName: '',
            dob: '',
            pNo: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }

    render() {
        return (
            <div>
                <div className="page-name">Sign Up</div>
                <div className="signup-container">
                    <Form autoComplete="off">
                        <Form.Group>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="First Name" value={this.state.fName} autoComplete="false"
                                onChange={(e) => { this.setState({ fName: e.target.value.trim() }) }} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Last Name" value={this.state.lName} autoComplete="false"
                                onChange={(e) => { this.setState({ lName: e.target.value.trim() }) }} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Date of Birth</Form.Label>
                            <Form.Control type="date" placeholder="Date of birth" value={this.state.dob} autoComplete="false"
                                onChange={(e) => { this.setState({ dob: e.target.value }) }} />
                            {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker/>
                        </MuiPickersUtilsProvider> */}
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="text" placeholder="Phone Number" value={this.state.pNo} autoComplete="false"
                                onChange={(e) => { this.setState({ pNo: e.target.value.trim() }) }} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="text" placeholder="Email address" value={this.state.email} autoComplete="false"
                                onChange={(e) => { this.setState({ email: e.target.value.trim() }) }} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={this.state.pwd} autoComplete="false"
                                onChange={(e) => { this.setState({ Password: e.target.value }) }} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" value={this.state.pwd} autoComplete="false"
                                onChange={(e) => { this.setState({ confirmPassword: e.target.value }) }} />
                        </Form.Group>
                        <Button onClick={() => { console.log(this.state) }}>
                            Signup
                    </Button>
                    </Form>
                </div>
            </div>
        )
    }
}

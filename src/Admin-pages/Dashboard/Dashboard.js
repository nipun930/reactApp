import React from 'react';
import './Dashboard.scss'

export default class Dashboard extends React.Component {

    render() {
        return (
            <div>
                <div className="box">
                    <div className="box-head">
                        <div className="title">TITLE</div>
                        <div className="tools">tools</div>
                    </div>
                    <div className="box-body">
                        DashBoard Goes Here
                    </div>
                </div>
            </div>
        )
    }
}
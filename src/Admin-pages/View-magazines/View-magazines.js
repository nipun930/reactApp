import React from 'react';
import './View-magazines.scss'

export default class ViewMagazine extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            // tableData: [{name:'nipun', phone: 8221017923},{name:'rahul', phone: 8221017944}]
            tableData: null
        }
    }

    componentDidMount(){
        this.setData();
        
        console.log('table data', this.state.tableData);
    }

    setData(){
        // this.setState({
        //     tableData: [{name:'nipun', phone: 8221017923},{name:'rahul', phone: 8221017944}]
        // })
    }

    render(){
        return(
            <div className="admin-container">
                this is View Component
            </div>
        )
    }
}
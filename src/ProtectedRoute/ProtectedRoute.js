import React from 'react'
import { Redirect } from 'react-router-dom'

class ProtectedRoute extends React.Component {

    isAuthenticated(){
        return (sessionStorage.auth)?true:false;
    }

    render() {
        const Component = this.props.component;
        const exact = this.props.exact;
        // const isAuthenticated = sessionStorage.auth;
        return this.isAuthenticated()? <Component /> : <Redirect exact={exact} to={{ pathname: '/auth' }} /> ;
        // ()=>{
        // }
        
       
        // return isAuthenticated() ? (
            
        // ) : (
            
        // );
    }
}

export default ProtectedRoute;
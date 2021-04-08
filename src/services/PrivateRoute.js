import React from 'react';
import { Route } from 'react-router-dom';
import AuthRedirect from './AuthRedirect'

const PrivateRoute = ({component: Component, authEd, ...rest}) => {
    console.log("sd",authEd)
    return (
        <Route {...rest}  render={props => (
            (authEd) ? (
                <Component {...props} /> 
            )
            : <AuthRedirect authEd={authEd} />
        )} />
    ); 
}; 


export default PrivateRoute;
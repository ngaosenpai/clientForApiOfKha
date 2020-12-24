import React, {useContext} from 'react';
import {Route, Redirect} from "react-router-dom"
import {AuthContext} from "./auth"

function ProtectedRoute({component: Component, ...rest}) {

    let authContext = useContext(AuthContext)
    console.log(authContext.isAuthenticated)
    return (
        <Route
            {...rest}
            render = {props => {
                if(authContext.isAuthenticated){
                    return <Component {...props}></Component>
                } else {
                    return (<Redirect
                                to={{
                                    pathname: "/",
                                    state: { from: props.location }
                                }}
                            />)
                }
            }}
        />      
    );
}

export default ProtectedRoute;
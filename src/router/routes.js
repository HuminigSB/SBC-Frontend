import React from 'react'
import {Route, Redirect} from 'react-router-dom'

import {store} from '../store'

const RouteWrapper = ({
    component: Component,
    isPrivate,
    isAdmin,
    ...rest
}) => {
    const signed = store.getState().auth.signed
    let profile
    
    if(signed){
        profile = store.getState().auth.user.profile
    }

    if(!signed && isPrivate)
        return <Redirect to="/"/>

    if(signed && !isPrivate)
        return <Redirect to="/dashboard"/>

    if(isAdmin && !(profile === 'admin')){
        return <Redirect to="/dashboard"/>
    }
    
    return <Route {...rest} render={props => <Component {...props}/>} />
}

export default RouteWrapper
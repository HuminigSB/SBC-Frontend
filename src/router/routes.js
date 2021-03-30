import React from 'react'
import {Route, Redirect} from 'react-router-dom'

import {store} from '../store'
import AuthLayout from '../layout/auth'
import DefaultLayout from '../layout/default'

const RouteWrapper = ({
    component: Component,
    isPrivate,
    isAdmin,
    isFunc,
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

    if(isFunc && !((profile === 'admin') || (profile === 'funcionario'))){
        return <Redirect to="/dashboard"/>
    }

    const Layout = signed ? AuthLayout : DefaultLayout

    return <Route {...rest} render={props => (
        <Layout>
            <Component {...props}/>
        </Layout> 
    )} />
}

export default RouteWrapper
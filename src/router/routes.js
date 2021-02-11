import React from 'react'
import {Switch, Route} from 'react-router-dom'

import SignIn from '../pages/SignIn'
import SignUp from '../pages/SingUp'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={SignIn}/>
            <Route path="/signup" component={SignUp}/>
        </Switch>
    )
}

export default Routes
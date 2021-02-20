import React from 'react'
import {Switch, Route} from 'react-router-dom'

import SignIn from '../pages/SignIn'
import SignUp from '../pages/SingUp'
import AdicionarFuncionario from '../pages/AdicionarFuncionario'
import ListarUsuarios from '../pages/ListarUsuarios'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={SignIn}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/adicionarFuncionario" component={AdicionarFuncionario}/>
            <Route path="/listarUsuarios" component={ListarUsuarios}/>
        </Switch>
    )
}

export default Routes
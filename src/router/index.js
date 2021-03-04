import React from 'react'
import {Switch} from 'react-router-dom'

import Route from './routes'

// Sem autenticação
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SingUp'

// Com autenticação
import Menu from '../pages/Menu'
import ListarUsuarios from '../pages/ListarUsuarios'

// Somente administrador
import AdicionarFuncionario from '../pages/AdicionarFuncionario'
import EditarUsuario from '../pages/EditarUsuario'

const Routes = () => (
    <Switch>
        <Route exact path="/" component={SignIn}/>
        <Route path="/signup" component={SignUp}/>

        <Route path="/dashboard" component={Menu} isPrivate />
        <Route path="/editarUsuario/:id" component={EditarUsuario} isPrivate />

        <Route path="/adicionarFuncionario" component={AdicionarFuncionario} isPrivate isAdmin/>
        <Route path="/listarUsuarios" component={ListarUsuarios} isPrivate isAdmin/>
    </Switch>
)

export default Routes
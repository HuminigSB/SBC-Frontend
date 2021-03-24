import React from 'react'
import {Switch} from 'react-router-dom'

import Route from './routes'

// Sem autenticação
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SingUp'

// Com autenticação
import Menu from '../pages/Menu'
import ListarUsuarios from '../pages/ListarUsuarios'
import AdicionarCombo from '../pages/AdicionarCombo'

// Somente administrador
import AdicionarFuncionario from '../pages/AdicionarFuncionario'
import EditarUsuario from '../pages/EditarUsuario'
import AdicionarSala from '../pages/AdicionarSala'
import ListarSalas from '../pages/ListarSalas'
import EditarSala from '../pages/EditarSala'

// Não encontrado
import NotFound from '../pages/DefaultPage'

const Routes = () => (
    <Switch>
        <Route exact path="/" component={SignIn}/>
        <Route path="/signup" component={SignUp}/>

        <Route path="/dashboard" component={Menu} isPrivate />
        <Route path="/editarUsuario/:id" component={EditarUsuario} isPrivate />
        <Route path="/adicionarCombo" component={AdicionarCombo} isPrivate />

        <Route path="/adicionarFuncionario" component={AdicionarFuncionario} isPrivate isAdmin/>
        <Route path="/listarUsuarios" component={ListarUsuarios} isPrivate isAdmin/>
        <Route path="/adicionarSala" component={AdicionarSala} isPrivate isAdmin/>
        <Route path="/listarSalas" component={ListarSalas} isPrivate isAdmin/>
        <Route path="/editarSala" component={EditarSala} isPrivate isAdmin/>

        <Route path="/" component={NotFound}/>
    </Switch>
)

export default Routes
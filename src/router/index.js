import React from 'react'
import {Switch} from 'react-router-dom'

import Route from './routes'

// Sem autenticação
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SingUp'
import HelperSignUp from '../pages/SingUp/Helper'

// Helper

// Com autenticação
import Menu from '../pages/Menu'
import ListarUsuarios from '../pages/ListarUsuarios'
import AdicionarCombo from '../pages/AdicionarCombo'
import ListarSessoes from '../pages/ListarSessoes'
import Reserva from '../pages/Reserva'

// Somente administrador
import AdicionarFuncionario from '../pages/AdicionarFuncionario'
import EditarUsuario from '../pages/EditarUsuario'
import AdicionarSala from '../pages/AdicionarSala'
import ListarSalas from '../pages/ListarSalas'
import EditarSala from '../pages/EditarSala'
import AdicionarSessao from '../pages/AdicionarSessao'
import EditarSessao from '../pages/EditarSessao'

// Não encontrado
import NotFound from '../pages/DefaultPage'

const Routes = () => (
    <Switch>
        <Route exact path="/" component={SignIn}/>
        <Route path="/signup" component={SignUp}/>

        <Route path="/helper-signup" component={HelperSignUp}/>

        <Route path="/dashboard" component={Menu} isPrivate />
        <Route path="/editarUsuario/:id" component={EditarUsuario} isPrivate />
        <Route path="/adicionarCombo" component={AdicionarCombo} isPrivate />
        <Route path="/listarSessoes/:type" component={ListarSessoes} isPrivate/>
        <Route path="/reservar/:id" component={Reserva} isPrivate/>
        
        <Route path="/adicionarFuncionario" component={AdicionarFuncionario} isPrivate isAdmin />
        <Route path="/listarUsuarios" component={ListarUsuarios} isPrivate isAdmin />
        <Route path="/adicionarSala" component={AdicionarSala} isPrivate isFunc/>
        <Route path="/listarSalas" component={ListarSalas} isPrivate isFunc/>
        <Route path="/editarSala" component={EditarSala} isPrivate isFunc/>
        <Route path="/adicionarSessao" component={AdicionarSessao} isPrivate isFunc/>
        <Route path="/editarSessao/:id" component={EditarSessao} isPrivate isFunc/>
        
        <Route path="/" component={NotFound}/>
    </Switch>
)

export default Routes
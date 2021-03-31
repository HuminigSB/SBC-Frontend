import React, { useEffect, useState } from 'react'

import {store} from '../../store'
import history from '../../services/history'
import AdicionarIcon from '../../assets/adcFunc.svg'
import ListarIcon from '../../assets/listUsers.svg'
import AdicionarSala from '../../assets/adcSala.svg'
import ListarSalas from '../../assets/listSalas.svg'
import EditarSala from '../../assets/editSala.svg'
import AdicionarCombo from '../../assets/addCombo.svg'
import AdicionarSessao from '../../assets/adcSessao.svg'
import EditarSessao from '../../assets/editSessao.svg'
import Reservar from '../../assets/reservar.svg'

import { Container, Card, Row } from './styles'

const Menu = () => {
    const [isFunc, setIsFunc] = useState('')
    const [isAdmin, setIsAdmin] = useState('')

    useEffect(() => {
        setIsFunc(!!(store.getState().auth.user.profile === 'funcionario'))
        setIsAdmin(!!(store.getState().auth.user.profile === 'admin'))
    }, [])

    const listUser = () => history.push('/listarUsuarios') 
    const adicionarUser = () => history.push('/adicionarFuncionario') 
    const adicionarSala = () => history.push('/adicionarSala') 
    const listarSalas = () => history.push('/listarSalas') 
    const adicionarCombo = () => history.push('/adicionarCombo') 
    const adicionarSessao = () => history.push('/adicionarSessao') 
    const listarSessoesEditar = () => history.push('/listarSessoes/0')
    const listarSessoesReservar = () => history.push('/listarSessoes/1')

    return(
        <Container>
           <Row>
                <Card onClick={adicionarCombo}>
                    <strong>Adicionar Combo (Simulação)</strong>
                    <img src={AdicionarCombo} alt="Adicionar Combo"/>
                </Card>

                <Card onClick={listarSessoesReservar}>
                    <strong>Reservar (Simulação)</strong>
                    <img src={Reservar} alt="Reservar"/>
                </Card>

                {(isAdmin || isFunc) &&(
                    <Card onClick={adicionarSessao}>
                        <strong>Adicionar Sessão</strong>
                        <img src={AdicionarSessao} alt="Adicionar Sessao"/>
                    </Card>
                )}
           </Row>

           <Row>
                {(isAdmin || isFunc) && (
                    <Card onClick={adicionarSala}>
                        <strong>Adicionar Sala</strong>
                        <img src={AdicionarSala} alt="Adicionar Sala"/>
                    </Card>
                )}

                {(isAdmin || isFunc) && (
                    <Card onClick={listarSalas}>
                        <strong>Listar Salas</strong>
                        <img src={ListarSalas} alt="Listar Salas"/>
                    </Card>
                )}

                {(isAdmin || isFunc) && (
                    <Card onClick={listarSalas}>
                        <strong>Editar Sala</strong>
                        <img src={EditarSala} alt="Editar Sala"/>
                    </Card>
                )}
           </Row>

           <Row>              
                {isAdmin && (
                    <Card onClick={listUser}>
                        <strong>Listar Usuários</strong>
                        <img src={ListarIcon} alt="Listar usuário"/>
                    </Card>
                )}

                {isAdmin && (
                    <Card onClick={adicionarUser}>
                        <strong>Adicionar Usuário</strong>
                        <img src={AdicionarIcon} alt="Adicionar funcionario"/>
                    </Card>
                )}


                {(isAdmin || isFunc) && (
                    <Card onClick={listarSessoesEditar}>
                        <strong>Editar Sessão</strong>
                        <img src={EditarSessao} alt="Editar Sessao"/>
                    </Card>
                )}
           </Row>

        </Container>
    )
}

export default Menu
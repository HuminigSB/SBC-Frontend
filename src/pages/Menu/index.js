import React, { useEffect, useState } from 'react'

import {store} from '../../store'
import history from '../../services/history'
import AdicionarIcon from '../../assets/adcFunc.svg'
import ListarIcon from '../../assets/listUsers.svg'
import EditarIcon from '../../assets/editUser.svg'
import AdicionarSala from '../../assets/adcSala.svg'
import ListarSalas from '../../assets/listSalas.svg'
import EditarSala from '../../assets/editSala.svg'
import AdicionarCombo from '../../assets/addCombo.svg'
import AdicionarSessao from '../../assets/adcSessao.svg'

import { Container, Card, Row } from './styles'

const Menu = () => {
    const [id, setId] = useState('')
    const [admin, setAdmin] = useState('')

    useEffect(() => {
        setId(store.getState().auth.user.id)
        setAdmin(store.getState().auth.user.profile)
    }, [])

    const listUser = () => history.push('/listarUsuarios') 
    const adicionarUser = () => history.push('/adicionarFuncionario') 
    const editarUser = () => history.push(`/editarUsuario/${id}`) 
    const adicionarSala = () => history.push('/adicionarSala') 
    const listarSalas = () => history.push('/listarSalas') 
    const adicionarCombo = () => history.push('/adicionarCombo') 
    const adicionarSessao = () => history.push('/adicionarSessao') 

    return(
        <Container>
           <Row>
                {admin && (
                        <Card onClick={listUser}>
                            <strong>Listar Usuários</strong>
                            <img src={ListarIcon} alt="Listar usuário"/>
                        </Card>
                )}

                {admin && (
                    <Card onClick={adicionarUser}>
                        <strong>Adicionar Funcionario</strong>
                        <img src={AdicionarIcon} alt="Adicionar funcionario"/>
                    </Card>
                )}

                {admin && (
                    <Card onClick={editarUser}>
                        <strong>Editar Funcionario</strong>
                        <img src={EditarIcon} alt="Editar funcionario"/>
                    </Card>
                )}
           </Row>

           <Row>
                {admin && (
                    <Card onClick={adicionarSala}>
                        <strong>Adicionar Sala</strong>
                        <img src={AdicionarSala} alt="Adicionar Sala"/>
                    </Card>
                )}

                {admin && (
                    <Card onClick={listarSalas}>
                        <strong>Listar Salas</strong>
                        <img src={ListarSalas} alt="Listar Salas"/>
                    </Card>
                )}

                {admin && (
                    <Card onClick={listarSalas}>
                        <strong>Editar Sala</strong>
                        <img src={EditarSala} alt="Editar Sala"/>
                    </Card>
                )}
           </Row>

           <Row>
                <Card onClick={adicionarCombo}>
                    <strong>Adicionar Combo</strong>
                    <img src={AdicionarCombo} alt="Adicionar Combo"/>
                </Card>

                {admin &&(
                <Card onClick={adicionarSessao}>
                    <strong>Adicionar Sessão</strong>
                    <img src={AdicionarSessao} alt="Adicionar Sessao"/>
                </Card>
                )}
           </Row>

        </Container>
    )
}

export default Menu
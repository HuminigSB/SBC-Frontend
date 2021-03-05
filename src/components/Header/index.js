import React from 'react'
import {useDispatch} from 'react-redux'
import { FiSettings } from 'react-icons/fi'

import {store} from '../../store/index'
import { signOut } from '../../store/modules/auth/actions'
import history from '../../services/history'
import { Container, ConfigButton, DeleteButton } from './styles' 

const Header = () => {
    const dispatch = useDispatch();

    const handleEdit = () => {
        const id = store.getState().auth.user.id
        history.push(`/editarUsuario/${id}`)
    }
    
    const handleMenu = () => {
        history.push('/dashboard')
    }

    const handleExit = () => {
        dispatch(signOut())
    }
    
    return (
        <Container>
            <DeleteButton onClick={handleExit}>
                sair
            </DeleteButton>

            <ConfigButton title="Voltar ao menu" onClick={handleMenu}>
                <strong>SBC</strong>
            </ConfigButton>

            <ConfigButton onClick={handleEdit}>
                <FiSettings color="#fff" size={25}/>
            </ConfigButton>
        </Container>
    )
}

export default Header
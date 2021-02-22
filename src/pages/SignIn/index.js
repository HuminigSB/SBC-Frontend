import React from 'react'
import {toast} from 'react-toastify'
import { useForm } from "react-hook-form";
import {useDispatch} from 'react-redux';

import history from '../../services/history'
import api from '../../services/api'
import Logo from '../../assets/logo-white.png'
import * as UserActions from '../../store/modules/user/actions'

import { Form, WrapperItens, Input, Button, LinkTo } from './styles'

const SignIn = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        api.post('/login', data).then(function (response){
            dispatch(UserActions.authUser(true))
            dispatch(UserActions.updateUser(response.data))
            toast.success("Login realizado com sucesso :D")
            history.push("/listarUsuarios")
        }).catch(function(error){
            dispatch(UserActions.authUser(false))
            dispatch(UserActions.updateUser({}))
            toast.error("Algo deu errado, tente novamente :/")
        })
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <img src={Logo} alt="Logo"/>

            <WrapperItens>
                <Input type="text" name="username" ref={register} placeholder="Nome de usuário"/>
                <Input type="password" name="password" ref={register} placeholder="Sua senha de acesso"/>
            </WrapperItens>

            <WrapperItens>
                <Button type="submit">Entrar</Button>
                <LinkTo to="/signup">criar conta</LinkTo>
            </WrapperItens>
        </Form>
    )
}

export default SignIn
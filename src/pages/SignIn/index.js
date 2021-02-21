import React from 'react'
import {toast} from 'react-toastify'
import { useForm } from "react-hook-form";
import api from '../../services/api'

import Logo from '../../assets/logo-white.png'

import { Form, WrapperItens, Input, Button, LinkTo } from './styles'

const SignIn = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        api.post('/login', data).then(function (response){
            toast.success("Login realizado com sucesso :D")
        }).catch(function(error){
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
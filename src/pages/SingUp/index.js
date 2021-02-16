import React from 'react'
import {toast} from 'react-toastify'
import { useForm } from "react-hook-form";
import api from '../../services/api'
import history from '../../services/history'

import Logo from '../../assets/logo-white.png'
import { Form, WrapperItens, Input, Button, Select, LinkTo } from './styles'

const SignUp = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        api.post('/user', data).then(function (response){
            toast.success("Conta criada com sucesso :D")
            history.push('/')
        }).catch(function(error){
            toast.error("Algo deu errado, tente novamente :/")
        })
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <img src={Logo} alt="Logo"/>

            <WrapperItens>
                <Input type="text" name="name" ref={register} placeholder="Nome completo"/>
                <Input type="text" name="cpf" ref={register} placeholder="Cpf"/>
                <Input type="text" name="rg" ref={register} placeholder="Rg"/>
                <Input type="text" name="email" ref={register} placeholder="E-mail"/>
                <Select name="phone" ref={register}>
                    <option value="movel">Móvel</option>
                    <option value="fixo">Fixo</option>
                </Select>
                <Input type="text" name="number" ref={register} placeholder="Telefone para contato"/>
                <Input type="text" name="username" ref={register} placeholder="Nome de usuário"/>
                <Input type="password" name="password" ref={register} placeholder="Sua senha de acesso"/>
            </WrapperItens>

            <WrapperItens>
                <Button type="submit">Criar conta</Button>
                <LinkTo to="/">já tenho uma conta</LinkTo>
            </WrapperItens>
        </Form>
    )
}

export default SignUp
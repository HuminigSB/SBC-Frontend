import React from 'react'
import {toast} from 'react-toastify'
import { useForm } from "react-hook-form"
import {useDispatch} from 'react-redux'
import * as Yup from 'yup'

import Logo from '../../assets/logo-white.png'
import {signInRequest} from '../../store/modules/auth/actions'

import { Form, WrapperItens, Input, Button, LinkTo } from './styles'

const schema = Yup.object().shape({
    username: Yup.string().required('O nome de usuário é obrigatório.'),
    password: Yup.string().required('A senha é obrigatória.')
});

const SignIn = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        schema.validate(data).then(function (response){
            dispatch(signInRequest(data))
        }).catch(function(error){
            toast.error(error.message)
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
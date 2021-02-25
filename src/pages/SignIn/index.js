// Import de bibliotecas
import React from 'react'
import {toast} from 'react-toastify'
import { useForm } from "react-hook-form";
import {useDispatch} from 'react-redux';
import * as Yup from 'yup';

// Import de arquivos auxiliares
import history from '../../services/history'
import api from '../../services/api'
import Logo from '../../assets/logo-white.png'
import * as UserActions from '../../store/modules/user/actions'

// Import de estilo
import { Form, WrapperItens, Input, Button, LinkTo } from './styles'

// Validação
const schema = Yup.object().shape({
    username: Yup.string().required('O nome de usuário é obrigatório.'),
    password: Yup.string().required('A senha é obrigatória.')
});

const SignIn = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        schema.validate(data).then(function (response){
            api.post('/login', data).then(function (response){
                dispatch(UserActions.authUser(true))
                dispatch(UserActions.updateUser(response.data))
                toast.success("Login realizado com sucesso!")
                history.push("/listarUsuarios")
            }).catch(function(error){
                dispatch(UserActions.authUser(false))
                dispatch(UserActions.updateUser({}))
                toast.error("ERRO: " + error.response.data.error)
            })
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
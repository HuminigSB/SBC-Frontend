// Import de bibliotecas
import React from 'react'
import {toast} from 'react-toastify'
import { useForm } from "react-hook-form"
import {useDispatch} from 'react-redux'
import * as Yup from 'yup'

// Import de arquivos auxiliares
import Logo from '../../assets/logo-white.png'
import {signUpRequest} from '../../store/modules/auth/actions';

// Import de estilo
import { Form, WrapperItens, Input, Button, Select, LinkTo } from './styles'

// Validação
const schema = Yup.object().shape({
    name: Yup.string().required("O nome de usuário é obrigatório."),
    email: Yup.string().email("O e-mail precisa ser válido.").required("O e-mail é obrigatório."),
    cpf: Yup.string().required("O cpf é obrigátorio."),
    rg: Yup.string().required("O rg é obrigátorio."),
    username: Yup.string().required("O usuário de acesso é obrigatório."),
    password: Yup.string().required("A senha de acesso é obrigatória.").min(6)
});

const SignUp = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        schema.validate(data).then(function (response){
            dispatch(signUpRequest(data))
        }).catch(function(error){
            toast.error(error.message)
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
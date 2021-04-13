import React from 'react'
import { useForm } from "react-hook-form"
import {toast} from 'react-toastify'
import * as Yup from 'yup'

import api from '../../services/api'
import history from '../../services/history'
import AdicionarFuncionarioImagem from '../../assets/adcFunc.svg'

import { Form, WrapperItens, Input, Button, Select} from './styles'

const schema = Yup.object().shape({
    name: Yup.string().matches(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/, "Apenas letras no nome").required("O nome do usuário é obrigatório."),
    email: Yup.string().email("O e-mail precisa ser válido.").required("O e-mail é obrigatório."),
    cpf: Yup.string().required("O cpf é obrigátorio."),
    rg: Yup.string().required("O rg é obrigátorio."),
    username: Yup.string().required("O usuário de acesso é obrigatório."),
    password: Yup.string().required("A senha de acesso é obrigatória.").min(6),
    number: Yup.string().matches(/^[0-9]*$/, "Apenas números no número")
});

const AdicionarFuncionario = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        schema.validate(data).then(function (response){
            api.post('/user', data).then(function (response){
                toast.success("Conta criada com sucesso!")
                history.push('/dashboard')
            }).catch(function(error){
                toast.error(error.response.data.error)
            })
        }).catch(function(error){
            toast.error(error.message)
        })
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <img src={AdicionarFuncionarioImagem} alt="AdicionarFuncionarioImagem"/>

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
                <Input type="password" name="password" ref={register} placeholder="Senha de acesso"/>
                <Select name="profile" ref={register}>
                    <option value="funcionario">Funcionario</option>
                    <option value="admin">Administrador</option>
                </Select>
            </WrapperItens>
            <Button type="submit">Criar conta</Button>
        </Form>
    )
}

export default AdicionarFuncionario

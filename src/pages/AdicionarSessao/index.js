import React from 'react'
import { useForm } from "react-hook-form"
import {toast} from 'react-toastify'
import * as Yup from 'yup'
import {FaQuestionCircle} from 'react-icons/fa'

import api from '../../services/api'
import history from '../../services/history'
import AdicionarSessaoImagem from '../../assets/adcSessao.svg'

import { Form, WrapperItens, Input, Button, WrapperInput, TextArea, WrapperButons} from './styles'
import { isBefore } from 'date-fns'

const schema = Yup.object().shape({
    idSala: Yup.string().matches(/^[0-9]*$/, "Apenas números").required(),
    title_movie: Yup.string().required("O titulo é obrigatório"),
    description: Yup.string().required("A sinopse é obrigatória"),
    data: Yup.string().required("A data é obrigatória"),
    inicio: Yup.string().matches(/^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/,"O horário de inicio é invalido").required("O horário inicial é obrigatório"),
    duracao: Yup.string().matches(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/,"O duração é invalida").required("O horário final é obrigatório")
});

const AdicionarSessao = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        if(isBefore(new Date(data.data+" "+data.inicio),new Date())){
            toast.error("Impossível inserir sessão antes da data atual.")
        }else{
            schema.validate(data).then(function (response){
                const dataVector = data.data.split('-')
                const treatedData = {idSala: data.idSala,
                    title_movie: data.title_movie,
                    description: data.description,
                    data: dataVector[2]+"/"+dataVector[1]+"/"+dataVector[0],
                    inicio: new Date(data.data+" "+data.inicio),
                    duracao: data.duracao,
                    linkImg: data.linkImg}
                api.post('/sessao', treatedData).then(function (response){
                    toast.success("Sessão criada com sucesso!")
                    history.push('/dashboard')
                }).catch(function(error){
                    toast.error(error.response.data.error)
                })
            }).catch(function(error){
                toast.error(error.message)
            })
        }
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <img src={AdicionarSessaoImagem} alt="AdicionarSessaoImagem"/>

            <WrapperItens>
                <WrapperInput>
                    <label htmlFor="title_movie">Título:</label>
                    <Input type="text" name="title_movie" ref={register} placeholder="Titulo"/>
                </WrapperInput>
                <WrapperInput>
                    <label htmlFor="description">Sinopse:</label>
                    <TextArea type="text" name="description" ref={register} placeholder="Descrição"/>
                </WrapperInput>
                <WrapperInput>
                    <label htmlFor="date">Data:</label>
                    <Input type="date" name="data" ref={register} placeholder="Data"/>
                </WrapperInput>
                <WrapperInput>
                    <label htmlFor="inicio">Horário de Início:</label>
                    <Input type="time" name="inicio" ref={register} placeholder="Horario de Inicio"/>
                </WrapperInput>
                <WrapperInput>
                    <label htmlFor="duracao">Duração:</label>
                    <Input type="time" name="duracao" ref={register} defaultValue="00:00"/>
                </WrapperInput>
                <WrapperInput>
                    <label htmlFor="idSala">ID da Sala:</label>
                    <Input type="text" name="idSala" ref={register} placeholder="ID da Sala"/>
                </WrapperInput>
                <WrapperInput>
                    <label htmlFor="linkImg">Link da imagem do filme:</label>
                    <Input type="text" name="linkImg" ref={register} placeholder="Link da imagem do filme"/>
                </WrapperInput>    
            </WrapperItens>
            <WrapperButons>
                <Button type="submit">Criar sessao</Button>
                <Button help={true} onClick={()=>{history.push('/helperAdicionarSessao')}}><FaQuestionCircle/></Button>
            </WrapperButons>
        </Form>
    )
}

export default AdicionarSessao
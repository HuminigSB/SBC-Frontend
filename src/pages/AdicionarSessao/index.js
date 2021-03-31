// Import de bibliotecas
import React from 'react'
import { useForm } from "react-hook-form"
import {toast} from 'react-toastify'
import * as Yup from 'yup'

// Import de arquivos auxiliares
import api from '../../services/api'
import history from '../../services/history'
import AdicionarSessaoImagem from '../../assets/adcSessao.svg'

// Import de estilo
import { Form, WrapperItens, Input, Button, WrapperInput, TextArea} from './styles'

const schema = Yup.object().shape({
    idSala: Yup.string().matches(/^[0-9]*$/, "Apenas números").required(),
    title_movie: Yup.string().required("O titulo é obrigatório"),
    description: Yup.string().required("A sinopse é obrigatória"),
    data: Yup.string().required("A data é obrigatória"),
    inicio: Yup.date().required("O horário inicial é obrigatório"),
    duracao: Yup.string().required("O horário final é obrigatório")
});

const AdicionarSessao = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        const treatedData = {idSala: data.idSala,
        title_movie: data.title_movie,
        description: data.description,
        data: data.data,
        inicio: new Date(data.data+" "+data.inicio),
        duracao: data.duracao,
        linkImg: data.linkImg}
        schema.validate(treatedData).then(function (response){
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
                    <label htmlFor="inicio">Horario de Inicio:</label>
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
            <Button type="submit">Criar sessao</Button>
        </Form>
    )
}

export default AdicionarSessao
// Import de bibliotecas
import React,{useEffect,useState} from 'react'
import { useForm } from "react-hook-form"
import {toast} from 'react-toastify'
import * as Yup from 'yup'

// Import de arquivos auxiliares
import api from '../../services/api'
import history from '../../services/history'
import EditarSessaoImagem from '../../assets/editSessao.svg'

// Import de estilo
import { Form, WrapperItens, Input, Button, WrapperInput} from './styles'

const schema = Yup.object().shape({
    title_movie: Yup.string().required("O titulo é obrigatório"),
    description: Yup.string().required("A sinopse é obrigatória")
});

const AdicionarSessao = () => {
    const { register, handleSubmit } = useForm();

    const [dados, setDados] = useState()
    const [load, setLoad] = useState(true)

    const id = +window.location.href.split("http://localhost:3000/editarSessao/").pop()

    useEffect(() => {
        async function load(){
            const {data} = await api.get(`/sessao/${id}`)
            setDados({
                titulo: data.title_movie,
                descricao: data.description,
                linkImg: data.linkImg
              })
            setLoad(false)
        }
        load()
    },[]);

    const onInputchange = (event) => {
        switch(event.target.name){
            case "title_movie":
                setDados({...dados, titulo : event.target.value})
                break
            case "description":
                setDados({...dados, descricao : event.target.value})
                break
            case "linkImg":
                setDados({...dados, linkImg : event.target.value})
                break
            default:
                break
        }     
    }

    const onSubmit = (data) => {
        schema.validate(data).then(function (response){
            api.put(`/sessao/${id}`, data).then(function (response){
                toast.success("Sessão editada com sucesso!")
                history.push('/dashboard')
            }).catch(function(error){
                toast.error(error.response.data.error)
            })
        }).catch(function(error){
            toast.error(error.message)
        })
    }

    const handleDelete = () => {
        api.delete(`/sessao/${id}`).then(function (response){
            toast.success(response.data.success)
            history.push('/dashboard')
        }).catch(function(error){
            toast.error(error.response.data.error)
        })
    }

    return (
        <>{!load && (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <img src={EditarSessaoImagem} alt="EditarSessaoImagem"/>

            <WrapperItens>
                <WrapperInput>
                    <label htmlFor="title_movie">Título:</label>
                    <Input type="text" name="title_movie" ref={register} value={dados.titulo} placeholder="Titulo" onChange={(e)=>{ onInputchange(e)}}/>
                </WrapperInput>
                <WrapperInput>
                    <label htmlFor="description">Descrição:</label>
                    <Input type="text" name="description" ref={register} value={dados.descricao} placeholder="Descrição" onChange={(e)=>{ onInputchange(e)}}/>
                </WrapperInput>
                <WrapperInput>
                    <label htmlFor="linkImg">Link da imagem do filme:</label>
                    <Input type="text" name="linkImg" ref={register} value={dados.linkImg} placeholder="Link da imagem do filme" onChange={(e)=>{ onInputchange(e)}}/>
                </WrapperInput>    
            </WrapperItens>
            <Button type="submit">Editar sessao</Button>
            <Button type="button" onClick={handleDelete} >Excluirr sessao</Button>
        </Form>
        )
    }</>
    )
}

export default AdicionarSessao
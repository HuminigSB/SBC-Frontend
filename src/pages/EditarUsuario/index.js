// Import de bibliotecas
import React,{useEffect,useState} from 'react'
import { useForm } from "react-hook-form"
import {toast} from 'react-toastify'

// Import de arquivos auxiliares
import EditarUsuarioImagem from '../../assets/editUser.svg'
import api from '../../services/api'

// Import de estilo
import { Form, WrapperItens, Input, Button} from './styles'

const SignUp = () => {
    const { register, handleSubmit } = useForm();

    const [dados, setDados] = useState()
    const [load, setLoad] = useState(true) 

    const id = window.location.href.split("http://localhost:3000/editarUsuario/").pop()

    useEffect(() => {
        async function load(){
            const {data} = await api.get(`/login/${id}`)
            setDados({
                name: data.name,
                cpf: data.cpf,
                rg: data.rg,
                email: data.email,
                number: data.number
              })
            setLoad(false)
        }
        load()
    },[]);

    const onSubmit = (data) => {
        api.put(`/user/${id}`,data).then(function (response){
            toast.success("Usuario editado com sucesso!")
        }).catch(function(error){
            toast.error("Algo deu errado, tente novamente")
        })
    }

    const onInputchange = (event) => {
        switch(event.target.name){
            case "name":
                setDados({...dados, name : event.target.value})
                break
            case "cpf":
                setDados({...dados, cpf : event.target.value})
                break
            case "rg":
                setDados({...dados, rg : event.target.value})
                break
            case "email":
                setDados({...dados, email : event.target.value})
                break
            case "number":
                setDados({...dados, number : event.target.value})
                break
            default:
                break
        }     
    }

    return (
        <>{!load && (
            <Form onSubmit={handleSubmit(onSubmit)}>
                <img src={EditarUsuarioImagem} alt="Logo"/>
                <WrapperItens>
                    <Input type="text" name="name" ref={register} value={dados.name} onChange={(e)=>{ onInputchange(e)}}/>
                    <Input type="text" name="cpf" ref={register} value={dados.cpf} onChange={(e)=>{ onInputchange(e)}}/>
                    <Input type="text" name="rg" ref={register} value={dados.rg} onChange={(e)=>{ onInputchange(e)}}/>
                    <Input type="text" name="email" ref={register} value={dados.email} onChange={(e)=>{ onInputchange(e)}}/>
                    <Input type="text" name="number" ref={register} value={dados.number} onChange={(e)=>{ onInputchange(e)}}/>
                </WrapperItens>
                <Button type="submit">Salvar Alterações</Button>
            </Form>
            )
        }</>
    )
}

export default SignUp
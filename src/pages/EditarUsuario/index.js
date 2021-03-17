// Import de bibliotecas
import React,{useEffect,useState} from 'react'
import { useForm } from "react-hook-form"
import {toast} from 'react-toastify'
import {useDispatch} from 'react-redux'
import * as Yup from 'yup'

// Import de arquivos auxiliares
import EditarUsuarioImagem from '../../assets/editUser.svg'
import api from '../../services/api'
import history from '../../services/history'
import {store} from '../../store/index'
import {signOut} from '../../store/modules/auth/actions'

// Import de estilo
import { Form, WrapperItens, Input, Button, WrapperInput} from './styles'

const schema = Yup.object().shape({
    name: Yup.string().required("O nome do usuário é obrigatório."),
    email: Yup.string().email("O e-mail precisa ser válido.").required("O e-mail é obrigatório."),
    cpf: Yup.string().required("O cpf é obrigátorio."),
    rg: Yup.string().required("O rg é obrigátorio."),
});

const EditarUsuario = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    const [dados, setDados] = useState()
    const [userId, setUserId] = useState()
    const [load, setLoad] = useState(true)
    const [userAtual, setUserAtual]  = useState(false)

    const id = +window.location.href.split("http://localhost:3000/editarUsuario/").pop()

    useEffect(() => {
        async function load(){
            const admin = 'admin'===store.getState().auth.user.profile
            const atual = store.getState().auth.user.id===id
            if(!atual && !admin){
                history.push(`/dashboard`)
            }
            setUserId(store.getState().auth?.user?.id)
            const {data} = await api.get(`/login/${id}`)
            setDados({
                name: data.name,
                cpf: data.cpf,
                rg: data.rg,
                email: data.email,
                number: data.number
              })
            setLoad(false)
            setUserAtual(atual)
        }
        load()
    },[id,userId]);

    const onSubmit = (data) => {
        schema.validate(data).then(function (response){
            api.put(`/user/${id}`,data).then(function (response){
                toast.success(response.data.success)
            }).catch(function(error){
                toast.error(error.response.data.error)
            })
        }).catch(function(error){
            toast.error(error.message)
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

    const handleDelete = () => {
        api.delete('/user',{data: {
              id:id
            }
        }).then(function (response){
            toast.success(response.data.success)
            dispatch(signOut())
        }).catch(function(error){
            toast.error(error.response.data.error)
        })
    }

    return (
        <>{!load && (
            <Form onSubmit={handleSubmit(onSubmit)}>
                <img src={EditarUsuarioImagem} alt="Logo"/>
                <WrapperItens>
                    <WrapperInput>
                        <label htmlFor="number">Nome:</label>
                        <Input type="text" name="name" ref={register} value={dados.name} placeholder="Nome" onChange={(e)=>{ onInputchange(e)}}/>
                    </WrapperInput>

                    <WrapperInput>
                        <label htmlFor="number">Cpf:</label>
                        <Input type="text" name="cpf" ref={register} value={dados.cpf} placeholder="Cpf" onChange={(e)=>{ onInputchange(e)}}/>
                    </WrapperInput>

                    <WrapperInput>
                        <label htmlFor="number">Rg:</label>
                        <Input type="text" name="rg" ref={register} value={dados.rg} placeholder="Rg" onChange={(e)=>{ onInputchange(e)}}/>
                    </WrapperInput>

                    <WrapperInput>
                        <label htmlFor="number">E-mail:</label>
                        <Input type="text" name="email" ref={register} value={dados.email} placeholder="E-mail" onChange={(e)=>{ onInputchange(e)}}/>
                    </WrapperInput>

                    <WrapperInput>
                        <label htmlFor="number">Número de telefone:</label>
                        <Input type="text" name="number" ref={register} value={dados.number} placeholder="Número de telefone" onChange={(e)=>{ onInputchange(e)}}/> 
                    </WrapperInput>
                </WrapperItens>
                <Button type="submit">Salvar Alterações</Button>
                {}
                {userAtual && <Button type="button" onClick={handleDelete} >Apagar Conta</Button>}
            </Form>
            )
        }</>
    )
}

export default EditarUsuario
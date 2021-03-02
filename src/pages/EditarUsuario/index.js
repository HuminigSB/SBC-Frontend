// Import de bibliotecas
import React,{useEffect,useState} from 'react'
import { useForm } from "react-hook-form"
import {toast} from 'react-toastify'
import {useDispatch} from 'react-redux'

// Import de arquivos auxiliares
import EditarUsuarioImagem from '../../assets/editUser.svg'
import api from '../../services/api'
import {store} from '../../store/index'
import {signOut} from '../../store/modules/auth/actions'

// Import de estilo
import { Form, WrapperItens, Input, Button, WrapperInput} from './styles'

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
            setUserId(store.getState().auth?.user?.id)
            const atual = userId===id
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

    const handleDelete = () => {
        api.delete('/user',{data: {
              id:id
            }
        }).then(function (response){
            toast.success("Usuario apagado com sucesso!")
            dispatch(signOut())
        }).catch(function(error){
            toast.error("Algo deu errado, tente novamente")
        })
    }

    return (
        <>{!load && (
            <Form onSubmit={handleSubmit(onSubmit)}>
                <img src={EditarUsuarioImagem} alt="Logo"/>
                <WrapperItens>
                    <WrapperInput>
                        <label htmlFor="number">Nome:</label>
                        <Input type="text" name="name" ref={register} value={dados.name} onChange={(e)=>{ onInputchange(e)}}/>
                    </WrapperInput>

                    <wrapperInpu>
                        <label htmlFor="number">Cpf:</label>
                        <Input type="text" name="cpf" ref={register} value={dados.cpf} onChange={(e)=>{ onInputchange(e)}}/>
                    </wrapperInpu>

                    <wrapperInpu>
                        <label htmlFor="number">Rg:</label>
                        <Input type="text" name="rg" ref={register} value={dados.rg} onChange={(e)=>{ onInputchange(e)}}/>
                    </wrapperInpu>

                    <wrapperInpu>
                        <label htmlFor="number">E-mail:</label>
                        <Input type="text" name="email" ref={register} value={dados.email} onChange={(e)=>{ onInputchange(e)}}/>
                    </wrapperInpu>
                    <wrapperInpu>
                        <label htmlFor="number">Número de telefone:</label>
                        <Input type="text" name="number" ref={register} value={dados.number} placeholder="Número de telefone" onChange={(e)=>{ onInputchange(e)}}/> 
                    </wrapperInpu>
                </WrapperItens>
                <Button type="submit">Salvar Alterações</Button>
                {userAtual && <Button type="button" onClick={handleDelete} >Apagar Conta</Button>}
            </Form>
            )
        }</>
    )
}

export default EditarUsuario
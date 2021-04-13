import React,{useEffect,useState} from 'react'
import {toast} from 'react-toastify'
import {FaTrash,FaEdit} from 'react-icons/fa'

import api from '../../services/api'
import history from '../../services/history'
import ListarUsuariosImagem from '../../assets/listUsers.svg'
import {store} from '../../store/index'

import {ContainerTela,Tabela,ButtonTable} from './styles'

const ListarUsuarios = () => {  
    const [users,setUsers] = useState()
    const [load,setLoad] = useState(true)

    useEffect(() => {
        async function load(){
            const {data} = await api.get('/user')
            const userId = store.getState().auth?.user?.id
            const userPosition = data.findIndex(user => user.id === userId)
            data.splice(userPosition, 1);
            setUsers(data)
            setLoad(false)
        }
        load()
    },[]);
    
    const handleClick= (data,tipo) =>{
        switch(tipo){
            case "edit":
                history.push(`/editarUsuario/${data}`)
                break
            case "delete":
                api.delete('/user',{data: {
                    id:data
                }
                }).then(function (response){
                    window.location.reload()
                    toast.success(response.data.success)
                }).catch(function(error){
                    toast.error(error.response.data.error)
                })
                break
            default:
                break
        }
    }

    return(
        <ContainerTela>
            <img src={ListarUsuariosImagem} alt="ListarUsuariosImagem"/>
            <Tabela>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Telefone</th>
                        <th>Email</th>
                        <th>Tipo</th>
                        <th>Usuario</th>
                        <th>editar</th>
                        <th>Apagar</th>
                    </tr>
                </thead>
                <tbody>
                    {!load && users.map(user => <tr key={user.id}>
                        <td >{user.id}</td>
                        <td >{user.name}</td>
                        <td >{user.cpf}</td>
                        <td >{user.number}</td>
                        <td >{user.email}</td>
                        <td >{user.profile}</td>
                        <td >{user.username}</td>
                        <td ><ButtonTable name="edit" onClick={()=>{ handleClick(user.id,"edit") }}><FaEdit color="#fff" size={17}/></ButtonTable></td>
                        <td ><ButtonTable name="delete" onClick={()=>{ handleClick(user.id,"delete") }}><FaTrash color="#fff" size={17}/></ButtonTable></td>
                        </tr> )}
                </tbody>
            </Tabela>
        </ContainerTela>
    )
}

export default ListarUsuarios
// Import de bibliotecas
import React,{useEffect,useState} from 'react'
import {toast} from 'react-toastify'
import {FaTrash,FaEdit} from 'react-icons/fa'

// Import de arquivos auxiliares
import api from '../../services/api'
import history from '../../services/history'
import ListarUsuariosImagem from '../../assets/listUsers.svg'

// Import de estilo
import {ContainerTela,Tabela,ButtonTable} from './styles'

const ListarUsuarios = () => {  
    const [users,setUsers] = useState()
    const [load,setLoad] = useState(true) 
    
    useEffect(() => {
        async function load(){
            const {data} = await api.get('/user')
            setUsers(data)
            setLoad(false)
        }
        load()
    },[]);
    
    const handleDelete = (data) => {
        api.delete('/user',{data: {
              id:data
            }
          }).then(function (response){
            window.location.reload()
            toast.success("Usuario apagado com sucesso!")
        }).catch(function(error){
            toast.error("Algo deu errado, tente novamente")
        })
    }

    const handleEdit = (data) =>{
        history.push(`/editarUsuario/${data}`)
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
                        <td ><ButtonTable onClick={()=>{ handleEdit(user.id) }}><FaEdit color="#fff" size={17}/></ButtonTable></td>
                        <td ><ButtonTable onClick={()=>{ handleDelete(user.id) }}><FaTrash color="#fff" size={17}/></ButtonTable></td>
                        </tr> )}
                </tbody>
            </Tabela>
        </ContainerTela>
    )
}

export default ListarUsuarios
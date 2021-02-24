import React,{useEffect,useState} from 'react'
import api from '../../services/api'

import ListarUsuariosImagem from '../../assets/listUsers.svg'
import {ContainerTela,Tabela} from './styles'

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
                        </tr> )}
                </tbody>
            </Tabela>
        </ContainerTela>
    )
}

export default ListarUsuarios
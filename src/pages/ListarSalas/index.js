import React,{useEffect,useState} from 'react'
import {toast} from 'react-toastify'
import {FaTrash,FaEdit} from 'react-icons/fa'

import api from '../../services/api'
import history from '../../services/history'
import IconsSalas from '../../assets/listSalas.svg'

import {ContainerTela, Tabela, ButtonTable} from './styles'

const ListarSalas = () => {  
    const [salas,setSalas] = useState()
    const [load,setLoad] = useState(true)

    useEffect(() => {
        async function load(){
            const {data} = await api.get('/sala')
            setSalas(data.map(sala => ({ ...sala, updatedAt:  sala.updatedAt.substring(10, '') })))
            setLoad(false)
        }
        load()
    },[]);
    
    const handleClick= (data,tipo) =>{
        switch(tipo){
            case "edit":
                history.push(`/editarSala/${data}`)
                break
            case "delete":
                api.delete('/sala',{data: {
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
            <img src={IconsSalas} alt="ListarUsuariosImagem"/>
            <Tabela>
                <thead>
                    <tr>
                        <th>Número da sala</th>
                        <th>Última alteração</th>
                        <th>Editar Sala</th>
                        <th>Remover Sala</th>
                    </tr>
                </thead>
                <tbody>
                    {!load && salas.map(sala => <tr key={sala.id}>
                        <td >{sala.id}</td>
                        <td >{sala.updatedAt}</td>
                        <td ><ButtonTable name="edit" onClick={()=>{ handleClick(sala.id,"edit") }}><FaEdit color="#fff" size={17}/></ButtonTable></td>
                        <td ><ButtonTable name="delete" onClick={()=>{ handleClick(sala.id,"delete") }}><FaTrash color="#fff" size={17}/></ButtonTable></td>
                        </tr> )}
                </tbody>
            </Tabela>
        </ContainerTela>
    )
}

export default ListarSalas
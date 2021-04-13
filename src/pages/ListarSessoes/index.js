/* eslint-disable array-callback-return */
import React,{useEffect,useState} from 'react'
import dateFormat from 'dateformat'
import {isBefore, parseISO} from 'date-fns'
import {toast} from 'react-toastify'

import api from '../../services/api'
import history from '../../services/history'
import noImage from '../../assets/noImage.png'
import {store} from '../../store/index'

import {ContainerTela, Button} from './styles'

const ListarSessoes = () => {  
    const [sessoes,setSessao] = useState()
    const [load,setLoad] = useState(true)

    useEffect(() => {
        async function load(){
            const {data} = await api.get('/sessao/-1')
            const sessoesBusca = []
            data.map(sessao => {
                if(!sessao.linkImg){
                    sessao.linkImg = noImage
                }
                if(!isBefore(parseISO(sessao.inicio),new Date())){
                    sessoesBusca.push(sessao)
                }
            })
            if(sessoesBusca.length === 0){
                toast.warning('Nenhuma sessão ativa!')
                history.push('/dashboard')
            }
            setSessao(sessoesBusca)
            setLoad(false)
        }
        load()
    },[]);
    
    const handleClick= (data) =>{
        const type = +window.location.href.split("http://localhost:3000/listarSessoes/").pop()
        if(type === 0 && ('admin'===store.getState().auth.user.profile || 'funcionario'===store.getState().auth.user.profile)){
            history.push(`/editarSessao/${data}`)
        }else if(type === 1){
            history.push(`/reservar/${data}`)
        }else {
            toast.error("Link adulterado!")
            history.push('/dashboard')
        }
    }

    return(
        <ContainerTela>
            {!load && sessoes.map(sessao => 
                <Button key={sessao.id} onClick={()=>{ handleClick(sessao.id) }}>
                    <img src={sessao.linkImg} alt="cartaz do filme"/>
                    <p>{sessao.title_movie}</p>
                    <b>{sessao.data}</b>
                    <small>Inicio: {dateFormat(sessao.inicio, 'HH:MM')}</small>  
                    <small>Duração: {sessao.duracao}</small>            
                </Button>
            )}
        </ContainerTela>
    )
}

export default ListarSessoes
// Import de bibliotecas
import React,{useEffect,useState} from 'react'
import dateFormat from 'dateformat'
import {isBefore, parseISO} from 'date-fns'

// Import de arquivos auxiliares
import api from '../../services/api'
import history from '../../services/history'
import noImage from '../../assets/noImage.png'
import {store} from '../../store/index'

// Import de estilo
import {ContainerTela, Button} from './styles'

const ListarSessoes = () => {  
    const [sessoes,setSessao] = useState()
    const [load,setLoad] = useState(true)

    useEffect(() => {
        async function load(){
            const {data} = await api.get('/sessao/-1')
            const sessoesBusca = []
            data.map(sessao =>{
                if(!sessao.linkImg){
                    sessao.linkImg = noImage
                }
                if(!isBefore(parseISO(sessao.inicio),new Date())){
                    sessoesBusca.push(sessao)
                }
            })
            setSessao(sessoesBusca)
            setLoad(false)
        }
        load()
    },[]);
    
    const handleClick= (data,tipo) =>{
        const type = +window.location.href.split("http://localhost:3000/listarSessoes/").pop()
        console.log(type)
        if(type === 0 && ('admin'===store.getState().auth.user.profile || 'funcionario'===store.getState().auth.user.profile)){
            history.push(`/editarSessao/${data}`)
        }
        if(type === 1){
            console.log("chama reserva com id sessao:"+data)
        }
    }

    return(
        <ContainerTela>
            {!load && sessoes.map(sessao => 
                <Button key={sessao.id} onClick={()=>{ handleClick(sessao.id) }}>
                    <img src={sessao.linkImg}/>
                    <h1>{sessao.title_movie}</h1>
                    <b>{sessao.data}</b>
                    <small>{dateFormat(sessao.inicio, 'HH:MM')}</small>        
                </Button>
            )}
        </ContainerTela>
    )
}

export default ListarSessoes
// Import de bibliotecas
import React from 'react'
import {toast} from 'react-toastify'

// Import de arquivos auxiliares
import IconSala from '../../assets/adcSala.svg'
import api from '../../services/api'
import history from '../../services/history'

// Import estilos
import { Container } from './styles'

const AdicionarSala = () => {
    const handleSubmit = async () => {
        api.post('/sala').then(function (){
            toast.success("Sala adicionada com sucesso!")
            history.push('/dashboard')
        }).catch(function(error){
            toast.error("Erro ao adicionar uma nova sala!")
        })
    }

    return (
        <Container>
            <img src={IconSala} alt=""/>
            <button title="Adicionar Sala" onClick={handleSubmit}>
                Adicionar Sala
            </button>
        </Container>
    )
}

export default AdicionarSala

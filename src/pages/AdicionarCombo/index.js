// Import de bibliotecas
import React, { useEffect, useState } from 'react'
import {toast} from 'react-toastify'

// Import de arquivos auxiliares
import {store} from '../../store/index'
import api from '../../services/api'
import history from '../../services/history'
import NoneIcon from '../../assets/none.png'
import PipocaIcon from '../../assets/pipoca.png'
import RefriIcon from '../../assets/refri.png'
import PipocaRefriIcon from '../../assets/pipocaerefri.png'

// Import de estilo
import { Container, Button, Row } from './styles'

const AdicionarCombo = () => {  
    const [userId, setUserId] = useState()

    useEffect(() => {
        setUserId(store.getState().auth.user.id)
    }, [])

    const handleSubmit = (value) => {
        api.post('/combo', {
            id_user: userId,
            type: value
        }).then(function (response){
            history.push('/')
            toast.success("Combo adicionado com sucesso!")
        }).catch(function(error){
            toast.error(error.response.data.error)
        })
    }
  
    return(
        <Container>
            <Row>
                <Button onClick={() => {handleSubmit(1)}}>
                    <strong>Sem Combo</strong>
                    <small>R$0,00</small>
                    <img src={NoneIcon} alt="Sem Combo"/>
                </Button>

                <Button onClick={() => {handleSubmit(2)}}>
                    <strong>Apenas Pipoca</strong>
                    <small>R$5,00</small>
                    <img src={PipocaIcon} alt="Pipoca"/>
                </Button>
            </Row>

            <Row>
                <Button onClick={() => {handleSubmit(3)}}>
                    <strong>Apenas Refrigerante</strong>
                    <small>R$5,00</small>
                    <img src={RefriIcon} alt="Refrigerante"/>
                </Button>

                <Button onClick={() => {handleSubmit(4)}}>
                    <strong>Pipoca + Refrigerante</strong>
                    <small>R$8,00</small>
                    <img src={PipocaRefriIcon} alt="Refrigerante e Pipoca"/>
                </Button>
            </Row>
        </Container>
    )
}

export default AdicionarCombo
import React from 'react'
import {toast} from 'react-toastify'

import history from '../../services/history'
import NoneIcon from '../../assets/none.png'
import PipocaIcon from '../../assets/pipoca.png'
import RefriIcon from '../../assets/refri.png'
import PipocaRefriIcon from '../../assets/pipocaerefri.png'

import { Container, Button, Row } from './styles'

const AdicionarCombo = () => {  
    const handleSubmit = () => {
        toast.success("Combo adicionado com sucesso!")
        history.push('/dashboard')
    }
  
    return(
        <Container>
            <Row>
                <Button onClick={() => {handleSubmit()}}>
                    <strong>Sem Combo</strong>
                    <small>R$0,00</small>
                    <img src={NoneIcon} alt="Sem Combo"/>
                </Button>

                <Button onClick={() => {handleSubmit()}}>
                    <strong>Apenas Pipoca</strong>
                    <small>R$5,00</small>
                    <img src={PipocaIcon} alt="Pipoca"/>
                </Button>
            </Row>

            <Row>
                <Button onClick={() => {handleSubmit()}}>
                    <strong>Apenas Refrigerante</strong>
                    <small>R$5,00</small>
                    <img src={RefriIcon} alt="Refrigerante"/>
                </Button>

                <Button onClick={() => {handleSubmit()}}>
                    <strong>Pipoca + Refrigerante</strong>
                    <small>R$8,00</small>
                    <img src={PipocaRefriIcon} alt="Refrigerante e Pipoca"/>
                </Button>
            </Row>
        </Container>
    )
}

export default AdicionarCombo
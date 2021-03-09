import React from 'react'
import { Link } from 'react-router-dom'
 
import NotFound from "../../assets/not-found.svg"

import { Container } from './styles'

const DefaultPage = () => {
    return (
        <Container>
            <h1>Eí, essa página não existe '0'</h1>
            <img src={NotFound} alt="Não encontrado"/>
            <Link to="/">voltar ao inicio</Link>
        </Container>
    )
}

export default DefaultPage
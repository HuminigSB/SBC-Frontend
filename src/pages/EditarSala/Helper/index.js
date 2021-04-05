// Import de bibliotecas
import React from 'react'

// Import de arquivos auxiliares
import Example from '../../../assets/exemplo-sala.png'

// Import de estilo
import { Container, Content, Wrapper } from './styles'

const HelperSignUp = () => {
    return (
        <Container>
            <h1>Ajuda online para a sala</h1>

            <Wrapper>
                <Content>
                    <img src={Example} alt="Exemplo de sala"/>
                </Content>

                <Content>
                    <strong>Número</strong>
                    <p>O número de identificação fica logo abaixo da poltrona que deseja ser alterada. (Campo obrigatório)</p>
                </Content>

                <Content>
                    <strong>Estado</strong>
                    <p>Temos 2 estados atualmente, ativa como no exemplo as poltronas (1,2,3,4) e inativo como a poltrona (5). (Campo obrigatório)</p>
                </Content>

                <Content>
                    <strong>Tipo</strong>
                    <p>Atualmente temos 4 tipos de poltronas, na ordem da imagem acima econômica, vip, dupla e pcd. (Campo obrigatório)</p>
                </Content>
            </Wrapper>

            <button onClick={() => { window.history.back() }}>voltar a sala</button>
        </Container>
    )
}

export default HelperSignUp
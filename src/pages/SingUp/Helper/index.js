import React from 'react'

import { Container, Content, Wrapper } from './styles'

const HelperSignUp = () => {
    return (
        <Container>
            <h1>Ajuda online para o cadastro</h1>

            <Wrapper>
                <Content>
                    <strong>Nome</strong>
                    <p>O nome será para identificação, ele pode conter apenas caracteres do alfabeto (A...Z). (Campo obrigatório)</p>
                </Content>

                <Content>
                    <strong>Cpf</strong>
                    <p>Seu cpf será usado para evitar fradues, por isso use um cpf válido e digite apenas os números, sem pontuação. (Campo obrigatório)</p>
                </Content>
                
                <Content>
                    <strong>Rg</strong>
                    <p>Seu rg será usado para evitar fradues, por isso use um cpf válido e digite apenas os números, sem pontuação. (Campo obrigatório)</p>
                </Content>

                <Content>
                    <strong>E-mail</strong>
                    <p>O Rg será usado como primeira forma e contato, por isso use um e-mail válido. (Campo obrigatório)</p>
                </Content>

                <Content>
                    <strong>Tipo</strong>
                    <p>O tipo de telefone irá nos auxiliar caso necesite ligar para passar alguma informação. (Campo opcional)</p>
                </Content>

                <Content>
                    <strong>Telefone</strong>
                    <p>O telefone será a segunda forma de contato e aceita apenas carecteres númericos (0...9). (Campo opcional)</p>
                </Content>

                <Content>
                    <strong>Usuário</strong>
                    <p>O nome de usuário será usado para acessar nosso sistema. (Campo obrigatório)</p>
                </Content>
                
                <Content>
                    <strong>Senha</strong>
                    <p>A senha será usado para acessar o sistema, ela precisa ter no minímo 6 digitos. (Campo obrigatório)</p>
                </Content>
            </Wrapper>

            <button onClick={() => { window.history.back() }}>voltar para o cadastro</button>
        </Container>
    )
}

export default HelperSignUp
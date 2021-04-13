// Import de bibliotecas
import React from 'react'
import { useForm } from "react-hook-form"

// Import de arquivos auxiliares
import history from '../../../services/history'
import AdicionarSessaoImagem from '../../../assets/adcSessao.svg'

// Import de estilo
import { Form, WrapperItens, Input, Button, WrapperInput, TextArea, WrapperHelp, ButtonHelp} from './styles'

const AdicionarSessao = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = () => {
        history.push('/adicionarSessao')
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <img src={AdicionarSessaoImagem} alt="AdicionarSessaoImagem"/>

            <WrapperItens>
                <WrapperInput>
                    <label htmlFor="title_movie">Título:</label>
                    <WrapperHelp>
                        <Input type="text" name="title_movie" ref={register} placeholder="Titulo" disabled/>
                        <p>digite o titulo do filme nesse campo (ele é obrigatório)</p>
                    </WrapperHelp>                    
                </WrapperInput>
                <WrapperInput>
                    <label htmlFor="description">Sinopse:</label>
                    <WrapperHelp>
                        <TextArea type="text" name="description" ref={register} placeholder="Descrição" disabled/>
                        <p>digite a Sinopse do filme nesse campo (ele é obrigatório)</p>
                    </WrapperHelp>                    
                </WrapperInput>
                <WrapperInput>
                    <label htmlFor="date">Data:</label>
                    <WrapperHelp>
                        <Input type="date" name="data" ref={register} placeholder="Data" disabled/>
                        <p>escolha a data da sessão (esse campo é obrigatório)</p>
                    </WrapperHelp>                    
                </WrapperInput>
                <WrapperInput>
                    <label htmlFor="inicio">Horário de Início:</label>
                    <WrapperHelp>
                        <Input type="time" name="inicio" ref={register} placeholder="Horario de Inicio" disabled/>
                        <p>escolha o horário de início da sessão (esse campo é obrigatório)</p>
                    </WrapperHelp>                    
                </WrapperInput>
                <WrapperInput>
                    <label htmlFor="duracao">Duração:</label>
                    <WrapperHelp>
                        <Input type="time" name="duracao" ref={register} defaultValue="00:00" disabled/>
                        <p>escolha a duração do filme no formato HH:MM (esse campo é obrigatório)</p>
                    </WrapperHelp>                    
                </WrapperInput>
                <WrapperInput>
                    <label htmlFor="idSala">ID da Sala:</label>
                    <WrapperHelp>
                        <Input type="text" name="idSala" ref={register} placeholder="ID da Sala" disabled/>
                        <p>digite o id da sala nesse campo (aceita apenas números e é obrigatório)</p>
                    </WrapperHelp>
                </WrapperInput>
                <WrapperInput>
                    <label htmlFor="linkImg">Link da imagem do filme:</label>
                    <WrapperHelp>
                        <Input type="text" name="linkImg" ref={register} placeholder="Link da imagem do filme" disabled/>
                        <p>digite o link da imagem do cartaz do filme nesse campo (caso não seja informado na listagem sera exibida uma imagem indicando a ausência de imagem)</p>
                    </WrapperHelp>                    
                </WrapperInput>    
            </WrapperItens>
            <WrapperHelp>
                <ButtonHelp disabled>Criar sessao</ButtonHelp>
                <p>aperte nesse botão para criar a sessão</p>
            </WrapperHelp>
            
            <Button type="submit">Voltar</Button>
        </Form>
    )
}

export default AdicionarSessao
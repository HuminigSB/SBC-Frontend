import styled from 'styled-components'

export const Form = styled.form`
    height: 100%;
    background: #171717;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        height: 260px;
        margin: 10px 0;
    }
`

export const WrapperItens = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Input = styled.input`
    background: #2e2e2e;
    height: 50px;
    border: 0;
    border-radius: 4px;
    font-size: 18px;
    padding-left: 10px;
    margin: 10px 0;
    width: 300px;
    color: #666;
`

export const TextArea = styled.textarea`
    background: #2e2e2e;
    height: 250px;
    border: 0;
    border-radius: 4px;
    font-size: 18px;
    padding-left: 10px;
    margin: 10px 0;
    width: 300px;
    color: #666;
    resize: none;
`
export const ButtonHelp = styled.button`
    background: transparent;
    height: 50px;
    border: 1px solid #666;
    border-radius: 4px;
    font-size: 18px;
    padding-left: 10px;
    margin: 10px 0;
    width: 300px;
    color: #666;
    font-weight: bold;
    transition: all 0.4s;
`
export const Button = styled.button`
    background: transparent;
    height: 50px;
    border: 1px solid #666;
    border-radius: 4px;
    font-size: 18px;
    padding-left: 10px;
    margin: 10px 0;
    width: 300px;
    color: #666;
    font-weight: bold;
    transition: all 0.4s;

    &:hover{
        cursor: pointer;
        background: #b1060f;
        border: 1px solid #666;
        color: #b1060f;
        color: #fff;
    }
`

export const WrapperInput = styled.div`
    display: flex;
    flex-direction: column;

    label{
        color: #ccc;
        font-size: 13px;
    }
`

export const WrapperHelp = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    align-items: center;
    text-align: justify;
    p{
        font-size: 18px;
        color: #666;
        margin-bottom: 10px
    }
`
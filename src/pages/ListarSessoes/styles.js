import styled from 'styled-components'

export const ContainerTela = styled.div`
    height: 100vh;
    background: #171717;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding-top: 10px;
`


export const Button = styled.button`
    background-color: Transparent;
    border: none;
    margin: 10px 10px 0px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        height: 260px;
        width: 175.516px;
    }

    p{
        margin-top: 5px;
        width: 250px;
        word-wrap: break-word;
        font-weight: bold;
        color: #ccc;
        font-size: 18px;
    }

    b{
        color: #ccc;
        font-size: 13px;
    }

    small{
        color: #ccc;
        font-size: 13px;
    }
`


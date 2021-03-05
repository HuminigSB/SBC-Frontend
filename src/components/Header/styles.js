import styled from 'styled-components'

export const Container = styled.div`
    background: #333;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    strong{
        color: #fff;
        font-size: 30px;
    }
`

export const ConfigButton = styled.button`
    background: none;
    border: 0;
    transition: all 0.2s;

    &:hover{
        transform: scale(1.1);
    }
`

export const DeleteButton = styled.button`
    background: #d11b26;
    border: 1px solid #d11b26;
    padding: 10px;
    color: #fff;
    font-weight: bold;
    border-radius: 2px;
    transition: all 0.2s;

    &:hover{
        transform: scale(1.1);
        border: 1px solid #fff;
    }
`
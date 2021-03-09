import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background: #171717;

    h1{
        color: #fff;
        margin-bottom: 100px;
        margin-top: 80px;
        font-size: 50px;
    }

    a{
        text-decoration: none;
        color: #fff;
        margin-top: 35px;
        font-size: 20px;

        &:hover{
            text-decoration: underline;
        }
    }
`
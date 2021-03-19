import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #171717;
    height: 100vh;

    img{
        height: 650px;
        margin-top: -180px;
    }

    button{
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
        margin-top: 50px;

        &:hover{
            cursor: pointer;
            background: #b1060f;
            border: 1px solid #666;
            color: #b1060f;
            color: #fff;
        }
    }
`
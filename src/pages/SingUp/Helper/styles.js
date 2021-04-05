import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
    height: 100%;
    background: #171717;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;

    h1{
        color: #fff;
        margin-bottom: 25px;
        margin-top: 150px; 
    }

    button{
        background: transparent;
        height: 50px;
        border: 1px solid #666;
        border-radius: 4px;
        font-size: 18px;
        padding-left: 10px;
        margin: 50px 0;
        width: 200px;
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
    }
`

export const Content = styled.div`
    display: flex;
    max-width: 1200px;
    margin: 5px 0;

    strong{
        font-size: 20px;
        color: #b1060f;
        background: #fff;
        padding: 5px;
        border-radius: 4px;
        margin-right: 15px;
        width: 80px;
        text-align: center;
    }

    p{
        color: #fff;
    }
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
`

export const LinkTo = styled(Link)`
    color: #666;
    margin: 15px 0;

    &:hover{
        text-decoration: underline;
        color: #666;
    }
`
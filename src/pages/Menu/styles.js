import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #e6e6ea;
    height: 100vh;
    width: 100%;
`

export const Row = styled.div`
    display: flex;
    margin-top: 50px; 

    @media(max-width: 1500px){
        flex-direction: column;
    }
`

export const Card = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #333;
    height: 340px;
    width: 480px;
    border-radius: 8px;
    border: 1px solid #e6e6ea;
    margin: 0 10px;
    transition: all 0.3s;
    color: #fff;

    strong{
        font-size: 25px;
        margin-bottom: 25px;
        margin-top: -15px;
    }

    img{
        height: 150px;
    }

    :hover{
        color: #333;
        background: #e6e6ea;
        border: 1px solid #333;
        box-shadow: 1px 1px 15px #333;
        transform: scale(0.95);
    }

    @media(max-width: 1500px){
        margin: 10px 0;
    }
`
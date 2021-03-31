import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    min-width: 800px;
    background: #171717;
`

export const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 30px;
`

export const Button = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 350px;
    width: 350px;
    background: #333333;
    border: 5px solid #333333;
    border-radius: 8px;
    transition: all 0.6s;
    margin: 0 80px;

    strong{
        font-size: 25px;
        color: #fff;
    }

    small{
        color: #fff;
        font-size: 18px;
        margin-bottom: 25px;
    }

    img{
        height: 220px;
        opacity: 0.8;
    }

    &:hover{
        transform: scale(0.9);
        box-shadow: 1px 1px 40px #f00;
    }
`
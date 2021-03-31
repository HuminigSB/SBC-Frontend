import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background: whitesmoke;
    background: #171717;
    height: 100vh;
`

export const Table = styled.table`
    margin-top: -40px;
    color: #fff;
    width: 700px;

    td{
        text-align: center;

        label{
            font-size: 14px;
        }
    }
`

export const Icon = styled.img`
    height: 40px;
    margin: 10px 15px 0px 15px;
    opacity: ${props => props.active ? '1': '0.2'};
`

export const WrapperValues = styled.div`
    display: flex;
    margin-top: -50px;
    margin-bottom: 50px;

    input{
        cursor: not-allowed;
        opacity: 0.6;
        height: 50px;
        padding: 5px;
        border: 0;
        margin-right: 15px;
        border-radius: 4px;
        font-size: 17px;
    }

    button{
        cursor: not-allowed;
        opacity: 0.6;
        height: 50px;
        padding: 5px;
        border-radius: 4px;
        border: 0;
        background: #b1060f;
        color: #fff;
        font-size: 16px;
    }
`
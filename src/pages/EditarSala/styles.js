import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: whitesmoke;
    background: #171717;
    height: 100%;
`

export const Table = styled.table`
    margin-top: 50px;
    margin-bottom: 115px;
    color: #fff;
    width: 700px;

    td{
        text-align: center;

        label{
            font-size: 14px;
        }
    }
`

export const EditScreen = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #333;
    box-shadow: 1px 1px 5px #333;
    border-radius: 4px;
    height: 600px;
    width: 500px;

    h1{
        color: #fff;
        margin-top: -50px;
        margin-bottom: 50px;
    }
`

export const WrapperItens = styled.div`
    display: flex;
    flex-direction: column;

    label{
        color: #ccc;
        font-size: 13px;
    }

    input{
        background: #2e2e2e;
        height: 50px;
        border: 0;
        border-radius: 4px;
        font-size: 18px;
        padding-left: 10px;
        margin: 10px 0;
        width: 300px;
        color: #666;

        &:focus {
            outline: none !important;
            border-color: #eb0613;
            box-shadow: 0px 0px 5px #eb0613;
        }
    }

    select{
        background: #2e2e2e;
        height: 50px;
        border: 0;
        border-radius: 4px;
        font-size: 18px;
        padding-left: 10px;
        margin: 10px 0;
        width: 310px;
        color: #666;

        &:focus {
            outline: none !important;
            border-color: #eb0613;
            box-shadow: 0px 0px 5px #eb0613;
        }
    }

    button{
        background: transparent;
        height: 50px;
        border: 1px solid #666;
        border-radius: 4px;
        font-size: 18px;
        padding-left: 10px;
        margin: 30px 0 10px 0;
        width: 310px;
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

export const Icon = styled.img`
    height: 40px;
    margin: 10px 15px 0px 15px;
    opacity: ${props => props.active ? '1': '0.2'};
`
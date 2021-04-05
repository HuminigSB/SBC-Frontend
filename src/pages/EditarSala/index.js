// Import de bibliotecas
import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form"
import {toast} from 'react-toastify'
import * as Yup from 'yup'

// Import de arquivos auxiliares
import api from '../../services/api'
import EconomicIcon from '../../assets/single-c.png'
import VipIcon from '../../assets/vip-c.png'
import DoubleIcon from '../../assets/double-c.png'
import WheelchairIcon from '../../assets/wheel-c.png'

// Impot Estilos
import { Container, Table, EditScreen, WrapperItens, Icon, LinkTo } from './styles'

// Validação
const schema = Yup.object().shape({
    numero: Yup.string().matches(/^[0-9]*$/, "Apenas números na poltrona")
});

const EditarSala = () => {
    const { register, handleSubmit } = useForm();
    const [dados, setDados] = useState()
    const [load, setLoad] = useState(true)

    const id = +window.location.href.split("http://localhost:3000/editarSala/").pop()
    const columns = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]

    useEffect(() => {
        async function load(){
            const { data } = await api.get(`/poltrona/${id}`)
    
            let resultado = [[]];
            let grupo = 0;
            for(let indice = 0; indice < 100; indice++){
                if (resultado[grupo] === undefined) {
                    resultado[grupo] = [];
                }

                resultado[grupo].push(data[indice])

                if ((indice + 1) % 10 === 0) {
                    grupo = grupo + 1;
                }
            }

            setDados(resultado)
            setLoad(false)
        }
        load()
    },[id]);

    const onSubmit = async (values) => {
        schema.validate(values)
        .catch(function(error){
            toast.error(error.message)
        })
            
        switch (values.tipo) {
            case "1":
                api.put(`/poltrona/${values.numero}`, {
                    type: "economic", 
                    value: "7.00",
                    active: values.ativa === "1" ? true : false
                }).then(function (response){
                    window.location.reload()
                    toast.success(response.data.success)
                }).catch(function(error){
                    toast.error(error.response.data.error)
                }) 
                break;
            case "2":
                api.put(`/poltrona/${values.numero}`, {
                    type: "vip", 
                    value: "15.00",
                    active: values.ativa === "1" ? true : false
                }).then(function (response){
                    window.location.reload()
                    toast.success(response.data.success)
                }).catch(function(error){
                    toast.error(error.response.data.error)
                }) 
                break;
            case "3":
                api.put(`/poltrona/${values.numero}`, {
                    type: "doble", 
                    value: "20.00",
                    active: values.ativa === "1" ? true : false
                }).then(function (response){
                    window.location.reload()
                    toast.success(response.data.success)
                }).catch(function(error){
                    toast.error(error.response.data.error)
                })      
                break;
            case "4":
                api.put(`/poltrona/${values.numero}`, {
                    type: "wheelchair", 
                    value: "5.00",
                    active: values.ativa === "1" ? true : false
                }).then(function (response){
                    window.location.reload()
                    toast.success(response.data.success)
                }).catch(function(error){
                    toast.error(error.response.data.error)
                }) 
                break;
            default:
                break;
        }
    }

    return (
        <Container>
            {!load && (
                <Table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>1</th>
                            <th>2</th>
                            <th>3</th>
                            <th>4</th>
                            <th>5</th>
                            <th>6</th>
                            <th>7</th>
                            <th>8</th>
                            <th>9</th>
                            <th>10</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dados.map((linhas, count) => (
                            <tr key={count}>
                                <td>
                                    <strong>{columns[count]}</strong>
                                </td>
                                {linhas.map(poltrona => (
                                    <td key={poltrona.id}>
                                        {poltrona.type === 'economic' && (
                                             <>
                                                <Icon active={poltrona.active} src={EconomicIcon} alt="Economica"/>
                                                <label>{poltrona.id}</label>
                                             </>
                                        )}
                                        {poltrona.type === 'vip' && (
                                            <>
                                                <Icon active={poltrona.active} src={VipIcon} alt="Vip"/>
                                                <label>{poltrona.id}</label>
                                            </>
                                        )}
                                        {poltrona.type === 'doble' && (
                                            <>
                                                <Icon active={poltrona.active} src={DoubleIcon} alt="Double"/>
                                                <label>{poltrona.id}</label>
                                            </>
                                        )}
                                        {poltrona.type === 'wheelchair' && (
                                            <>
                                                <Icon active={poltrona.active} src={WheelchairIcon} alt="WheelChair"/>
                                                <label>{poltrona.id}</label>
                                            </>
                                        )}
                                    </td>
                                ))} 
                            </tr>  
                        ))}
                    </tbody>
                </Table>
            )}

            {!load && (
                <EditScreen onSubmit={handleSubmit(onSubmit)}>
                    <h1>Editar poltrona</h1>

                    <WrapperItens>
                        <label htmlFor="numero">Número da poltrona</label>
                        <input type="text" name="numero" placeholder="Ex: 100" ref={register}/>
                    </WrapperItens>

                    <WrapperItens>
                        <label htmlFor="ativa">Alterar estado</label>
                        <select name="ativa" ref={register}>
                            <option value="1">Poltrona ativa</option>
                            <option value="2">Poltrona desativada</option>
                        </select>
                    </WrapperItens>

                    <WrapperItens>
                        <label htmlFor="tipo">Tipo</label>
                        <select name="tipo" ref={register}>
                            <option value="1">Econômica (R$ 7,00)</option>
                            <option value="2">Vip (R$ 15,00)</option>
                            <option value="3">Dupla (R$ 20,00)</option>
                            <option value="4">PCD (R$ 5,00)</option>
                        </select>

                        <button type="submit">
                            Alterar poltrona
                        </button>

                        <LinkTo to="/helper-sala">preciso de ajuda</LinkTo>
                    </WrapperItens>
                </EditScreen>    
            )}
        </Container>
    )
}

export default EditarSala
// Import de bibliotecas
import React, { useEffect, useState } from 'react'

// Impot Estilos
import { Container, Table, Icon, WrapperValues } from './styles'
import EconomicIcon from '../../assets/single-c.png'
import VipIcon from '../../assets/vip-c.png'
import DoubleIcon from '../../assets/double-c.png'
import WheelchairIcon from '../../assets/wheel-c.png'

// Import de arquivos auxiliares
import api from '../../services/api'

const Reserva = () => {
    const [dados, setDados] = useState()
    const [load, setLoad] = useState(true)

    const id = +window.location.href.split("http://localhost:3000/reservar/").pop()
    const columns = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]

    useEffect(() => {
        async function load(){
            const id_sala = await api.get(`/bilhete/${id}`)
            const { data } = await api.get(`/poltrona/${id_sala.data[0].id_sala}`)
    
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
    }, [id])

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
            
            <WrapperValues>
                <input type="text" placeholder="Digite a coluna" readOnly/>
                <input type="text" placeholder="Digite a fileira" readOnly/>
                <button>Reservar</button>
            </WrapperValues>
        </Container>
    )
}

export default Reserva
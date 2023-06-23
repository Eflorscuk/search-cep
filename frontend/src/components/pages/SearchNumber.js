import React, { useState } from "react"
import styles from "./SearchNumber.module.css"
import axios from "axios"
import { TailSpin } from "react-loader-spinner";

const SearchNumber = () => {
    const [cep, setCep] = useState('')
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = event => {
        event.preventDefault()
        setIsLoading(true)
        setError('')

        axios
            .get(`http://localhost:8084/searchCEPnumber/${cep}`)
            .then((response) => {
                setData(response.data)
                console.log(response)
                setIsLoading(false)
            })
            .catch((error) => {
                setError('Ocorreu um erro ao obter os dados do CEP.');
                setIsLoading(false);
                console.error(error);
        });
    }

    const handleInputChange = event => {
        const enteredValue = event.target.value;

        if (enteredValue.length <= 8) {
            setCep(enteredValue);
        }
    }

    return (
        <div className={`${styles.formCard} ${data || error ? styles.expanded : ""}`}>
            <h1>Consulte o CEP:</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Digite o CEP:
                    <input 
                        type="number"
                        value={cep}
                        onChange={handleInputChange}
                        placeholder="00000000"
                        className={styles.meuInput}
                    />
                </label>
                <button type="submit">Buscar</button>
            </form>

            {isLoading ? (
                <div className={styles.spinner}>
                    <TailSpin color="#00BFFF" height={50} width={50} />
                </div>
                ) : error ? (
                    <p>{error}</p>
                ) : data ? (
                    <div className={styles.resposta}>
                        <h2>Informações do CEP:</h2>
                        <p>CEP: {data.cep}</p>
                        <p>Logradouro: {data.logradouro}</p>
                        <p>Bairro: {data.bairro}</p>
                        <p>Cidade: {data.cidade}</p>
                        <p>Estado: {data.estado}</p>
                    </div>
                ) : null}
        </div>        
    )
}

export default SearchNumber;

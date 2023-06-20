import React, { useState } from "react"
import styles from "./SearchNumber.module.css"
import axios from "axios"

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
            .get(`https://viacep.com.br/ws/${cep}/json/`)
            //.get(`/search/${cep}`)
            .then((response) => {
            setData(response.data);
            setIsLoading(false);
        })
            .catch((error) => {
                setError('Ocorreu um erro ao obter os dados do CEP.');
                setIsLoading(false);
                console.error(error);
        });
    }

    return (
        <div className={styles.form}>
            <h1>Digite o número do CEP para consulta</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Digite o CEP:
                    <input 
                        type="text"
                        value={cep}
                        onChange={event => setCep(event.target.value)}
                    />
                </label>
                <button type="submit">Buscar</button>
            </form>

            {isLoading ? (
                <p>Carregando...</p>
                ) : error ? (
                    <p>{error}</p>
                ) : data ? (
                    <div>
                        <h2>Informações do CEP:</h2>
                        <p>CEP: {data.cep}</p>
                        <p>Logradouro: {data.logradouro}</p>
                        <p>Bairro: {data.bairro}</p>
                        <p>Cidade: {data.localidade}</p>
                        <p>Estado: {data.uf}</p>
                    </div>
                ) : null}
        </div>        
    )
}

export default SearchNumber
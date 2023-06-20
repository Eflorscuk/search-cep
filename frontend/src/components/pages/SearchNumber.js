import styles from "./SearchNumber.module.css"

const SearchNumber = () => {
    return (
        <form action="#" className={styles.form}>
            <h1>Digite o número do CEP para consulta</h1>
            <input type="text" maxlength="8" size="8" name="cep"></input>
        </form>        
    )
}

export default SearchNumber
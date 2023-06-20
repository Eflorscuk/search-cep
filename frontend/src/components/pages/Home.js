import styles from "./Home.module.css"

import LinkButton from "../layout/LinkButton"

const Home = _ => {
    return (
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <b>Search CEP</b></h1>
            <LinkButton to="/seachcepnumber" text="Encontre seu CEP pelo número"/>
        </section>
    )
}

export default Home
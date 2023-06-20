//import {Link} from "react-router-dom"

import Container from "./Container"

import styles from "./Navbar.module.css"

const Navbar = _ => {
    return (
        <nav className={styles.navbar}>
            <Container>
                    <h2>Search CEP</h2>
            </Container>
        </nav>
    )
}

export default Navbar
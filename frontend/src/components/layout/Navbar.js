import Container from "./Container"

import styles from "./Navbar.module.css"

const Navbar = _ => {
    return (
        <nav className={styles.navbar}>
            <Container>
                <>
                    Navbar
                </>
            </Container>
        </nav>
    )
}

export default Navbar
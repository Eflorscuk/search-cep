import styles from "./Container.module.css"

const Container = props => (
    <div className={`${styles.container} ${styles[props.customClass]}`}>
        {props.children}
    </div>
)

export default Container
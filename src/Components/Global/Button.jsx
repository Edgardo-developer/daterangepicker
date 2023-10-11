import styles from './global.module.css'
const Button = (props) => {
    const text = props.text;
    return (
        <div className={(text === 'Search' ? styles.buttonSearchWrapper : '')}>
            <button className={styles.button}>
                {text}</button>
        </div>
    )
}
export default Button
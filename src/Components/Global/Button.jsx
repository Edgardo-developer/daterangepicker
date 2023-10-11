import styles from './global.module.css'
const Button = (props) => {
    const text = props.text;
    return (
        <div>
            <button className={styles.button}>{text}</button>
        </div>
    )
}
export default Button
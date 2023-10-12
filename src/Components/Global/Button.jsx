import styles from './global.module.css'
import FormStyle from '../Form/Form.module.css'
const Button = (props) => {
    const text = props.text;
    return (
        <div className={(text === 'Search' ? (styles.buttonSearchWrapper + " " + FormStyle.formDownItem) : '') +
        " " + (text !== 'Search' && styles.buttonWrapper)}>
            <button className={styles.button}>
                {text}</button>
        </div>
    )
}
export default Button
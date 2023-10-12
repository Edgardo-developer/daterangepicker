import FormUpComponent from "./Components/FormUpComponent";
import FormDownComponent from "./Components/FormDownComponent";
import styles from "./Form.module.css"
const Form = () => {
    return(
        <div className={styles.formWrapper}>
            <FormUpComponent />
            <div className={styles.form}>
                <FormDownComponent />
            </div>
        </div>
    )
}
export default Form;
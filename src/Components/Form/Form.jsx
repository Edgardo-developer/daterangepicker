import FormUpComponent from "./Components/FormUpComponent";
import FormDownComponent from "./Components/FormDownComponent";
import FormCheckBox from "./Components/FormCheckBox";
import styles from "./Form.module.css"
import {useEffect} from "react";
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
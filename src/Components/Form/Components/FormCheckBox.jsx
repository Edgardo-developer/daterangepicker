import styles from "../Form.module.css";

const FormCheckBox = () => {
    return (
        <div className={styles.checkboxWrapper}>
            <label htmlFor="leisure" className={styles.checkbox_label}>
                <input type="radio" name="adventure_type" id='leisure' value='Leisure' />
                Leisure
            </label>
            <label htmlFor="bussiness" className={styles.checkbox_label}>
                <input type="radio" name="adventure_type" id='bussiness' value='Bussiness' />
                Bussiness
            </label>
        </div>
    )
}
export default FormCheckBox;
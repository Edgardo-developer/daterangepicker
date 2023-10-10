import styles from '../Form.module.css'
const FormUpComponent = () => {
    return (
        <div className={styles.formButtons}>
            <div className={styles.mainButton}>
                Hotels
            </div>
            <a href={''} className={styles.extraButton}>
                For business trips <svg width="15"
                                        height="14"
                                        viewBox="0 0 15 14"
                                        className="Tabs-module__icon--3qbIc"
                                        fill="none"><path d="M6 4H3C1.89543 4 1 4.89543 1 6V11C1 12.1046 1.89543 13 3 13H9C10.1046 13 11 12.1046 11 11V8.5"
                                                          stroke="currentColor"
                                                          strokeWidth="2"></path><path d="M8 7L13.5 1.5"
                                                                                        stroke="currentColor"
                                                                                        strokeWidth="2"></path><path d="M9 1H14V6"
                                                                                                                      stroke="currentColor"
                                                                                                                      strokeWidth="2"></path></svg>
            </a>
        </div>
    )
}
export default FormUpComponent;
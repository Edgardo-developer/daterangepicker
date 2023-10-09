import styles from "../Form.module.css";
import DateRangePickerWrapper from "../../DateRangePicker/DateRangePickerWrapper";
import SearchComponent from "./SearchComponent";

const FormDownComponent = () => {
    return (
        <div className={styles.form}>
            <SearchComponent />
            <DateRangePickerWrapper />
        </div>
    )
}
export default FormDownComponent;
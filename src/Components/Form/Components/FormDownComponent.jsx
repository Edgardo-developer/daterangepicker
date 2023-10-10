import styles from "../Form.module.css";
import DateRangePickerWrapper from "../../DateRangePicker/DateRangePickerWrapper";
import SearchComponent from "./Inputs/SearchComponent";
import RoomsComponent from "./Inputs/RoomsComponent";

const FormDownComponent = () => {
    return (
        <div className={styles.form}>
            <SearchComponent />
            <DateRangePickerWrapper />
            <RoomsComponent />
        </div>
    )
}
export default FormDownComponent;
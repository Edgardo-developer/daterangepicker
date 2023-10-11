import styles from "../Form.module.css";
import DateRangePickerWrapper from "../../DateRangePicker/DateRangePickerWrapper";
import SearchComponent from "./Inputs/SearchComponent";
import RoomsComponent from "./Inputs/RoomsComponent";
import {useState} from "react";

const FormDownComponent = () => {
    const [popupType, setPopupType] = useState();
    const togglePopup = (text) => {
        setPopupType(text)
    }
    return (
        <div className={styles.form}>
            <SearchComponent popup={popupType} changePopup={togglePopup} />
            <DateRangePickerWrapper popup={popupType} changePopup={togglePopup} />
            <RoomsComponent popup={popupType} changePopup={togglePopup} />
        </div>
    )
}
export default FormDownComponent;
import styles from "../Form.module.css";
import DateRangePickerWrapper from "../../DateRangePicker/DateRangePickerWrapper";
import SearchComponent from "./Inputs/SearchComponent";
import RoomsComponent from "./Inputs/RoomsComponent";
import {useState} from "react";
import Button from "../../Global/Button";

const FormDownComponent = () => {
    const [popupType, setPopupType] = useState();
    const togglePopup = (text) => {
        setPopupType(text)
    }
    return (
        <div className={styles.formDown}>
            <SearchComponent popup={popupType} changePopup={togglePopup} />
            <DateRangePickerWrapper popup={popupType} changePopup={togglePopup} />
            <RoomsComponent popup={popupType} changePopup={togglePopup} />
            <Button text="Search" />
        </div>
    )
}
export default FormDownComponent;
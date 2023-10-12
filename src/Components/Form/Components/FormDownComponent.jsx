import styles from "../Form.module.css";
import DateRangePickerWrapper from "../../DateRangePicker/DateRangePickerWrapper";
import SearchComponent from "./Inputs/SearchComponent";
import RoomsComponent from "./Inputs/RoomsComponent";
import {useEffect, useState} from "react";
import Button from "../../Global/Button";
import FormStyle from "../Form.module.css";
import DateRangePickerStyle from "../../DateRangePicker/drp.module.css";

const FormDownComponent = () => {
    const [popupType, setPopupType] = useState();
    const togglePopup = (text) => {
        setPopupType(text)
    }
    useEffect(() => {
        document.addEventListener("mousedown", (e) => {
            if(!e.target.closest(`.${FormStyle.input_module}`) && !e.target.closest(`.${DateRangePickerStyle.visualInputss}`)){
                setPopupType('');
            }
        })
    })
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
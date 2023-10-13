import styles from "../Form.module.css";
import DateRangePickerWrapper from "../../DateRangePicker/DateRangePickerWrapper";
import SearchComponent from "./Inputs/SearchComponent";
import RoomsComponent from "./Inputs/RoomsComponent";
import {useEffect, useState} from "react";
import Button from "../../Global/Button";
import FormStyle from "../Form.module.css";
import DateRangePickerStyle from "../../DateRangePicker/drp.module.css";
import FormCheckBox from "./FormCheckBox";
const FormDownComponent = () => {
    const [popupType, setPopupType] = useState('');
    const [isMobile, setIsMobile] = useState(false);
    const togglePopup = (text) => {
        setPopupType(popupType === text ? '' : text)
    }
    useEffect(() => {
        if (window.innerWidth < 680){
            setIsMobile(true);
        }
        document.addEventListener("mousedown", (e) => {
            if(!e.target.closest(`.${FormStyle.input_module}`)
                && !e.target.closest(`.${DateRangePickerStyle.visualInputss}`)
                && !e.target.closest(`.${FormStyle.popup}`)){
                setPopupType('');
            }
        })
    })
    return (
        <div className={styles.formDown}>
            <SearchComponent popup={popupType} changePopup={togglePopup} isMobile={isMobile}/>
            <DateRangePickerWrapper popup={popupType} setPopupType={setPopupType} changePopup={togglePopup} isMobile={isMobile}/>
            <RoomsComponent popup={popupType} changePopup={togglePopup} isMobile={isMobile}/>
            <Button text="Search" />
            <FormCheckBox />
        </div>
    )
}
export default FormDownComponent;
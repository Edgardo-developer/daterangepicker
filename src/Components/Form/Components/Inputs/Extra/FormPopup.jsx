import FormStyles from "../../../Form.module.css";
import {useEffect} from "react";

const FormPopup = (props) => {
    const children = props.children;
    const popupTypeCheck = props.popupTypeCheck;
    const isMobile = props.isMobile;
    const extraClasses = props.extraClasses ? props.extraClasses : "";
    return (
        <div className={FormStyles.popup + ' ' +
            ((isMobile && popupTypeCheck) && FormStyles.popupMobile) + " " +
            ( popupTypeCheck ? FormStyles.popup_active : '') + " " + extraClasses}
        >
            {children}
        </div>
    )
}
export default FormPopup
import classes from "./drp.module.css";
import FormStyles from "../Form/Form.module.css";
import ButtonsComponent from "./Components/ButtonsComponent";
import DateRangePicker from "./DateRangePicker";
import {useEffect, useState} from "react";
import FormPopup from "../Form/Components/Inputs/Extra/FormPopup";
import GoBackMobile from "../Form/Components/Inputs/Extra/GoBackMobile";
import styles from "../Form/Components/Inputs/Rooms/rooms.module.css";

const DateRangePickerWrapper = (props) => {
    const popupType = props.popup;
    const changePopup = props.changePopup;
    const isMobile = props.isMobile;
    const setPopupType = props.setPopupType;
    const [date, setDate] = useState({
        start: '2023/10/15',
        end: '2023/10/26',
    });
    const [dateShow, setDateShow] = useState({
        start: 'Oct 8 2023',
        end: 'Oct 18 2023',
    })
    const [position, setPosition] = useState('start');
    const [click, setClick] = useState({
        clickType: '',
        clickCount: 0,
    })
    const [show, setShow] = useState(false)
    function setNewDate(NewDate){
        setDate(NewDate)
    }
    function updatePosition(newPosition){
        setPosition(newPosition)
    }
    function clickBook(checkType){
        checkClicks(checkType)
        changePopup(checkType)
        return false
    }
    function checkClicks(clickType){
        let clickCount = click.clickCount + 1;
        if (click.clickType === clickType && clickCount % 2 === 0 || clickType !== click.clickType){
            let newClick = {
                clickType: clickType,
                clickCount: 0,
            }
            setClick(newClick);
            setShow(true);
        }else{
            if (clickType === click.clickType){
                setClick({...click, clickCount: clickCount});
            }else{
                setClick({clickType: clickType, clickCount: 0});
            }
            setShow(false)
        }
        changePopup(clickType)
    }
    useEffect(() => {
        let newDate = date;
        let startDate =  new Date(newDate.start);
        let endDate =  new Date(newDate.end);
        setDateShow({
            start: startDate.toLocaleString('default', { month: 'short' }) + " " +
                startDate.getDate() + ' ' + startDate.getFullYear(),
            end: endDate.toLocaleString('default', { month: 'short' }) + ' ' +
                endDate.getDate() + " " + endDate.getFullYear(),
        })
    }, [date])
    useEffect(() => {
        setPosition(popupType === 'check_out' ? 'end' : "start");
    }, [popupType])
    return(
        <div className={((isMobile && (popupType === 'check_in' || popupType === 'check_out')) ? FormStyles.fieldMobile : " ") + " " + FormStyles.formDownItem + " " + classes.daterangepicker_wrapper}>
            <div className={(isMobile && FormStyles.popupMobileHeading)}>
                {(isMobile && (popupType === 'check_in' || popupType === 'check_out')) && <GoBackMobile onClick={(e) => {changePopup(e)}} />}
                <ButtonsComponent popupType={popupType} changePopup={changePopup} clickBook={clickBook} dateShow={dateShow}/>
            </div>
            <FormPopup popupTypeCheck={popupType === 'check_in' || popupType === 'check_out'}>
                <DateRangePicker
                    popupType={popupType}
                    show={show}
                    data={{date, position}}
                    updateDate={setNewDate}
                    updatePosition={updatePosition}
                    isMobile={isMobile}
                    setPopupType={setPopupType}
                    />
            </FormPopup>
        </div>
    )
}
export default DateRangePickerWrapper;
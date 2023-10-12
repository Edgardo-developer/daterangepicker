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
    const [date, setDate] = useState({
        start: '2023/9/8',
        end: '2023/9/18',
    });
    const [dateShow, setDateShow] = useState({
        start: 'Oct 8 2023',
        end: 'Oct 18 2023',
    })
    const [position, setPosition] = useState('start');
    const [checkIn, setCheckIn] = useState(true);
    const [visibleCheck, setVisibleCheck] = useState('');
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
        updateCheck(checkType)
        checkClicks(checkType)
        updateCheck(checkType === 'check_in')
        setVisibleCheck(checkType)
        return false
    }
    function updateCheck(checkStatus){
        if (checkStatus){
            setPosition('start');
        }else{
            setPosition('end');
        }
        setCheckIn(checkStatus);
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
        setVisibleCheck(clickType)
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
    return(
        <div className={((isMobile && (popupType === 'check_in' || popupType === 'check_out')) ? FormStyles.fieldMobile : " ") + " " + FormStyles.formDownItem + " " + classes.daterangepicker_wrapper}>
            <div className={(isMobile && FormStyles.popupMobileHeading)}>
                {(isMobile && popupType === 'search') && <GoBackMobile onClick={(e) => {changePopup(e)}} />}
                <ButtonsComponent popupType={popupType} changePopup={changePopup} visibleCheck={visibleCheck} clickBook={clickBook} dateShow={dateShow}/>
            </div>
            <FormPopup popupTypeCheck={popupType === 'check_in' || popupType === 'check_out'}>
                <DateRangePicker
                    popupType={popupType}
                    show={show}
                    data={{date, position, checkIn}}
                    updateDate={setNewDate}
                    updatePosition={updatePosition}
                    isMobile={isMobile}
                    updateCheck={updateCheck} />
            </FormPopup>
        </div>
    )
}
export default DateRangePickerWrapper;
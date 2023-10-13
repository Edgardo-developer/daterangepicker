import logicFile from "./logic";
import {useEffect, useState} from "react";
import WeekDaysComponent from "./Components/WeekDaysComponent";
import CalendarMonthComponent from "./Components/CalendarMonthComponent";
import MonthListComponent from "./Components/MonthListComponent";
import classes from "./drp.module.css";

const DateRangePicker = (props) => {
    const popupType = props.popupType;
    const setPopupType = props.setPopupType;
    const date = props.data.date;
    const position = props.data.position;
    const updatePosition = props.updatePosition;
    const updateDate = props.updateDate;
    const [scrollTop, setScrollTop] = useState(0);
    const logic = logicFile();
    const [dateElement, setDateElement] = useState({
        start: '',
        end: '',
    });
    const changeAccessToPreviousDays = () => {
        if (popupType === 'check_out'){
            let startElement = document.querySelector('.start_date');
            if (startElement){
                let startPass = 'before';
                let afterElements = 0;
                let dateNumbers = document.querySelectorAll('.DateNumber');
                for (let dateNumber of dateNumbers){
                    if (dateNumber.classList.contains('active')){
                        startPass = 'after';
                        continue;}
                    if (startPass === 'before' || (startPass === 'after' && afterElements > 28)){
                        dateNumber.setAttribute('data-disabled', true);
                        dateNumber.classList.add('disabled_previous');
                    }
                    if (startPass === 'after'){
                        afterElements++;
                    }
                }
            }
        }else if(popupType === 'check_in'){
            let disabledElements = document.querySelectorAll('.disabled_previous');
            for (let disabledElement of disabledElements){
                disabledElement.classList.remove('disabled_previous')
                disabledElement.setAttribute('data-disabled', false)
            }
        }
    }
    const DayClick = (e) => {
        e.preventDefault();
        let element = e.target;
        let isActive = element.getAttribute('data-disabled') === "true";
        if(!isActive && !element.classList.contains('active')){
            if (element !== dateElement.start &&
                element !== dateElement.end){
                let newDate = element.getAttribute('data-year') + "/" + element.getAttribute('data-month') + '/' + element.innerText;
                if (position === 'start' || position === 'end'){
                    let elementPrev = document.querySelector(position === 'start' ? '.active.start_date' : '.active.end_date');
                    if (elementPrev){
                        elementPrev.classList.remove('active', [position]+'_date');
                    }
                    element.classList.remove('includes')
                    updateDate({...date, [position]: newDate});
                    setDateElement({...dateElement, [position]: element})
                    element.classList.add([position]+'_date', 'active');
                    if (position === 'start'){
                        updatePosition('end');
                        setPopupType('check_out');
                    }
                }
            }
        }
    }
    const CheckInterval = () => {
        let element = dateElement;
        if (element.end && element.start){
            let dateNumbers = document.querySelectorAll('.DateNumber');
            let alreadyDateNumbers = document.querySelectorAll('.includes');
            for (let alreadyDateNumber of alreadyDateNumbers){
                alreadyDateNumber.classList.remove('includes');
            }
            let start = false;
            for (let dateNumber of dateNumbers){
                if (dateNumber === element.end){
                    start = false;
                    break;
                }
                if (start){
                    dateNumber.classList.add('includes')
                    dateNumber.classList.remove('active')
                }else{
                    dateNumber.classList.remove('includes')
                }
                if (dateNumber.classList.contains('active')){ start = true;  }
            }
        }
    }
    const syncScroll = (e) => {
        let rigthElement = e.target;

        // The whole height of the scrollable block
        let RScrollHeight = rigthElement['scrollHeight'];
        // The distance of the scrolling
        let RScrollTop = rigthElement['scrollTop'];
        // The block height
        let RScrollOffset = rigthElement['offsetHeight'];
        // The percentage of scrolling
        let RPercentage = RScrollTop / ((RScrollHeight - RScrollOffset) / 100);


        let overflow = document.getElementsByClassName('popupCalendar_underLay')[0];
        let monthsList = document.getElementsByClassName('popupCalendar_months')[0];


        let MScrollHeight = monthsList['scrollHeight'];
        let MScrollOffset = monthsList['offsetHeight'];
        let styleTop = (((MScrollHeight - 60) / 100) * RPercentage);
        overflow.style.top = styleTop + 'px';
        if (scrollTop < styleTop && styleTop + 60 > MScrollOffset){
            // let coordinatesParent = monthsList.getBoundingClientRect();
            let coordinatesChild = overflow.getBoundingClientRect();
            monthsList['scrollTop'] += (coordinatesChild.top) - MScrollOffset;
            setScrollTop(styleTop)
        }
    }
    useEffect(() => {
        CheckInterval();
    }, [dateElement]);
    useEffect(() => {
        changeAccessToPreviousDays()
    }, [popupType])
    return (
        <div id='popupCalendar' className={(popupType === 'check_in' || popupType === 'check_out') ? classes.show : classes.hide} >
        <MonthListComponent months={logic.rightSide} />
          <div className="popupCalendar_main" onScroll={e => {
              syncScroll(e);
          }}>
            <WeekDaysComponent />
            <div className="popupCalendarMonths">
              {logic.rightSide.map((monthItem, key) => <CalendarMonthComponent
                  monthItem={monthItem}
                   key={key}
                   chooseToggle={DayClick} />)
              }
            </div>
            </div>
          </div>
    )
}

export default DateRangePicker;
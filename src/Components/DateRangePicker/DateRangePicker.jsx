import logicFile from "./logic";
import {useEffect, useState} from "react";

const DateRangePicker = (props) => {
    const date = props.data.date;
    const checkIn = props.data.checkIn;
    const position = props.data.position;
    const updatePosition = props.updatePosition;
    const updateDate = props.updateDate;
    const updateCheck = props.updateCheck;
    const dayOfWeek = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
    const logic = logicFile();
    const [dateElement, setDateElement] = useState({
        start: '',
        end: '',
    });
    const disabled = (checkIn) => {
        if (!checkIn){
            let startElement = document.getElementsByClassName('start_date')[0];
            if (startElement){
                let previousElement = startElement.previousSibling;
                while(previousElement && previousElement.getAttribute('data-disabled') === 'false'){
                    previousElement.setAttribute('data-disabled', true);
                    previousElement.classList.add('disabled_previous');
                    previousElement = previousElement.previousSibling;
                }
            }
        }else{
            let disabledElements = document.querySelectorAll('.disabled_previous');
            for (let disabledElement of disabledElements){
                disabledElement.classList.remove('disabled_previous')
                disabledElement.setAttribute('data-disabled', false)
            }
        }
    }
    const chooseToggle = (e) => {
        e.preventDefault();
        let element = e.target;
        let isActive = element.getAttribute('data-disabled') === "true";
        if(!isActive && !element.classList.contains('aciteve')){
            if (element !== dateElement.start &&
                element !== dateElement.end){
                let newDate = element.innerText+'/'+element.getAttribute('data-month')+'/'+element.getAttribute('data-year')
                if (position === 'start' || position === 'end'){
                    let elementPrev = document.querySelector(position === 'start' ? '.active.start_date' : '.active.end_date');
                    if (elementPrev){
                        console.log(elementPrev.classList.remove('active'));
                    }
                    element.classList.remove('includes')
                    updateDate({...date, [position]: newDate});
                    setDateElement({...dateElement, [position]: element})
                    element.classList.add('active');
                    element.classList.add([position]+'_date');
                    if (position === 'start'){
                        updatePosition('end');
                        updateCheck(false);
                    }
                }
            }
            if (checkIn && (dateElement.start || position === 'start')){
                disabled(checkIn);
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
    useEffect(() => {
        CheckInterval();
    }, [dateElement]);

    useEffect(() => {
        disabled(checkIn)
    }, [checkIn])
    return (
        <div id='popupCalendar'>
        <div className="popupCalendar_months">
            {logic.rightSide.map((monthItem, key) => <a href={"#"+monthItem.month.name+'_'+monthItem.year}>{monthItem.month.name}</a> )}
        </div>
          <div className="popupCalendar_main">
            <div className="popupCalendarDays">
              {dayOfWeek.map((day, key) =>  <div key={key}>{day}</div>)}
            </div>
            <div className="popupCalendarMonths">
              {logic.rightSide.map((monthItem, key) =>
                      <div key={key} className="popupCalendarMonth" id={monthItem.month.name+'_'+monthItem.year}>
                <h3 className="monthName">{monthItem.month.name}</h3>
                <div className="monthDays">
                  {monthItem.days.map((day, keyDay) =>
                      <span key={keyDay} onClick={ e => chooseToggle(e)} data-disabled={day.disabled}
                            data-month={monthItem.month.id} data-year={monthItem.year} className="DateNumber"
                      >
                    {day.number}</span> )}
                </div>
              </div>
              )}
            </div>
            </div>
          </div>
    )
}

export default DateRangePicker;
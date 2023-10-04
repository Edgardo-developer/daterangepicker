import widget from "./logic";
import './App.css';
import {useState} from "react";

function App() {
  const dayOfWeek = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  const defaultDate = '00/00/00';
  const {startDate, setStartDate} = useState(defaultDate);
  const {endDate, setEndDate} = useState(defaultDate);

  const showCalendar = (m = 0, d = 0, y = 0) => {
    let calendar = widget.rightSide;
  }
  const chooseToggle = (e, isActive) => {
    e.preventDefault();
    if(!isActive){
      let element = e.target;
      if (startDate === defaultDate){
        setStartDate(element.innerText+'/'+element.getAttribute('data-month')+'/'.element.getAttribute('data-year'));
        e.target.classList.toggle('active');
      }else if(endDate === defaultDate){
        setEndDate(element.innerText+'/'+element.getAttribute('data-month')+'/'.element.getAttribute('data-year'));
        e.target.classList.toggle('active');
      }
    }
  }
  const widgetLogic = widget();

  return (
    <div className="App">
      <header className="App-header">
        <div className="originInputs">
          <input type="date" id='pickInOriginal' value={startDate} className='originInput' />
          <input type="date" id='pickOutOriginal' value={endDate} className='originInput' />
        </div>
        <div className="visualInputs">
          <div id="pickInVisual" className="visualInput">
            <input type="text" placeholder="MM/DD/YYYY" value={startDate} inputMode="text" onClick={widget} aria-placeholder="MM/DD/YYYY"/>
          </div>
          <div id="pickOutVisual" className="visualInput">
            <input type="text" placeholder="MM/DD/YYYY" value={endDate} inputMode="text" aria-placeholder="MM/DD/YYYY"/>
          </div>
        </div>
        <div id='popupCalendar'>
          {/*<div className="populCalendar_list"></div>*/}
          <div className="popupCalendar_main">
            <div className="popupCalendarDays">
              {dayOfWeek.map((day, key) =>  <div key={key}>{day}</div>)}
            </div>
            <div className="popupCalendarMonths">
              {widgetLogic.rightSide.map((monthItem, key) =>
                      <div key={key} className="popupCalendarMonth">
                <h3>{monthItem.month.name}</h3>
                <div className="monthDays">
                  {monthItem.days.map((day, keyDay) =>
                      <span key={keyDay} onClick={ e => chooseToggle(e, day.disabled)} data-disabled={day.disabled}
                      data-month={monthItem.month.id} data-year={monthItem.year}
                      >
                    {day.number}</span> )}
                </div>
              </div>
              )}
            </div>
            </div>
          </div>
      </header>
    </div>
  );
}

export default App;

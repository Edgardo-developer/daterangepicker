import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const {inInput, setInInput} = useState('MM/DD/YYYY');
  const {OutInput, setOutInput} = useState('MM/DD/YYYY');

  const showCalendar = (m = 0, d = 0, y = 0) => {

  }

  const monthList = () => {
    let currentDate = new Date();
    let nextMonth = 15;
    let rightSide = calendar(nextMonth, currentDate);
  }

  const calendar = (nextMonth, currentDate) => {
    let curMonthInd = currentDate.getMonth();
    let curYearInd = currentDate.getFullYear();
    let curDayInd = currentDate.getDate();
    let dateObject = [];
      for(let i = 0; i <= nextMonth; i++ ){
        let month = curMonthInd + i > 12 ? curMonthInd + i - 12 : curMonthInd + i;
        let days  = getListDays(month, curYearInd, i, curDayInd);
        dateObject.push({
          month: month,
          days: days
        });
      }
      return dateObject;
  }

  const getListDays = (monthID, year, inkrement, curDayInd) =>{
    let daysArray = [];
    let daysOfMonth = new Date(year, monthID, 0).getDate();
    for (let day = 1; day < daysOfMonth; day++){
      let dayOfWeek = new Date(year, monthID, day).getDate();
      let dayArray = {
        disabled: false, // is the day disabled
        number: day, // the number of day
        dayOfWeek: dayOfWeek, // the number of day of week
      };
      if (inkrement === 0 && day < curDayInd){
        dayArray.disabled = true;
      }
      daysArray.push(dayArray);
    }
    return daysArray;
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="originInputs">
          <input type="date" id='pickInOriginal' className='originInput' />
          <input type="date" id='pickOutOriginal' className='originInput' />
        </div>
        <div className="visualInputs">
          <div id="pickInVisual" className="visualInput">
            <input type="text" placeholder="MM/DD/YYYY" inputMode="text" onClick={monthList} value="MM/DD/YYYY" readOnly />
          </div>
          <div id="pickOutVisual" className="visualInput">
            <input type="text" placeholder="MM/DD/YYYY" inputMode="text" value="MM/DD/YYYY" readOnly />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

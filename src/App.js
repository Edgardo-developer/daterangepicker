import './App.css';
import DateRangePicker from "./Components/DateRangePicker/DateRangePicker";
import {useState} from "react";

function App() {
  const defaultDate = {
    start: '00/00/00',
    end: '00/00/00',
  };
  const [date, setDate] = useState(defaultDate);
  const [position, setPosition] = useState('start');
  const [checkIn, setCheckIn] = useState(true);
  function setNewDate(NewDate){
    setDate(NewDate)
  }
  function updatePosition(newPosition){
    setPosition(newPosition)
  }
  function updateCheck(checkStatus){
    setCheckIn(checkStatus);
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className="originInputs">
          <input type="date" id='pickInOriginal' value={date.start} className='originInput' />
          <input type="date" id='pickOutOriginal' value={date.end} className='originInput' />
        </div>
        <div className="visualInputs">
          <div id="pickInVisual" className="visualInput">
            <input type="text" placeholder="MM/DD/YYYY" value={date.start} onClick={function(){updateCheck(false)}} inputMode="text" aria-placeholder="MM/DD/YYYY"/>
          </div>
          <div id="pickOutVisual" className="visualInput">
            <input type="text" placeholder="MM/DD/YYYY" value={date.end} onClick={function(){updateCheck(true)}} inputMode="text" aria-placeholder="MM/DD/YYYY"/>
          </div>
        </div>
        <DateRangePicker data={{date, position, checkIn}}
                         updateDate={setNewDate}
                         updatePosition={updatePosition}
                         updateCheck={updateCheck} />
      </header>
    </div>
  );
}

export default App;

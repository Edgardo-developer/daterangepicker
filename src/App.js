import widget from "./logic";
import './App.css';
import {useState} from "react";

function App() {
  const dayOfWeek = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  const {choosedMonths, setChoosedMonths} = [];
  const {inInput, setInInput} = useState('MM/DD/YYYY');
  const {OutInput, setOutInput} = useState('MM/DD/YYYY');

  const showCalendar = (m = 0, d = 0, y = 0) => {

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
            <input type="text" placeholder="MM/DD/YYYY" inputMode="text" onClick={widget} value="MM/DD/YYYY" readOnly />
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

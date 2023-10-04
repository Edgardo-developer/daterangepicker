import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const {inInput, setInInput} = useState('MM/DD/YYYY');
  const {OutInput, setOutInput} = useState('MM/DD/YYYY');
  return (
    <div className="App">
      <header className="App-header">
        <div className="originInputs">
          <input type="date" id='pickInOriginal' className='originInput' />
          <input type="date" id='pickOutOriginal' className='originInput' />
        </div>
        <div className="visualInputs">
          <div id="pickInVisual" className="visualInput">
            <input type="text" placeholder="MM/DD/YYYY" inputMode="text" value="MM/DD/YYYY" />
          </div>
          <div id="pickOutVisual" className="visualInput">
            <input type="text" placeholder="MM/DD/YYYY" inputMode="text" value="MM/DD/YYYY" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

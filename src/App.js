import './App.css';
import DateRangePicker from "./Components/DateRangePicker/DateRangePicker";
import {useState} from "react";
import classes from './Components/DateRangePicker/App.module.css'
function App() {
  const [date, setDate] = useState({
    start: '00/00/00',
    end: '00/00/00',
  });
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
  return (
    <div className="App">
      <header className="App-header">
        <div className={classes.daterangepicker_wrapper}>
          <div className={classes.originInputs}>
          <input type="date" id='pickInOriginal' value={date.start} className='originInput' />
          <input type="date" id='pickOutOriginal' value={date.end} className='originInput' />
        </div>
        <div className={classes.visualInputss}>
          <div className={classes.input_module + ' ' + (visibleCheck === 'check_in' ? classes.input_module_active : '')} onClick={ function (e){
            updateCheck('check_in')
            checkClicks('check_in')
            setVisibleCheck('check_in')
            return false
          } }>
              <div className={classes.input_module_label} onClick={ function (e){
                updateCheck('check_in')
                checkClicks('check_in')
                setVisibleCheck('check_in')
                return false
              } }>Check-in</div>
              <div className={classes.input_module_control} onClick={ function (e){
                updateCheck('check_in')
                checkClicks('check_in')
                setVisibleCheck('check_in')
                return false
              } }>Oct 8 2023</div>
            </div>
            <div className={classes.input_module + ' ' + (visibleCheck === 'check_out' ? classes.input_module_active : '')} onClick={ function (e){
              updateCheck('check_out')
              checkClicks('check_out')
              setVisibleCheck('check_out')
              return false
            } }>
              <div className={classes.input_module_label} onClick={ function (e){
                updateCheck('check_out')
                checkClicks('check_out')
                setVisibleCheck('check_out')
                return false
              } }>Check-out</div>
              <div className={classes.input_module_control} onClick={ function (e){
                updateCheck('check_out')
                checkClicks('check_out')
                setVisibleCheck('check_out')
                return false
              } }>Oct 18 2023</div>
            </div>
        </div>
        <DateRangePicker
            show={show}
            data={{date, position, checkIn}}
            updateDate={setNewDate}
            updatePosition={updatePosition}
            updateCheck={updateCheck} />
        </div>
      </header>
    </div>
  );
}

export default App;

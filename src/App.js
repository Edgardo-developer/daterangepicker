import './App.css';
import DateRangePicker from "./Components/DateRangePicker/DateRangePicker";
import {useEffect, useState} from "react";
import classes from './Components/DateRangePicker/App.module.css'
function App() {
  const [date, setDate] = useState({
    start: '2023/9/8',
    end: '2023/9/18',
  });
  const [dateShow, setDateShow] = useState({
    start: 'Oct 8 2023',
    end: 'Oct 18 2023',
  })
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
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
            updateCheck(true)
            setVisibleCheck('check_in')
            return false
          } }>
              <div className={classes.input_module_label} onClick={ function (e){
                updateCheck('check_in')
                checkClicks('check_in')
                updateCheck(true)
                setVisibleCheck('check_in')
                return false
              } }>Check-in</div>
              <div className={classes.input_module_control} onClick={ function (e){
                updateCheck('check_in')
                checkClicks('check_in')
                setVisibleCheck('check_in')
                updateCheck(true)
                return false
              } }>{dateShow.start}</div>
            </div>
            <div className={classes.input_module + ' ' + (visibleCheck === 'check_out' ? classes.input_module_active : '')} onClick={ function (e){
              updateCheck('check_out')
              checkClicks('check_out')
              setVisibleCheck('check_out')
              updateCheck(false)
              return false
            } }>
              <div className={classes.input_module_label} onClick={ function (e){
                updateCheck('check_out')
                checkClicks('check_out')
                setVisibleCheck('check_out')
                updateCheck(false)
                return false
              } }>Check-out</div>
              <div className={classes.input_module_control} onClick={ function (e){
                updateCheck('check_out')
                checkClicks('check_out')
                setVisibleCheck('check_out')
                updateCheck(false)
                return false
              } }>{dateShow.end}</div>
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

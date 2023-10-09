import classes from "../App.module.css";

const ButtonsComponent = (props) => {
    const visibleCheck = props.visibleCheck;
    const clickBook = props.clickBook;
    const dateShow = props.dateShow;
    return (
        <div className={classes.visualInputss}>
          <div className={classes.input_module + ' ' + (visibleCheck === 'check_in' ? classes.input_module_active : '')}
               onClick={ function (e){
                   clickBook('check_in')
               } }>
              <div className={classes.input_module_label} onClick={ function (e){
                  clickBook('check_in')
              } }>Check-in</div>
              <div className={classes.input_module_control} onClick={ function (e){
                  clickBook('check_in')
              } }>{dateShow.start}</div>
            </div>
            <div className={classes.input_module + ' ' + (visibleCheck === 'check_out' ? classes.input_module_active : '')} onClick={ function (e){
                clickBook('check_out')
            } }>
              <div className={classes.input_module_label} onClick={ function (e){
                  clickBook('check_out')
              } }>Check-out</div>
              <div className={classes.input_module_control} onClick={ function (e){
                  clickBook('check_out')
              } }>{dateShow.end}</div>
            </div>
        </div>
    )
}
export default ButtonsComponent
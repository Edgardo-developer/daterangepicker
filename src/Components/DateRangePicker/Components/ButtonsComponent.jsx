import formStyles from "../../Form/Form.module.css";
import classes from "../drp.module.css";

const ButtonsComponent = (props) => {
    const visibleCheck = props.visibleCheck;
    const clickBook = props.clickBook;
    const dateShow = props.dateShow;
    const popupType = props.popupType;
    const changePopup = props.changePopup;
    const clickChange = (e, text) => {
        e.preventDefault()
        clickBook(text);
        popupType === text ? changePopup('') : changePopup(text)
    }
    return (
        <div className={classes.visualInputss}>
          <div className={formStyles.input_module + ' ' + classes.input_check_in + ' ' + ((visibleCheck === 'check_in' && popupType === 'check_in') ? classes.input_module_active : '')}
               onClick={ function (e){
                   clickChange(e, 'check_in')
               } }>
              <div className={classes.input_module_label} onClick={ function (e){
                  clickChange(e, 'check_in')
              } }>Check-in</div>
              <div className={classes.input_module_control} onClick={ function (e){
                  clickChange(e, 'check_in')
              } }>{dateShow.start}</div>
            </div>
            <div className={formStyles.input_module + ' ' + classes.input_check_out + ' ' + ((visibleCheck === 'check_out' && popupType === 'check_out') ? classes.input_module_active : '')} onClick={ function (e){
                clickChange(e, 'check_out')
            } }>
              <div className={classes.input_module_label} onClick={ function (e){
                  clickChange(e, 'check_out')
              } }>Check-out</div>
              <div className={classes.input_module_control} onClick={ function (e){
                  clickChange(e, 'check_out')
              } }>{dateShow.end}</div>
            </div>
        </div>
    )
}
export default ButtonsComponent
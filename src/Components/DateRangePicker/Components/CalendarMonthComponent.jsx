import CalendarDayComponent from "./CalendarDayComponent";

const CalendarMonthComponent = (props) => {
    const monthItem = props.monthItem;
    const chooseToggle = props.chooseToggle;
    const key = props.keyReact;
    return (
        <div className="popupCalendarMonth" id={monthItem.month.name+'_'+monthItem.year}>
                <h3 className="monthName">{monthItem.month.name}</h3>
                <CalendarDayComponent days={monthItem.days}
                                      monthId={monthItem.month.id}
                                      year={monthItem.year}
                                      chooseToggle={chooseToggle}
                                      offset={monthItem.month.offset}
                                      key={key}/>
        </div>
    )
}
export default CalendarMonthComponent
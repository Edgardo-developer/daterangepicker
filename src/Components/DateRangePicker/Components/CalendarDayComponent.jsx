import {useState} from "react";

const CalendarDayComponent = (props) => {
    const days = props.days;
    const monthId = props.monthId;
    const year = props.year;
    const chooseToggle = props.chooseToggle;
    const fields: JSX.Element[] = [];
    for (let i = 1; i <= props.offset; i++) {
        fields.push(<span key={`offset${i}`}></span>);
    }
    return (
        <div className="monthDays">
            {fields}
            {days.map((day, keyDay) =>
                <span key={keyDay}
                      onClick={ e => chooseToggle(e)} data-disabled={day.disabled}
                      data-month={monthId} data-year={year} className="DateNumber"
                >
                    {day.number}</span> )
            }
        </div>
    );
}
export default CalendarDayComponent;
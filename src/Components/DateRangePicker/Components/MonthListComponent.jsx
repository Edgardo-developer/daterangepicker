import {useState} from "react";

const MonthListComponent = (props) => {
    const [year, setYear] = useState(0);
    const months = props.months;
    return (
        <div className="popupCalendar_months">
            {months.map((monthItem, key) => <a href={"#"+monthItem.month.name+'_'+monthItem.year}>
                {monthItem.month.name}
            </a> )}
        </div>
    )
}
export default MonthListComponent;
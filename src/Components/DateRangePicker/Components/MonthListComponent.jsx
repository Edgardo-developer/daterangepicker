import {useState} from "react";

const MonthListComponent = (props) => {
    const months = props.months;
    function ShowYear(props){
        const monthItem = props.monthItem;
        const monthYear = monthItem.year;
        if (monthItem.startYear){
            return <span className="extra_year">{monthYear}</span>
        }
    }
    return (
        <div className="popupCalendar_months">
            {months.map((monthItem, key) => <a key={key} href={"#"+monthItem.month.name+'_'+monthItem.year}>
                {monthItem.month.name}
                <ShowYear monthItem={monthItem} />
            </a> )}
        </div>
    )
}
export default MonthListComponent;
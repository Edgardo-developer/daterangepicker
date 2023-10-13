import classes from '../drp.module.css'
const MonthListComponent = (props) => {
    const months = props.months;
    const underLay = props.underlayTop;
    const isMobile = props.isMobile;
    function ShowYear(props){
        const monthItem = props.monthItem;
        const monthYear = monthItem.year;
        if (monthItem.startYear){
            return <span className="extra_year">{monthYear}</span>
        }
    }
    function monthClickFunc(e, monthName, monthYear){
        e.preventDefault();
        document.querySelector('#'+monthName+'_'+monthYear).scrollIntoView({
            behavior:'smooth',
            alignToTop: true,
            block:'start'
        });
    }
    if (!isMobile){
        return (
            <div className='popupCalendar_months' onScroll={e => {
                let element = e.target;
                let behindStatus = 'startFalse';
                let continueStatus = 'continueFalse';
                if (element['scrollTop'] > 0){
                    // Check if the element go behind top
                    // Here fix the underlay on Top
                    behindStatus = 'startTrue';
                }
                if (Math.round(element['scrollTop'] + element['offsetHeight']) < element['scrollHeight']){
                    // Check if the element go after bottom
                    // Here fix the underlat on bottom
                    continueStatus = 'continueTrue';
                }
                // if previous both are false, we should not fix it
            }}>
            <span className="popupCalendar_underLay" style={{top: underLay}}></span>
                {months.map((monthItem, key) => <div key={key} onClick={e => {
                    monthClickFunc(e, monthItem.month.name, monthItem.year)
                }}>
                {monthItem.month.name}
                    <ShowYear monthItem={monthItem} />
            </div> )}
        </div>
        )
    }
}
export default MonthListComponent;
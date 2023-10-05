const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];
const widget = () => {
    let currentDate = new Date();
    let nextMonth = 25;
    let rightSide = calendar(nextMonth, currentDate);
    let leftSide = monthList(rightSide);
    return {rightSide, leftSide}
}

const monthList = (months) => {
    let monthsList = [];
    for (let month of months){
        monthsList.push(month.month);
    }
    return monthsList;
}

const calendar = (nextMonth, currentDate) => {
    let curMonthInd = currentDate.getMonth();
    let curYearInd = currentDate.getFullYear();
    let curDayInd = currentDate.getDate();
    let yearCalc = '';
    let month = '';
    let dateObject = [];
    let year = '';
    let days = '';
    for(let i = 0; i <= nextMonth; i++ ){
        yearCalc = Math.floor((curMonthInd + i) / 12);
        if ((curMonthInd + i) % 12 > 0){
            month = (curMonthInd + i > 12) ? ((curMonthInd + i) % 12) : (curMonthInd + i);
        }else{
            month = 0
        }
        year = curYearInd + yearCalc;
        days  = getListDays(month, year, i, curDayInd);
        dateObject.push({
            month: {
                id: month,
                name: months[month],
                offset: getMonthOffset(year, month),
            },
            days: days,
            year
        });
    }
    return dateObject;
}

const getMonthOffset = (year, month) => {
    return new Date(year, month, 1).getDay();
}

const getListDays = (monthID, year, inkrement, curDayInd) =>{
    let daysArray = [];
    let daysOfMonth = new Date(year, monthID, 0).getDate();
    for (let day = 1; day <= daysOfMonth; day++){
        let dayOfWeek = new Date(year, monthID, day).getDay();
        let dayArray = {
            disabled: false, // the day disabled
            number: day, // the number of day
            dayOfWeek: dayOfWeek, // the number of day of week
        };
        if (inkrement === 0 && day < curDayInd){
            dayArray.disabled = true;
        }
        daysArray.push(dayArray);
    }
    return daysArray;
}

export default widget;
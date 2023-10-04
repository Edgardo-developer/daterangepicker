const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];
const widget = () => {
    let currentDate = new Date();
    let nextMonth = 15;
    let rightSide = calendar(nextMonth, currentDate);
    let leftSide = monthList(rightSide);
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
    let dateObject = [];
    for(let i = 0; i <= nextMonth; i++ ){
        let month = curMonthInd + i > 12 ? curMonthInd + i - 12 : curMonthInd + i;
        let days  = getListDays(month, curYearInd, i, curDayInd);
        dateObject.push({
            month: months[month - 1],
            days: days
        });
    }
    return dateObject;
}

const getListDays = (monthID, year, inkrement, curDayInd) =>{
    let daysArray = [];
    let daysOfMonth = new Date(year, monthID, 0).getDate();
    for (let day = 1; day < daysOfMonth; day++){
        let dayOfWeek = new Date(year, monthID, day).getDate();
        let dayArray = {
            disabled: false, // is the day disabled
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
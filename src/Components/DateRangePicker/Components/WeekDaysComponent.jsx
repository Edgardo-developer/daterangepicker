const WeekDaysComponent = () => {
    const dayOfWeek = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
    return (
        <div className="popupCalendarDays">
              {dayOfWeek.map((day, key) =>  <div key={key}>{day}</div>)}
        </div>
    )
}
export default WeekDaysComponent;
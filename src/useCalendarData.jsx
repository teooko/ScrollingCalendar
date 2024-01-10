import React, {useCallback, useEffect, useRef} from "react";
import {useSelector} from "react-redux";
const UseCalendarData = (month, year, setMonth, setYear) => {
    const latestMonthRef = useRef(month);
    const latestYearRef = useRef(year);
    
    useEffect(() => {
        latestMonthRef.current = month;
        latestYearRef.current = year;
    }, [month, year]);
    //could maybe do a different effect without ref
    const calendar = useSelector(state => state.calendarReducer);
    const {days} = calendar;
    //console.log(days);
    const onViewCallBack = useCallback((viewableItems) => {
        if (viewableItems.changed[0].isViewable) {
            const id = viewableItems.changed[0].item;
            
            if (days.daysById[id].month !== latestMonthRef.current) {
                
                setMonth(days.daysById[id].month);
                
            }
            if (days.daysById[id].year !== latestYearRef.current) {
                setYear(days.daysById[id].year);
            }
        }
    }, []);
    
    return {onViewCallBack};
}

export default UseCalendarData;
import React, {useCallback, useEffect, useRef} from "react";
const UseCalendarData = (month, year, setMonth, setYear) => {
    const latestMonthRef = useRef(month);
    const latestYearRef = useRef(year);
    
    useEffect(() => {
        latestMonthRef.current = month;
        latestYearRef.current = year;
    }, [month, year]);
    //could maybe do a different effect without ref
    
    const onViewCallBack = useCallback((viewableItems) => {
        if (viewableItems.changed[0].isViewable) {
            if (viewableItems.changed[0].item.month !== latestMonthRef.current) {
                setMonth(viewableItems.changed[0].item.month);
            }
            if (viewableItems.changed[0].item.year !== latestYearRef.current) {
                setYear(viewableItems.changed[0].item.year);
            }
        }
    }, []);
    
    return {onViewCallBack};
}

export default UseCalendarData;
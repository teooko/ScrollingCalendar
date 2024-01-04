import React, {useCallback, useEffect, useRef} from "react";
const UseCalendarData = (month, year, setMonth, setYear, dataObj) => {
    const latestMonthRef = useRef(month);
    const latestYearRef = useRef(year);
    
    useEffect(() => {
        latestMonthRef.current = month;
        latestYearRef.current = year;
    }, [month, year]);
    //could maybe do a different effect without ref
    
    const onViewCallBack = useCallback((viewableItems) => {
        if (viewableItems.changed[0].isViewable) {
            if (dataObj.dataById[viewableItems.changed[0].item].month !== latestMonthRef.current) {
                setMonth(dataObj.dataById[viewableItems.changed[0].item].month);
            }
            if (dataObj.dataById[viewableItems.changed[0].item].year !== latestYearRef.current) {
                setYear(dataObj.dataById[viewableItems.changed[0].item].year);
            }
        }
    }, []);
    
    return {onViewCallBack};
}

export default UseCalendarData;
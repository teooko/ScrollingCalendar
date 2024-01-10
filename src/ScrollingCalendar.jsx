import React, {useState} from "react";
import useCalendarData from "./useCalendarData";
import {SafeAreaView, StyleSheet} from "react-native";
import ScrollingDays from "./ScrollingDays";
import CalendarHeader from "./CalendarHeader";
import {Provider} from "react-redux";
import Store from "../store";
const ScrollingCalendar = () => {
    const today = new Date(Date.now());
    const [month, setMonth] = useState(today.getMonth());
    const [year, setYear] = useState(today.getFullYear());

    const {onViewCallBack} = useCalendarData(month, year, setMonth, setYear);

    return (
        <Provider store={Store}>
            <SafeAreaView style={styles.backgroundStyle}>
                <ScrollingDays onViewCallBack={onViewCallBack} today={today}/>
                <CalendarHeader month={month} year={year} />
            </SafeAreaView>
        </Provider>
    );
}

const styles = StyleSheet.create({
    backgroundStyle: {
        width: '100%',
        backgroundColor: 'black'
    }
});
export default ScrollingCalendar;
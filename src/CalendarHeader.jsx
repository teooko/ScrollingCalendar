import {Text, View} from "react-native";
import React from "react";
import {constants} from "./constants";
import {useSelector} from "react-redux";

const CalendarHeader = () => {
    const calendar = useSelector(state => state.calendarReducer);
    const {month, year} = calendar;
    return (
        <View>
            <Text>
                {constants.months[month] + " " + year}
            </Text>
        </View>
    )
}

export default CalendarHeader;
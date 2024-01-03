import {Text, View} from "react-native";
import React from "react";
import {constants} from "./constants";

const CalendarHeader = ({month, year}) => {
    return (
        <View>
            <Text>
                {constants.months[month] + " " + year}
            </Text>
        </View>
    )
}

export default CalendarHeader;
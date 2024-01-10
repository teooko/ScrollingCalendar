import {Pressable, StyleSheet, Text, useWindowDimensions} from "react-native";
import React, {useEffect, useRef} from "react";
import {constants} from "./constants";
import {useDispatch, useSelector} from "react-redux";
import {selectDay} from "../store/slice";
const DayCard = ({id}) => {
    const reff = useRef(0);
    useEffect(() => {
        reff.current += 1;
        console.log(days.daysById[id].monthDay + " " + constants.weekDays[days.daysById[id].weekDay] + " " + reff.current);
    });
    
    const calendar = useSelector(state => state.calendarReducer);
    const dispatch = useDispatch();
    const {days} = calendar;
    return(
        <Pressable style={days.daysById[id].selected ? {...styles.card, ...styles.cardSelected} : styles.card} onPress={() => dispatch(selectDay(id))}>
            <Text style={styles.monthDay}>
                {days.daysById[id].monthDay}
            </Text>
            <Text style={styles.weekDay}>
                {constants.weekDays[days.daysById[id].weekDay]}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        width: 80,
        height: 100,
        borderRadius: 15,
        borderColor: 'transparent',
        borderStyle: 'solid',
        borderWidth: 3
    },
    cardSelected: {
        borderColor: 'red',
    },
    monthDay: {
        color: "black",
        fontSize: 35,
        fontWeight: "bold",
        marginLeft: "auto",
        marginRight: "auto",
        paddingTop: 20
    },
    weekDay: {
        color: "black",
        fontSize: 15,
        marginLeft: "auto",
        marginRight: "auto",
    }
});

export default DayCard;
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
    const {days, selected} = calendar;
    return(
        <Pressable style={styles.card} onPress={() => dispatch(selectDay(id))}>
            <Text style={selected === id ? {...styles.weekDay, ...styles.cardSelected} : styles.weekDay}>
                {constants.weekDays[days.daysById[id].weekDay]}
            </Text>
            <Text style={selected === id ? {...styles.monthDay, ...styles.cardSelected} : styles.monthDay}>
                {days.daysById[id].monthDay}
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
        marginLeft: 5,
        marginRight: 5
    },
    cardSelected: {
        color: "#DF5454",
    },
    monthDay: {
        color: "#560D0D",
        fontSize: 30,
        marginLeft: "auto",
        marginRight: "auto",
        
    },
    weekDay: {
        color: "#560D0D",
        fontSize: 15,
        marginLeft: "auto",
        marginRight: "auto",
        paddingTop: 10
    }
});

export default DayCard;
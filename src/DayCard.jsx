import {Pressable, StyleSheet, Text} from "react-native";
import React, {useEffect, useRef} from "react";
import {constants} from "./constants";
const DayCard = ({answersId, dataObj, setDataObj}) => {
    const reff = useRef(0);
    useEffect(() => {
        reff.current += 1;
        console.log(answersId);
    });
    return(
        <Pressable style={dataObj.dataById[answersId].selected === true ? {...styles.card, ...styles.cardSelected} : styles.card} 
                   onPress={() => handlePress()}>
            <Text style={styles.monthDay}>
                {dataObj.dataById[answersId].monthDay}
            </Text>
            <Text style={styles.weekDay}>
                {constants.weekDays[dataObj.dataById[answersId].weekDay]}
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
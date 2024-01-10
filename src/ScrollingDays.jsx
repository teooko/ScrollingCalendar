import React, {useCallback, useEffect, useState} from "react";
import loadDays from "./loadDays";
import {FlatList, StyleSheet, View} from "react-native";
import DayCard from "./DayCard";
import {useDispatch, useSelector} from "react-redux";
import {insertDays} from "../store/slice";
const ScrollingDays = ({onViewCallBack, today}) => {
    //const [data, setData] = useState([])
    //const [lastLoaded, setLastLoaded] = useState(0);
    //const [selected, setSelected] = useState(0);
    /*
    useEffect(() => {
        loadDays(lastLoaded, setLastLoaded, setData, today, 35, 6);
    }, []);
    */
    const calendar = useSelector(state => state.calendarReducer);
    const { data } = calendar; 
    const dispatch = useDispatch();
    const renderItem = useCallback((({item}) => <DayCard id={item} />), [data])
    return (
            <FlatList
                style={styles.calendar}
                data={data}
                renderItem={renderItem}
                horizontal
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
                overScrollMode={"never"}
                onViewableItemsChanged={onViewCallBack}
                viewabilityConfig={{ viewAreaCoveragePercentThreshold: 100 }}
                onEndReached={() => dispatch(insertDays())}
                onEndReachedThreshold={0.3}
                inverted={true}
            />
    );
}

const styles = StyleSheet.create({
    calendar: {
        height: 110
    }
});
export default ScrollingDays;
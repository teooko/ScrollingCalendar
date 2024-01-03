import React, {useCallback, useEffect, useState} from "react";
import loadDays from "./loadDays";
import {FlatList, StyleSheet, View} from "react-native";
import DayCard from "./DayCard";
const ScrollingDays = ({onViewCallBack, today}) => {
    const [data, setData] = useState([])
    const [lastLoaded, setLastLoaded] = useState(0);
    const [selected, setSelected] = useState(0);
    
    useEffect(() => {
        loadDays(lastLoaded, setLastLoaded, setData, today, 35, 6);
    }, []);
    
    const renderItem = useCallback(((item) => <DayCard data={item} onPress={() => setSelected(item.item.id)} selected={selected}/>), [data, selected])
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
                onEndReached={() => loadDays(lastLoaded, setLastLoaded, setData, today, 35, 6)}
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
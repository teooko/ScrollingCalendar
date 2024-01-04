import React, {useCallback, useEffect, useState} from "react";
import loadDays from "./loadDays";
import {FlatList, StyleSheet, View} from "react-native";
import DayCard from "./DayCard";
const ScrollingDays = ({onViewCallBack, today, dataObj, setDataObj}) => {
    const [answersIdsList, setAnswersIdsList] = useState([]);

    const [lastLoaded, setLastLoaded] = useState(0);
    
    useEffect(() => {
        loadDays(lastLoaded, setLastLoaded, today, 200, 6, dataObj, setDataObj, answersIdsList, setAnswersIdsList);
        //console.log(answersIdsList);
        //console.log(dataObj);
    }, []);

    const renderItem = useCallback((item) => {
        //console.log(item.item);
        return <DayCard answersId={item.item} dataObj={dataObj} setDataObj={setDataObj}/>;
    }, [answersIdsList]);
    return (
            <FlatList
                style={styles.calendar}
                data={answersIdsList}
                renderItem={renderItem}
                horizontal
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
                overScrollMode={"never"}
                //onViewableItemsChanged={onViewCallBack}
                //triggers a re-render
                viewabilityConfig={{ viewAreaCoveragePercentThreshold: 100 }}
                onEndReached={() => loadDays(lastLoaded, setLastLoaded, today, 200, 6, dataObj, setDataObj, answersIdsList, setAnswersIdsList)}
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
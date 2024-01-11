import React, {useCallback} from "react";
import {StyleSheet, View} from "react-native";
import DayCard from "./DayCard";
import {useDispatch, useSelector} from "react-redux";
import {changeHeader,insertDays} from "../store/slice";
import {FlashList} from "@shopify/flash-list";
const ScrollingDays = () => {
    const calendar = useSelector(state => state.calendarReducer);
    const { data } = calendar; 
    const dispatch = useDispatch();
    const renderItem = useCallback((({item}) => <DayCard id={item} />), [data])
    return (
        <View style={styles.calendar}>
            <FlashList
                data={data}
                renderItem={renderItem}
                horizontal
                showsHorizontalScrollIndicator={false}
                overScrollMode={"never"}
                onViewableItemsChanged={useCallback((viewableItems) => dispatch(changeHeader(viewableItems)), [])}
                viewabilityConfig={{ viewAreaCoveragePercentThreshold: 100 }}
                onEndReached={() => dispatch(insertDays())}
                onEndReachedThreshold={0.3}
                inverted={true}
                estimatedItemSize={100}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    calendar: {
        height: 110
    }
});
export default ScrollingDays;
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: [],
    days: {
        daysById: {}
    },
    selected: 0,
    lastLoaded: 0,
    max: 35,
    loading: 6,
    
}

const slice = createSlice({
    name: 'calendar',
    initialState,
    reducers: {
        insertDays(state) {
            const today = new Date(Date.now())
            if(state.lastLoaded >= state.max)
                return;
            for (let i = state.lastLoaded; i <= state.lastLoaded + state.loading; i++) {
                const date = new Date();
                date.setDate(today.getDate() - i);
                state.data.push(i);
                state.days.daysById[i] = {
                            id: i,
                            monthDay: date.getDate(),
                            weekDay: date.getDay(),
                            month: date.getMonth(),
                            year: date.getFullYear(),
                            selected: i === 0
                        }
            }
            state.lastLoaded = state.lastLoaded + state.loading + 1;
        },
        selectDay(state, {payload})
        {
            console.log(payload);
            state.days.daysById[payload].selected = !state.days.daysById[payload].selected;
        }
    }
})

export const { insertDays, selectDay } = slice.actions
export default slice.reducer
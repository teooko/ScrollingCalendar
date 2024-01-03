const loadDays = (lastLoaded, setLastLoaded, setData, today, max, loading) => {
    if(lastLoaded < max)
    {
        const newData = [];
        for (let i = lastLoaded; i <= lastLoaded + loading; i++) {
            const date = new Date();
            date.setDate(today.getDate() - i);
            newData.push({
                id: i,
                monthDay: date.getDate(),
                weekDay: date.getDay(),
                month: date.getMonth(),
                year: date.getFullYear()
            })
        }
        setData(data => [...data, ...newData]);
        setLastLoaded(lastLoaded => lastLoaded + loading + 1)
    }
}

export default loadDays;
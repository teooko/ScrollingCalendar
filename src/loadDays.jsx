const loadDays = (lastLoaded, setLastLoaded, today, max, loading, dataObj, setDataObj, answersIdsList, setAnswersIdsList) => {
    if(lastLoaded < max)
    {
        const dataObj2 = {...dataObj};
        for (let i = lastLoaded; i <= lastLoaded + loading; i++) {
            answersIdsList.push(i);
            const date = new Date();
            date.setDate(today.getDate() - i);
            dataObj2.dataIdsList.push(i);
            dataObj2.dataById[i] =
                {
                    id: i,
                    monthDay: date.getDate(),
                    weekDay: date.getDay(),
                    month: date.getMonth(),
                    year: date.getFullYear(),
                    selected: i === 0
                }
        }
        //console.log(answersIdsList);
       // setAnswersIdsList(answersIdsList2);
        setDataObj(dataObj2);
        setLastLoaded(lastLoaded => lastLoaded + loading + 1)
    }
}

export default loadDays;
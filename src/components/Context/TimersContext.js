import React, { createContext, useState } from 'react';

export const TimerContext = React.createContext('');

export const TimerProvider = (props) => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [days, setDays] = useState(0);
    const [initialTime, setInitialTime] = useState(0);
    const [timerID, setTimerID] = useState(0);

    return (
        
        <TimerProvider.Provider
            value={{
                seconds: [seconds, setSeconds],
                minutes: [minutes, setMinutes],
                hours: [hours, setHours],
                days: [days, setDays],
                initialTime: [initialTime, setInitialTime],
                timerID: [timerID, setTimerID],
            }}
        >
            {props.children}
        </TimerProvider.Provider>
        
    );
}
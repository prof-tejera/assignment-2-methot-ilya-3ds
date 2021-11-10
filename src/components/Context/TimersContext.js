import React, { createContext, useState } from 'react';

export const TimerContext = React.createContext();

export const TimerProvider = (props) => {
    const [milleseconds, setMilleseconds] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [totalSeconds, setTotalSeconds] = useState(0);
    const [initialTime, setInitialTime] = useState(0);
    const [timerID, setTimerID] = useState(0);
    
    const [isActive, setIsActive] = useState(false);


    return (
        
        <TimerContext.Provider
            value={{
                milleseconds, setMilleseconds,
                seconds, setSeconds,
                minutes, setMinutes,
                hours, setHours,
                totalSeconds, setTotalSeconds,
                initialTime, setInitialTime,
                timerID, setTimerID,
                isActive, setIsActive
            }}
        >
            {props.children}
        </TimerContext.Provider>
        
    );
}
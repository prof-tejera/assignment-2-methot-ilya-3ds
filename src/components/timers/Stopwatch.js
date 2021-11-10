import React, {useContext, useState, useEffect, useRef} from "react";
import FlexRow from "../generic/FlexDivs/FlexRow";
import Background from "../generic/Background/Background";
import Incrementer from "../generic/Incrementer/Incrementer";
import NeonParagraph from "../generic/Paragraph/NeonParagraph";
import NeonButton from "../generic/Button/NeonButtons";
import { TimerContext } from "../Context/TimersContext";

const Stopwatch = props => {
  const { milleseconds, setMilleseconds } = useContext(TimerContext);
  const { seconds, setSeconds } = useContext(TimerContext);
  const { minutes, setMinutes } = useContext(TimerContext);
  const { hours, setHours } = useContext(TimerContext);
  const { totalSeconds, setTotalSeconds } = useContext(TimerContext);
  const { initialTime, setInitialTime } = useContext(TimerContext);
  const { timerID, setTimerID } = useContext(TimerContext);
     
  const [isActive, setIsActive] = useState(false);

  let timer = useRef(null);

  useEffect(() => {
    if(isActive) {
    timer.current = setInterval(() => {
      const seconds = totalSeconds + .01;
      setTotalSeconds(seconds)
      convertSecondsToTimer(seconds);
    }, 10);
    setTimerID(timer);

    return () => {
      clearInterval(timer.current);
    };
  }
  }, [isActive, totalSeconds]);

    // Convert seconds into days, hours, minutes, and seconds for the countdown presentation

    const convertSecondsToTimer = (ConvertedSeconds) => {
      setHours(Math.floor(ConvertedSeconds / 3600));
      const hoursRemainder = ConvertedSeconds % 3600;
      setMinutes(Math.floor(hoursRemainder / 60));
      const minutesRemainder = hoursRemainder % 60;
      setSeconds(Math.floor(minutesRemainder / 1));
      const secondsRemainder = minutesRemainder % 1;
      setMilleseconds(Math.floor(secondsRemainder / .01));
    }


  
    const start = () => {
      setIsActive(true);
      
    }

    const stop = () => {
      setIsActive(false);
      clearInterval(timer.current);
    }

    const restart = () => {
      setTotalSeconds(0);
      setIsActive(false);
      clearInterval(timer.current);
      convertSecondsToTimer(0);
    }


    return (
      <>
        <Background centered="true" width="300px" padding="20px">
          <FlexRow height="25%" centered="true">
          <NeonParagraph color="#00C0F9" size="24px">Stopwatch</NeonParagraph>
          </FlexRow>
          <FlexRow height="25%" spaceEvenly="true" width="auto"centered="true">
            <NeonButton className="display" disabled="true" width="40px" height="40px">{hours}h</NeonButton>
            <NeonButton className="display" disabled="true" width="40px" height="40px">{minutes}m</NeonButton>
            <NeonButton className="display" disabled="true" width="40px" height="40px">{seconds}s</NeonButton>
            <NeonButton className="display" disabled="true" width="40px" height="40px">{milleseconds}ms</NeonButton>
          </FlexRow>
          <FlexRow height="25%" padding="10px" width="100%" centered="true">
            <NeonButton className="StartButton" onClick={start} width="30%" height="50px">Start</NeonButton>
            <NeonButton className="PauseButton" onClick={stop} width="30%" height="50px">Pause</NeonButton>
            <NeonButton className="RestartButton" onClick={restart} width="20%" height="50px">&#8634;</NeonButton>
          </FlexRow>
        </Background>
      </>
    );
}

export default Stopwatch;
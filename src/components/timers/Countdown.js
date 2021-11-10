import React from "react";
import { useContext, useState } from "react";
import FlexRow from "../generic/FlexDivs/FlexRow";
import Background from "../generic/Background/Background";
import Incrementer from "../generic/Incrementer/Incrementer";
import NeonParagraph from "../generic/Paragraph/NeonParagraph";
import NeonButton from "../generic/Button/NeonButtons";
import {TimerContext}  from "../Context/TimersContext";



const Countdown = (props) => {

  const {seconds, setSeconds} = useContext(TimerContext);
  const {minutes, setMinutes} =useContext(TimerContext);
  const {hours, setHours} = useContext(TimerContext);
  const {days, setDays} = useContext(TimerContext);
  const {initialTime, setInitialTime} = useContext(TimerContext);
  const {timerID, setTimerID} = useContext(TimerContext);


  const convertTimerToSeconds = () => {
    const totalSeconds = (days * 86400) + (hours * 3600) + (minutes * 60) + seconds;
    return totalSeconds;
  }

  // Convert seconds into days, hours, minutes, and seconds for the countdown presentation

  const convertSecondsToTimer = (ConvertedSeconds) => {
    setDays(Math.floor(ConvertedSeconds / 86400));
    const daysRemainder = ConvertedSeconds % 86400;
    setHours(Math.floor(daysRemainder / 3600));
    const hoursRemainder = daysRemainder % 3600;
    setMinutes(Math.floor(hoursRemainder / 60));
    setSeconds(hoursRemainder % 60);
  }

  const start = () => {

    const initialSeconds = convertTimerToSeconds();
    setInitialTime(initialSeconds);

   setTimerID(setInterval(() => {
      let totalSeconds = convertTimerToSeconds();
      console.log("total seconds are" + totalSeconds);
      if (totalSeconds > 0) {
        totalSeconds = totalSeconds - 1;
        convertSecondsToTimer(totalSeconds);
        console.log("minutes: " + this.state.minutes + "seconds: " + this.state.seconds)
      }
      else{
        stop();
      }
    }, 1000));
  }

  const stop = () => {
    clearInterval(timerID);
  }

  const restart = () => {
    clearInterval(timerID);
    convertSecondsToTimer(initialTime)
  }

  const clear = () => {
    clearInterval(this.state.timerID);
    convertSecondsToTimer(0);
  }

  // Turn off setInterval when reloading

  // this.componentWillUnmount = () => {
  //   clearInterval(this.state.timerID);
  // }

  // this.componentDidMount = () => {
  //   clearInterval(this.state.timerID);
  // }

  return (

    // Convert all of the days, hours, minutes, and seconds into seconds so we can more easily process the data

      <>
        <Background centered="true" width="300px" padding="20px">
          <FlexRow height="25%" centered="true">
            <NeonParagraph color="#00C0F9" size="24px">Countdown</NeonParagraph>
          </FlexRow>
          <FlexRow height="25%" padding="10px" spaceEvenly="true" centered="true" width="100%">
            <Incrementer width="30px" height="30px" max="360" min="0" scale="d" />
            <Incrementer width="30px" height="30px" max="24" min="0" scale="h" addZeros="2"/>
            <Incrementer width="30px" height="30px" max="60" min="0" scale="m" addZeros="2"/>
            <Incrementer width="30px" height="30px" max="60" min="0" scale="s" addZeros="2"/>
          </FlexRow>
          <FlexRow padding="10px" width="100%" spaceEvenly="true" centered="true">
            <NeonButton className="StartButton" onClick={start} width="30%" height="50px">Start</NeonButton>
            <NeonButton className="PauseButton" onClick={stop} width="30%" height="50px">Pause</NeonButton>
            <NeonButton className="RestartButton" onClick={restart} width="20%" height="50px">&#8634;</NeonButton>
          </FlexRow>
          <FlexRow padding="10px" width="100%" spaceEvenly="true" centered="true">
            <NeonButton className="ClearButton" onClick={clear} width="100%" height="50px">Clear</NeonButton>
          </FlexRow>
        </Background>
      </>
    );
}

export default Countdown;

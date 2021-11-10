import React from "react";
import FlexRow from "../generic/FlexDivs/FlexRow";
import Background from "../generic/Background/Background";
import Incrementer from "../generic/Incrementer/Incrementer";
import NeonParagraph from "../generic/Paragraph/NeonParagraph";
import NeonButton from "../generic/Button/NeonButtons";

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      milleseconds: 0,
      seconds: 0,
      minutes: 0,
      hours: 0,
      days: 0,
      currentTime: 0,
      timerID: 0
    };
  }

  render() {

    // Convert seconds into days, hours, minutes, and seconds for the countdown presentation

    const convertSecondsToTimer = (ConvertedSeconds) => {
      this.setState({ days: Math.floor(ConvertedSeconds / 86400)});
      const daysRemainder = ConvertedSeconds % 86400;
      this.setState({ hours: Math.floor(daysRemainder / 3600)});
      const hoursRemainder = daysRemainder % 3600;
      this.setState({ minutes: Math.floor(hoursRemainder / 60)});
      const minutesRemainder = hoursRemainder % 60;
      this.setState({ seconds: Math.floor(minutesRemainder / 1)});
      const secondsRemainder = minutesRemainder % 1;
      this.setState({ milleseconds: Math.floor(secondsRemainder / .01)});
    }


    // get the currentSeconds and add 1ms
    // Create a asynchronous setinterval that runs every second
    // decrease the totalSeconds by one every interval
    // convert the totalSeconds back to the normal time
    const start = () => {
      this.state.timerID = setInterval(() => {
          this.state.currentTime = this.state.currentTime + .01;
          convertSecondsToTimer(this.state.currentTime);
          console.log("minutes: " + this.state.minutes + "seconds: " + this.state.seconds)        
      }, 10)
    }

    const stop = () => {
      clearInterval(this.state.timerID);
    }

    const restart = () => {
      clearInterval(this.state.timerID);
      convertSecondsToTimer(this.state.initialTime)
    }

    const clear = () => {
      clearInterval(this.state.timerID);
      convertSecondsToTimer(0);
      this.setState({currentTime: 0});
    }

    this.componentWillUnmount = () => {
      clearInterval(this.state.timerID);
    }

    this.componentDidMount = () => {
      clearInterval(this.state.timerID);
    }

    return (
      <>
        <Background centered="true" width="300px" padding="20px">
          <FlexRow height="25%" centered="true">
          <NeonParagraph color="#00C0F9" size="24px">Stopwatch</NeonParagraph>
          </FlexRow>
          <FlexRow height="25%" spaceEvenly="true" width="auto"centered="true">
            <NeonButton className="display" disabled="true" width="40px" height="40px">{ this.state.days}d</NeonButton>
            <NeonButton className="display" disabled="true" width="40px" height="40px">{ this.state.hours}h</NeonButton>
            <NeonButton className="display" disabled="true" width="40px" height="40px">{ this.state.minutes}m</NeonButton>
            <NeonButton className="display" disabled="true" width="40px" height="40px">{ this.state.seconds}s</NeonButton>
            <NeonButton className="display" disabled="true" width="40px" height="40px">{ this.state.milleseconds}ms</NeonButton>
          </FlexRow>
          <FlexRow height="25%" padding="10px" width="100%" centered="true">
            <NeonButton className="StartButton" onClick={start} width="30%" height="50px">Start</NeonButton>
            <NeonButton className="PauseButton" onClick={stop} width="30%" height="50px">Pause</NeonButton>
            <NeonButton className="RestartButton" onClick={restart} width="20%" height="50px">&#8634;</NeonButton>
          </FlexRow>
          <FlexRow height="25%" padding="10px" width="100%" spaceEvenly="true" centered="true">
            <NeonButton className="ClearButton" onClick={clear} width="100%" height="50px">Clear</NeonButton>
          </FlexRow>
        </Background>
      </>
    );
  }
}

export default Stopwatch;

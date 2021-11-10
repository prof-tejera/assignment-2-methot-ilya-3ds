import React from "react";
import Button from "../generic/Button/Button"
import FlexColumn from "../generic/FlexDivs/FlexColumn";
import FlexRow from "../generic/FlexDivs/FlexRow";
import Background from "../generic/Background/Background";
import Incrementer from "../generic/Incrementer/Incrementer";
import NeonParagraph from "../generic/Paragraph/NeonParagraph";
import NeonButton from "../generic/Button/NeonButtons";

class XY extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      minutes: 0,
      hours: 0,
      days: 0,
      initialTime: 0,
      timerID: 0,
      round: 1
    };
  }

  render() {


    const incrementSeconds = () => {
      console.log("incrementing seconds: " + this.state.seconds);
      if (this.state.seconds < 60) {
        this.setState({ seconds: this.state.seconds + 1 })
      }
    }
    const decreaseSeconds = () => {
      if (this.state.seconds > 0) {
        this.setState({ seconds: this.state.seconds - 1 })
      }
    }
    const incrementMinutes = () => {
      console.log("incrementing minutes " + this.state.minutes);
      if (this.state.minutes < 60) {
        this.setState({ minutes: this.state.minutes + 1 })
      }
    }
    const decreaseMinutes = () => {
      if (this.state.minutes > 0) {
        this.setState({ minutes: this.state.minutes - 1 })
      }
    }
    const incrementHours = () => {
      console.log("incrementing hours " + this.state.hours);
      if (this.state.hours < 24) {
        this.setState({ hours: this.state.hours + 1 })
      }
    }
    const decreaseHours = () => {
      if (this.state.hours > 0) {
        this.setState({ hours: this.state.hours - 1 })
      }
    }
    const incrementDays = () => {
      console.log("incrementing days " + this.state.days);
      if (this.state.days < 360) {
        this.setState({ days: this.state.days + 1 })
      }
    }
    const decreaseDays = () => {
      if (this.state.days > 0) {
        this.setState({ days: this.state.days - 1 })
      }
    }
    const incrementRounds = () => {
      if (this.state.round < 100) {
        this.setState({ round: this.state.round + 1 })
      }
    }

    const decreaseRounds = () => {
      if (this.state.round > 1) {
        this.setState({ round: this.state.round - 1 })
      }
    }

    // Convert all of the days, hours, minutes, and seconds into seconds so we can more easily process the data

    const convertTimerToSeconds = () => {
      const totalSeconds = (this.state.days * 86400) + (this.state.hours * 3600) + (this.state.minutes * 60) + this.state.seconds;
      return totalSeconds;
    }

    // Convert seconds into days, hours, minutes, and seconds for the countdown presentation

    const convertSecondsToTimer = (ConvertedSeconds) => {
      this.setState({ days: Math.floor(ConvertedSeconds / 86400) });
      const daysRemainder = ConvertedSeconds % 86400;
      this.setState({ hours: Math.floor(daysRemainder / 3600) });
      const hoursRemainder = daysRemainder % 3600;
      this.setState({ minutes: Math.floor(hoursRemainder / 60) });
      this.setState({ seconds: hoursRemainder % 60 });
    }

    // Buttons Start
    //

    const start = () => {
      const initialSeconds = convertTimerToSeconds();
      this.state.initialTime = initialSeconds;
      this.state.timerID = setInterval(() => {
        let totalSeconds = convertTimerToSeconds();
        console.log("total seconds are" + totalSeconds);
        if (totalSeconds > 0) {
          totalSeconds = totalSeconds - 1;
          convertSecondsToTimer(totalSeconds);
          console.log("minutes: " + this.state.minutes + "seconds: " + this.state.seconds)
          // somehow we trigger a rerender here?
        }
        else {
          if (this.state.round > 1) {
            convertSecondsToTimer(this.state.initialTime);
            this.setState({ round: this.state.round - 1 })
          }
          else {
            stop();
          }
        }
      }, 1000)
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
    }

    // Turn off setInterval when reloading

    this.componentWillUnmount = () => {
      clearInterval(this.state.timerID);
    }

    this.componentDidMount = () => {
      clearInterval(this.state.timerID);
    }

    // Add leading zeros
    // src: https://www.codegrepper.com/code-examples/javascript/react+js+add+leading+zeros

    function padLeadingZeros(num, size) {
      var s = num + "";
      while (s.length < size) s = "0" + s;
      return s;
    }
    // examples:
    // padLeadingZeros(57, 3);// "057"
    // padLeadingZeros(57, 4); //"0057"

    return (
      <>
         <Background centered="true" width="300px" padding="20px">
          
          <FlexRow height="25%" centered="true">
          <NeonParagraph color="#00C0F9" size="24px">XY</NeonParagraph>
          </FlexRow>
          <FlexRow height="25%" padding="10px" width="100%">
            <NeonParagraph color="#00C0F9">Round</NeonParagraph>
            <Incrementer width="30px" height="30px" max="360" min="0"/>
          </FlexRow>
          <FlexRow height="25%" padding="10px" spaceEvenly="true" width="100%">
            <Incrementer width="30px" height="30px" max="360" min="0" scale="d" />
            <Incrementer width="30px" height="30px" max="24" min="0" scale="h" addZeros="2"/>
            <Incrementer width="30px" height="30px" max="60" min="0" scale="m" addZeros="2"/>
            <Incrementer width="30px" height="30px" max="60" min="0" scale="s" addZeros="2"/>
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

export default XY;

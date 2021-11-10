import React from "react";
import Button from "../generic/Button/Button"
import FlexColumn from "../generic/FlexDivs/FlexColumn";
import FlexRow from "../generic/FlexDivs/FlexRow";
import Background from "../generic/Background/Background";
import Incrementer from "../generic/Incrementer/Incrementer";
import NeonParagraph from "../generic/Paragraph/NeonParagraph";
import NeonButton from "../generic/Button/NeonButtons";

class Tabata extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentState: "work",
      work: 0,
      rest: 0,
      initialWork: 0,
      initialRest: 0,
      timerID: 0,
      round: 1
    };
  }

  render() {


    const incrementWork = () => {
      if (this.state.work < 60) {
        this.setState({ work: this.state.work + 1 })
      }
    }
    const decreaseWork = () => {
      if (this.state.work > 0) {
        this.setState({ work: this.state.work - 1 })
      }
    }
    const incrementRest = () => {
      console.log("incrementing minutes " + this.state.rest);
      if (this.state.rest < 60) {
        this.setState({ rest: this.state.rest + 1 })
      }
    }
    const decreaseRest = () => {
      if (this.state.rest > 0) {
        this.setState({ rest: this.state.rest - 1 })
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

      this.state.initialWork = this.state.work;
      this.state.initialRest = this.state.rest;

      this.state.timerID = setInterval(() => {
        if (this.state.work > 0) {
          this.setState({ work: this.state.work - 1 })
        }
        else {
          if (this.state.rest > 0) {
            this.setState({ rest: this.state.rest - 1 })

          }
          else {
            if (this.state.round > 1) {
              this.setState({ round: this.state.round - 1 });
              this.setState({ work: this.state.initialWork });
              this.setState({ rest: this.state.initialRest });
            }
            else {
              stop();
            }
          }
        }
      }, 1000)
    }

    const stop = () => {
      clearInterval(this.state.timerID);
    }

    const restart = () => {
      clearInterval(this.state.timerID);
      this.setState({ work: this.state.initialWork });
      this.setState({ rest: this.state.initialRest });
    }

    const clear = () => {
      clearInterval(this.state.timerID);
      this.setState({ work: 0 });
      this.setState({ rest: 0 });
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
        <Background centered="true" height="500px" width="300px" padding="20px">



              <NeonParagraph padding="10px" height="10%" color="#00C0F9" size="36px" >Tabata</NeonParagraph>
              
              <NeonParagraph padding="10px" height="10%" color="#00C0F9" size="18px" >Round</NeonParagraph>
              <Incrementer padding="10px" width="30px" height="auto" max="60" min="0"/>
              
            <FlexRow width="100%" height="20%" padding="10px">
              <NeonParagraph margin="10px" color="#00C0F9" size="14px" >Work</NeonParagraph>
              <Incrementer  width="50px" height="auto" max="60" min="0" scale="s" addZeros="2"/>
              <Incrementer width="50px" height="auto" max="60" min="0" scale="s" addZeros="2"/>
              <NeonParagraph padding="10px" color="#00C0F9" size="14px" >Rest</NeonParagraph>
            </FlexRow>
            <FlexRow  height="30%" width="100%">
              <FlexRow padding="10px" height="50%"width="100%" centered="true" spaceEvenly="true" centered="true">
                  <NeonButton onClick={start} className="StartButton"width="30%" height="50px">start</NeonButton>
                  <NeonButton onClick={stop}  className="PauseButton" width="30%" height="50px">pause</NeonButton>
                  <NeonButton onClick={restart}  className="RestartButton" width="20%" height="50px">&#8634;</NeonButton>
              </FlexRow>
              <FlexRow padding="10px" height="50%" width="100%" spaceEvenly="true" centered="true">
                  <NeonButton onClick={clear} className="ClearButton" width="100%" height="50px">Clear</NeonButton>
              </FlexRow>
            </FlexRow>

        </Background>
      </>
    );
  }
}

export default Tabata;

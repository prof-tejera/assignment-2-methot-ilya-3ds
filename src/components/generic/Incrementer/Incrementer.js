import { Component } from "react";
import Button from "../Button/Button";
import FlexColumn from "../FlexDivs/FlexColumn";
import FlexRow from "../FlexDivs/FlexRow";
import "./Incrementer.css";
import PropTypes from "prop-types";
import Input from "../Input/Input";

class Incrementer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      variable: 0,
    };
  }

  render() {
    const changeTime = (direction, maxMin) => {
      if (direction === "increment") {
        if (this.state.variable < maxMin) {
          this.setState({ variable: this.state.variable + 1 });
        }
      } else {
        if (this.state.variable > maxMin) {
          this.setState({ variable: this.state.variable - 1 });
        }
      }
    };

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
        <FlexColumn
          padding="10px"
          width="auto"
          height="auto"
          centered="true"
          spaceEvenly="true"
          margin={this.props.margin}
        >
          <FlexRow width="auto" height="auto" spaceEvenly="true" centered="true">
            <Button
              onClick={() => {
                changeTime("increment", this.props.max);
              }}
              className="smallButton"
              width={this.props.width / 2}
              height={this.props.height / 2}
            >
              ^
            </Button>
          </FlexRow>
          <FlexRow width="auto" height="auto" centered="true">
            <Input
              width={this.props.width}
              height={this.props.height}
            >
            </Input>
          </FlexRow>
          <FlexRow width="auto" height="auto" spaceEvenly="true" centered="true">
            <Button
              onClick={() => changeTime("decrease", this.props.min)}
              className="smallButton"
              width={this.props.width / 2}
              height={this.props.height / 2}
            >
              v
            </Button>
          </FlexRow>
        </FlexColumn>
      </>
    );
  }
}

Incrementer.propTypes = {
  color: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  max: PropTypes.number,
  min: PropTypes.number,
  addZeros: PropTypes.number,
  scale: PropTypes.string,
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Incrementer.defaultProps = {
  width: 50,
  height: 50,
  max: 10,
  min: 0,
  addZeros: 0,
  scale: "",
  margin: "0px",
  padding: "0px",
};

export default Incrementer;

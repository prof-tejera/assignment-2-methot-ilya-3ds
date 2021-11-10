import { Component } from "react";
import "./Background.css";
import FlexColumn from "../FlexDivs/FlexColumn.js";
import PropTypes from "prop-types";

const styles = {
  centered: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
};

class Background extends Component {
  render() {
    return (
      <>
        <div
          style={{
            display: "flex",
            backgroundColor: "black",
            width: this.props.width,
            height: this.props.height,
            flexDirection: "column",
            padding: this.props.padding,
            borderRadius: "25x",
          }}
          className="Background"
        >
          <FlexColumn
            width="100%"
            height="100%"
            centered="true"
            spaceAround="true"
          >
            <div class="container">
              <FlexColumn padding="10px" width="100%" height="100%" spaceAround="true">{this.props.children}</FlexColumn>
              <div class="frame"></div>
              <div class="frame"></div>
              <div class="frame"></div>
              <div class="frame"></div>
              <div class="frame"></div>
              <div class="frame"></div>
              <div class="frame"></div>
              <div class="frame"></div>
              <div class="frame"></div>
              <div class="frame"></div>
              <div class="frame"></div>
              <div class="frame"></div>
              <div class="frame"></div>
              <div class="frame"></div>
            </div>
            
          </FlexColumn>
        </div>
      </>
    );
  }
}

Background.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  padding: PropTypes.string
}

Background.defaultProps = {
  width: 300,
  height: 400,
  padding: "10px",
};

export default Background;

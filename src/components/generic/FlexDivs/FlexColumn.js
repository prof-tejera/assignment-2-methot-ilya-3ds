import { Component } from "react";
import PropTypes from 'prop-types';

const styles = {
  centered: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  spaceEvenly: {
    justifyContent: "space-around",
    alignContent: "space-around",
  },
};

class FlexColumn extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          backgroundColor: this.props.color,
          width: this.props.width,
          height: this.props.height,
          flexDirection: "column",
          margin: this.props.margin,
          padding: this.props.padding,
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          boxSizing: "border-box",
          justifyContent: this.props.spaceEvenly ? styles.spaceEvenly.justifyContent : styles.centered.justifyContent
        }}
        className="Flex-Column"
      >
        {this.props.children}
      </div>
    );
  }
}

FlexColumn.propTypes = {
  color: PropTypes.string,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  margin: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  padding: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  spaceEvenly: PropTypes.string,
}

FlexColumn.defaultProps = {
  color: "none",
  width: "auto",
  height: "auto",
  margin: "0px;",
  padding: "0px",
  spaceEvenly: "false"
}

export default FlexColumn;

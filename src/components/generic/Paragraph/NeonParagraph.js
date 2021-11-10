import { Component } from "react";
import "./NeonParagraph.css"
import PropTypes from 'prop-types';

class NeonParagraph extends Component {
  render() {
    return <p style={{
        color: this.props.color,
        textShadow: `0 0 10px ${this.props.color}`,
        fontSize: this.props.size,
        className: "NeonParagraph",
        height: this.props.height,
        width: this.props.width,
        margin: "0px",
        padding: this.props.padding,
        boxSizing: "border-box"
    }}>{this.props.children}</p>;
  }
}

NeonParagraph.propTypes = {
  color: PropTypes.string,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  padding: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

NeonParagraph.defaultProps = {
  color: "Blue",
  width: "auto",
  height: "auto",
  size: "24px",
  padding: "10px"
}

export default NeonParagraph;

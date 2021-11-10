import { Component } from "react";
import PropTypes from 'prop-types';
import "./Input.css"

class Input extends Component {
  render() {
    return (
      <input
        style={
          {
            boxSizing: "border-box",
            textAlign: "center",
            width: this.props.width,
            height: this.props.height,
            cursor: "auto",
            borderRadius: "30px",
            fontSize: "auto"
          }
        }
        type="text"
        value="0"
        className="display"
      >
      </input>
    )
  }
}

Input.propTypes = {
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

Input.defaultProps = {
  width: 50,
  height: 50,
}

export default Input;
import { Component } from "react";
import "./Button.css";
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    return (
      <button
        onClick={this.props.onClick}
        style={
          {
            boxSizing: "border-box",
            textAlign: "center",
            backgroundColor: this.props.color,
            width: this.props.width,
            height: this.props.height,
            cursor: this.props.disabled && "auto",
            borderRadius: "30px",
            fontSize: "auto"
          }
        }
        className={this.props.className}
        disabled={this.props.disabled}
        selected={this.props.selected}

      >
        {this.props.image}
        {this.props.children}
      </button>
    )
  }
}

Button.propTypes = {
  onClick: PropTypes.func,
  color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  selected: PropTypes.bool,
}

Button.defaultProps = {
  width: "50px",
  height: "50px",
  className: "Default-button",
  disabled: false,
  selected: false,
  color: "black"
}

export default Button;
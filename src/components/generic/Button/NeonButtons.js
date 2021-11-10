import { Component } from "react";
import "./NeonButtons.css"
import PropTypes from 'prop-types';

class NeonButton extends Component {
  render() {
    return (
      <button
        onClick={this.props.onClick}
        style={
          {
            boxSizing: "border-box",
            textAlign: "center",
            width: this.props.width,
            height: this.props.height,
            cursor: this.props.disabled && "auto",
            borderRadius: "30px",
            boxSizing: "border-box"
          }
        }
        className={this.props.className}
        disabled={this.props.disabled}
        selected={this.props.selected}

      >
        {this.props.text}
        {this.props.image}
        {this.props.children}
      </button>
    )
  }
}

NeonButton.propTypes = {
  onClick: PropTypes.func,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  className: PropTypes.string,
  disabled: PropTypes.bool,
}

NeonButton.defaultProps = {
  width: 50,
  height: "50px",
  className: "StartButton",
  disabled: false,
}


export default NeonButton;
import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <div className={`column-${this.props.cols}`}>
        <button
          className="calcButton"
          onClick={symbol => {
            this.props.action(this.props.symbol);
          }}
        >
          {this.props.symbol}
        </button>
      </div>
    );
  }
}

export default Button;

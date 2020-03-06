/* eslint-disable react/require-default-props */

import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { buttonName } = this.props;
    const { clickHandler } = this.props;
    clickHandler(buttonName);
  }

  render() {
    const { color, size, buttonName } = this.props;
    return (
      <button className={`btn ${size} bg-${color || 'orange'}`} onClick={this.handleClick} type="button">{buttonName}</button>
    );
  }
}

Button.propTypes = {
  buttonName: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  clickHandler: PropTypes.func,
};

export default Button;

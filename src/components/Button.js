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
    const { cssClass, buttonName } = this.props;
    return (
      <button className={`button ${cssClass}`} onClick={this.handleClick} type="button">{buttonName}</button>
    );
  }
}

Button.propTypes = {
  buttonName: PropTypes.string,
  cssClass: PropTypes.string,
  clickHandler: PropTypes.func,
};

export default Button;

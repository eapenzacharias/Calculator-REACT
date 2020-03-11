/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class ButtonPanel extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const { clickHandler } = this.props;
    clickHandler(buttonName);
  }

  renderCol(arr) {
    return (
      <div className="btn-col">
        <Button buttonName={arr[0]} clickHandler={this.handleClick} color="grey" />
        <Button buttonName={arr[1]} clickHandler={this.handleClick} color="grey" />
        <Button buttonName={arr[2]} clickHandler={this.handleClick} color="grey" />
        <Button buttonName={arr[3]} clickHandler={this.handleClick} />
      </div>
    );
  }

  render() {
    return (
      <div className="button-panel">
        {this.renderCol(['AC', '+/-', '%', '/'])}
        {this.renderCol(['7', '8', '9', 'x'])}
        {this.renderCol(['4', '5', '6', '-'])}
        {this.renderCol(['1', '2', '3', '+'])}
        <div className="btn-col">
          <Button buttonName="0" clickHandler={this.handleClick} wide color="grey" />
          <Button buttonName="." clickHandler={this.handleClick} color="grey" />
          <Button buttonName="=" clickHandler={this.handleClick} />
        </div>
      </div>
    );
  }
}

ButtonPanel.propTypes = { clickHandler: PropTypes.func };

export default ButtonPanel;

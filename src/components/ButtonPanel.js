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

  render() {
    return (
      <div className="button-panel">
        <div className="btn-col">
          <Button buttonName="AC" clickHandler={this.handleClick} size="small" color="grey" />
          <Button buttonName="+/-" clickHandler={this.handleClick} size="small" color="grey" />
          <Button buttonName="%" clickHandler={this.handleClick} size="small" color="grey" />
          <Button buttonName="/" clickHandler={this.handleClick} size="small" />
        </div>
        <div className="btn-col">
          <Button buttonName="7" clickHandler={this.handleClick} size="small" color="grey" />
          <Button buttonName="8" clickHandler={this.handleClick} size="small" color="grey" />
          <Button buttonName="9" clickHandler={this.handleClick} size="small" color="grey" />
          <Button buttonName="x" clickHandler={this.handleClick} size="small" />
        </div>
        <div className="btn-col">
          <Button buttonName="4" clickHandler={this.handleClick} size="small" color="grey" />
          <Button buttonName="5" clickHandler={this.handleClick} size="small" color="grey" />
          <Button buttonName="6" clickHandler={this.handleClick} size="small" color="grey" />
          <Button buttonName="-" clickHandler={this.handleClick} size="small" />
        </div>
        <div className="btn-col">
          <Button buttonName="1" clickHandler={this.handleClick} size="small" color="grey" />
          <Button buttonName="2" clickHandler={this.handleClick} size="small" color="grey" />
          <Button buttonName="3" clickHandler={this.handleClick} size="small" color="grey" />
          <Button buttonName="+" clickHandler={this.handleClick} size="small" />
        </div>
        <div className="btn-col">
          <Button buttonName="0" clickHandler={this.handleClick} size="big" color="grey" />
          <Button buttonName="." clickHandler={this.handleClick} size="small" color="grey" />
          <Button buttonName="=" clickHandler={this.handleClick} size="small" />
        </div>
      </div>
    );
  }
}

ButtonPanel.propTypes = { clickHandler: PropTypes.func };

export default ButtonPanel;

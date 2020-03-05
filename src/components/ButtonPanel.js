import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class ButtonPanel extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    // eslint-disable-next-line react/prop-types
    const { clickHandler } = this.props;
    clickHandler(buttonName);
  }

  render() {
    return (
      <div className="container-button-panel">
        <div className="col btn-col">
          <Button buttonName="AC" clickHandler={this.handleClick} cssClass="bg-grey btn small" />
          <Button buttonName="+/-" clickHandler={this.handleClick} cssClass="bg-grey btn small" />
          <Button buttonName="%" clickHandler={this.handleClick} cssClass="bg-grey btn small" />
          <Button buttonName="/" clickHandler={this.handleClick} cssClass="bg-orange btn small" />
        </div>
        <div className="col btn-col">
          <Button buttonName="7" clickHandler={this.handleClick} cssClass="bg-grey btn small" />
          <Button buttonName="8" clickHandler={this.handleClick} cssClass="bg-grey btn small" />
          <Button buttonName="9" clickHandler={this.handleClick} cssClass="bg-grey btn small" />
          <Button buttonName="x" clickHandler={this.handleClick} cssClass="bg-orange btn small" />
        </div>
        <div className="col btn-col">
          <Button buttonName="4" clickHandler={this.handleClick} cssClass="bg-grey btn small" />
          <Button buttonName="5" clickHandler={this.handleClick} cssClass="bg-grey btn small" />
          <Button buttonName="6" clickHandler={this.handleClick} cssClass="bg-grey btn small" />
          <Button buttonName="-" clickHandler={this.handleClick} cssClass="bg-orange btn small" />
        </div>
        <div className="col btn-col">
          <Button buttonName="1" clickHandler={this.handleClick} cssClass="bg-grey btn small" />
          <Button buttonName="2" clickHandler={this.handleClick} cssClass="bg-grey btn small" />
          <Button buttonName="3" clickHandler={this.handleClick} cssClass="bg-grey btn small" />
          <Button buttonName="+" clickHandler={this.handleClick} cssClass="bg-orange btn small" />
        </div>
        <div className="col btn-col">
          <Button buttonName="0" clickHandler={this.handleClick} colour="bkg-grey" size="btn-big" />
          <Button buttonName="." clickHandler={this.handleClick} cssClass="bg-grey btn small" />
          <Button buttonName="=" clickHandler={this.handleClick} cssClass="bg-orange btn small" />
        </div>
      </div>
    );
  }
}

ButtonPanel.protoTypes = { clickHandler: PropTypes.func };

export default ButtonPanel;

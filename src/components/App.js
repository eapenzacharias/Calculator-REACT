import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '0',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    this.setState({
      value: buttonName,
    });
  }

  render() {
    const { value } = this.state;
    return (
      <div className="container main">
        <Display value={value} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;

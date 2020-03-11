import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import './css/app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: '0',
      next: null,
      operations: null, // eslint-disable-line react/no-unused-state
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const cal = this.state;
    this.setState(calculate(buttonName, cal));
  }

  render() {
    const { total, next } = this.state;
    return (
      <div className="container main">
        <Display value={next || total} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;

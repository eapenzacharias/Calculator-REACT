import React from 'react';
import Display from './Display';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };
  }

  render() {
    return (
      <div className="container main">
        <Display value={this.state.value} />
      </div>
    );
  }
}

export default App;

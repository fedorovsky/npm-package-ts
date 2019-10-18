import * as React from 'react';

interface OwnProps {}

interface State {
  message: string;
}

class Hello extends React.Component<OwnProps, State> {
  state = {
    message: 'Message hello',
  };

  handleClick = () => {
    this.setState({
      message: 'Message was changed',
    });
  };

  render() {
    return <div onClick={this.handleClick}> {this.state.message}</div>;
  }
}

export default Hello;

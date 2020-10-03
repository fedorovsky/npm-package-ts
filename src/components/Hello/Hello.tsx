import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: 1px solid red;
`;

interface OwnProps {
  message?: string;
}

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
    const { message } = this.state;
    return <Wrapper onClick={this.handleClick}>{message}</Wrapper>;
  }
}

export default Hello;

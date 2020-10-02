import * as React from 'react';
import styled from 'styled-components';
// TODO
// import * as ReactModal from 'react-modal';

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
    return (
      <Wrapper onClick={this.handleClick}>
        {/* <ReactModal isOpen={true}>123</ReactModal> */}
        {message}
      </Wrapper>
    );
  }
}

export default Hello;

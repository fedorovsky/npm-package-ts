import * as React from 'react';
import styled from 'styled-components';
// TODO
// import * as ReactModal from 'react-modal';

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
    return (
      <Wrapper onClick={this.handleClick}>
        {/* <ReactModal isOpen={true}>123</ReactModal> */}
        {this.state.message}
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  border: 1px solid red;
`;

export default Hello;

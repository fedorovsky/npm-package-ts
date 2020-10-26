import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: 1px solid red;
`;

interface OwnProps {
  message: string;
  onClick?: (e: React.MouseEvent) => void;
}

const Hello: React.FC<OwnProps> = ({ message, onClick }) => {
  return <Wrapper onClick={onClick}>{message}</Wrapper>;
};

export default Hello;

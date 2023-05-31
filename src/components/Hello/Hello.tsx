import * as React from 'react';
import {ThemeProvider} from 'styled-components';
import * as Styled from './Hello.styled';

const theme = {
  main: "mediumseagreen"
};

const Hello = () => {
  return <ThemeProvider theme={theme}><Styled.Wrapper>Hello123</Styled.Wrapper></ThemeProvider>
}

export default Hello;

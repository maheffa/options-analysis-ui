import React from 'react';
import styled from 'styled-components';
import './App.css';
import { Chain } from "./pages/Chain";
import { Colors } from "@blueprintjs/core";

const AppOutterContainer = styled.div`
  display: flex;
  justify-content: center;
  
  &.bp3-dark {
    background-color: ${Colors.DARK_GRAY4};
  }
`;
const AppInnerContainer = styled.div`
  max-width: 1100px;
  min-width: 720px;
`;

const App: React.FunctionComponent = () => (
  <AppOutterContainer className="bp3-dark">
    <AppInnerContainer>
      <Chain/>
    </AppInnerContainer>
  </AppOutterContainer>
);

export default App;
